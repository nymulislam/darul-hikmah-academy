"use client";

import { Button, Checkbox, FieldError, InputGroup, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Envelope, Eye, EyeSlash, Person } from '@gravity-ui/icons';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/app/lib/auth-client';

const RegisterPage = () => {
    const router = useRouter();

    // Form States
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    // UI & Loading States
    const [isVisible, setIsVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const toggleVisibility = () => setIsVisible(!isVisible);

    // Email & Password Registration Handler
    const handleRegister = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (!agreeToTerms) {
            setErrorMessage('Please accept the Terms & Conditions');
            return;
        }

        await authClient.signUp.email({
            email,
            password,
            name,
        }, {
            onRequest: () => setLoading(true),
            onSuccess: () => {
                setLoading(false);
                router.push('/');
            },
            onError: (ctx) => {
                setLoading(false);
                setErrorMessage(ctx.error.message || 'Registration failed');
            }
        });
    };

    // Google Social Login Handler
    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: 'google',
            callbackURL: '/',
        });
    };

    return (
        <div className="grid place-items-center bg-gray-50 px-6 py-12">
            <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">

                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-[#1A1B5F]">Create Account</h2>
                    <p className="mt-2 text-sm text-gray-500">Join Darul Hikmah Academy today</p>
                </div>

                {/* Error Alert Message */}
                {errorMessage && (
                    <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg text-center">
                        {errorMessage}
                    </div>
                )}

                {/* Form */}
                <form className="space-y-4" onSubmit={handleRegister}>
                    <TextField isRequired className="w-full" name="fullname">
                        <Label>Full Name</Label>
                        <InputGroup>
                            <InputGroup.Prefix>
                                <Person className="size-4 text-muted" />
                            </InputGroup.Prefix>
                            <InputGroup.Input
                                className="w-full"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </InputGroup>
                    </TextField>

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
                                placeholder="Create a password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <InputGroup.Suffix className="pr-1">
                                <Button
                                    type="button"
                                    isIconOnly
                                    size="sm"
                                    variant="ghost"
                                    onPress={toggleVisibility}
                                >
                                    {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                                </Button>
                            </InputGroup.Suffix>
                        </InputGroup>
                    </TextField>

                    <Checkbox
                        name="agreement"
                        isSelected={agreeToTerms}
                        onChange={(val) => setAgreeToTerms(typeof val === 'boolean' ? val : val.target.checked)}
                    >
                        <Checkbox.Control>
                            <Checkbox.Indicator />
                        </Checkbox.Control>
                        <Checkbox.Content>
                            <Label htmlFor="agreement">
                                I agree to the{" "}
                                <Link
                                    href="/terms"
                                    className="text-secondary font-medium hover:underline ml-1"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Terms & Conditions
                                </Link>
                            </Label>
                        </Checkbox.Content>
                    </Checkbox>

                    <Button
                        type="submit"
                        isLoading={loading}
                        className="w-full bg-[#1A1B5F] text-white font-bold py-6"
                        radius="lg"
                    >
                        {loading ? 'Creating Account...' : 'Create Account'}
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

                <p className="text-center text-sm text-gray-500 mt-4">
                    Already have an account?{" "}
                    <Link href="/login" className="text-secondary font-bold hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;