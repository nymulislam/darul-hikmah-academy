"use client";

import { Button, Checkbox, FieldError, InputGroup, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Envelope, Eye, EyeSlash } from '@gravity-ui/icons';
import { Icon } from '@iconify/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { authClient } from '@/app/lib/auth-client';

const LoginPage = () => {
    const router = useRouter();

    // Form States
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    // UI & Loading States
    const [isVisible, setIsVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const toggleVisibility = () => setIsVisible(!isVisible);

    const searchParams = useSearchParams();
    const rawCallbackUrl = searchParams.get('callbackUrl');
    const callbackUrl = rawCallbackUrl ? decodeURIComponent(rawCallbackUrl) : '/';

    // Email & Password Login Handler
    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        await authClient.signIn.email({
            email,
            password,
            rememberMe,
            callbackURL: callbackUrl,
        }, {
            onRequest: () => setLoading(true),
            onSuccess: () => {
                setLoading(false);
                router.push(callbackUrl);
                router.refresh();
            },
            onError: (ctx) => {
                setLoading(false);
                setErrorMessage(ctx.error.message || 'Invalid email or password');
            }
        });
    };

    // Google Social Login Handler
    const handleGoogleSignIn = async () => {
        const fullCallbackUrl = typeof window !== 'undefined'
            ? `${window.location.origin}${callbackUrl}`
            : callbackUrl;

        await authClient.signIn.social({
            provider: 'google',
            callbackURL: fullCallbackUrl,
        });
    };

    return (
        <div className="grid place-items-center bg-gray-50 px-6 py-12">
            <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">

                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-[#1A1B5F]">Welcome Back</h2>
                    <p className="mt-2 text-sm text-gray-500">Please enter your details to sign in</p>
                </div>

                {/* Error Alert Message */}
                {errorMessage && (
                    <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg text-center">
                        {errorMessage}
                    </div>
                )}

                {/* Form */}
                <form className="space-y-4" onSubmit={handleLogin}>
                    <TextField isRequired className="w-full" name="email">
                        <Label>Email address</Label>
                        <InputGroup>
                            <InputGroup.Prefix>
                                <Envelope className="size-4 text-muted" />
                            </InputGroup.Prefix>
                            <InputGroup.Input
                                className="w-full"
                                placeholder="name@email.com"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </InputGroup>
                    </TextField>

                    <TextField isRequired className="w-full" name="password">
                        <Label>Password</Label>
                        <InputGroup>
                            <InputGroup.Input
                                className="w-full"
                                type={isVisible ? "text" : "password"}
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <InputGroup.Suffix className="pr-1">
                                <Button
                                    type="button"
                                    isIconOnly
                                    aria-label={isVisible ? "Hide password" : "Show password"}
                                    size="sm"
                                    variant="ghost"
                                    onPress={toggleVisibility}
                                >
                                    {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                                </Button>
                            </InputGroup.Suffix>
                        </InputGroup>
                    </TextField>

                    <div className="flex items-center justify-between px-1">
                        <Checkbox
                            id="rememberMe"
                            name="rememberMe"
                            isSelected={rememberMe}
                            onChange={(val) => setRememberMe(typeof val === 'boolean' ? val : val.target.checked)}
                        >
                            <Checkbox.Control>
                                <Checkbox.Indicator />
                            </Checkbox.Control>
                            <Checkbox.Content>
                                <Label htmlFor="rememberMe">Remember me</Label>
                            </Checkbox.Content>
                        </Checkbox>

                        <Link href="/forgot-password" className="text-sm text-secondary font-medium hover:underline">
                            Forgot password?
                        </Link>
                    </div>

                    <Button
                        type="submit"
                        isLoading={loading}
                        className="w-full bg-[#1A1B5F] text-white font-bold py-6"
                        radius="lg"
                    >
                        {loading ? 'Signing In...' : 'Sign In'}
                    </Button>
                </form>

                <div className="flex items-center gap-4 py-2">
                    <div className="h-px flex-1 bg-gray-200" />
                    <p className="text-tiny text-default-400 uppercase font-semibold">OR</p>
                    <div className="h-px flex-1 bg-gray-200" />
                </div>

                {/* Google Login */}
                <Button
                    type="button"
                    onPress={handleGoogleSignIn}
                    className="w-full border-gray-200 font-semibold"
                    variant="outline"
                >
                    <Icon icon="devicon:google" />
                    Sign in with Google
                </Button>

                <p className="text-center text-sm text-gray-500">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="text-secondary font-bold hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;