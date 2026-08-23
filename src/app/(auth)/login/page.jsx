"use client";

import { Button, Checkbox, FieldError, InputGroup, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Envelope, Eye, EyeSlash } from '@gravity-ui/icons';
import { Icon } from '@iconify/react';

const LoginPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div className="grid place-items-center bg-gray-50 px-6 py-12">
            <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">

                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-[#1A1B5F]">Welcome Back</h2>
                    <p className="mt-2 text-sm text-gray-500">Please enter your details to sign in</p>
                </div>

                {/* Form */}
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <TextField isRequired className="w-full" name="email">
                        <Label>Email address</Label>
                        <InputGroup>
                            <InputGroup.Prefix>
                                <Envelope className="size-4 text-muted" />
                            </InputGroup.Prefix>
                            <InputGroup.Input className="w-full" placeholder="name@email.com" type="email" />
                        </InputGroup>
                        <FieldError>Please enter a valid email address</FieldError>
                    </TextField>

                    <TextField isRequired className="w-full" name="password">
                        <Label>Password</Label>
                        <InputGroup>
                            <InputGroup.Input
                                className="w-full"
                                type={isVisible ? "text" : "password"}
                                placeholder="••••••••"
                            />
                            <InputGroup.Suffix className="pr-1">
                                <Button
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
                        <Checkbox id="primary" name="primary" variant="primary">
                            <Checkbox.Control>
                                <Checkbox.Indicator />
                            </Checkbox.Control>
                            <Checkbox.Content>
                                <Label htmlFor="primary">Remember me</Label>
                            </Checkbox.Content>
                        </Checkbox>
                        <Link href="/forgot-password" size="sm" className="text-secondary font-medium hover:underline">
                            Forgot password?
                        </Link>
                    </div>

                    <Button className="w-full bg-[#1A1B5F] text-white font-bold py-6" radius="lg">
                        Sign In
                    </Button>
                </form>

                <div className="flex items-center gap-4 py-2">
                    <div className="h-px flex-1 bg-gray-200" />
                    <p className="text-tiny text-default-400 uppercase font-semibold">OR</p>
                    <div className="h-px flex-1 bg-gray-200" />
                </div>

                {/* Google Login */}
                <Button className="w-full border-gray-200 font-semibold" variant="outline">
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