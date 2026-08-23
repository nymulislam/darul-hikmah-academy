"use client";

import { Button, Chip } from "@heroui/react";
import Link from "next/link";
import { ArrowRight, Play, Star } from "@gravity-ui/icons";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { BounceSlow } from "../ui/Animation";
import LiveSession from "../ui/LiveSession";

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-background py-12 md:py-20 lg:py-28">
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-secondary/15 blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

                    <div className="flex flex-col items-start space-y-8 relative z-10">
                        <Chip
                            variant="flat"
                            className="px-4 py-1.5 font-bold bg-secondary/10 text-secondary border border-secondary/20 shadow-sm"
                        >
                            <span className="flex items-center gap-2 uppercase tracking-tighter text-[11px]">
                                <Icon icon="solar:users-group-rounded-bold" className="text-lg animate-pulse" />
                                Join 500+ Global Students
                            </span>
                        </Chip>

                        <h1 className="text-4xl font-black leading-tight text-textDark md:text-5xl lg:text-7xl">
                            Master the Quran <br />
                            <span className="text-primary italic underline decoration-secondary">With Excellence</span>
                        </h1>
                        <p className="max-w-lg text-lg leading-relaxed text-gray-600">
                             Experience a transformative spiritual journey with live classes tailored to your needs.
                            Learn Quran with certified tutors. Live one-on-one classes for everyone, anywhere.
                            
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="/enroll">
                                <Button size="lg" className="bg-primary text-white font-bold px-10 shadow-2xl shadow-primary/30 hover:scale-105 transition-all" radius="full">
                                    Start Learning <ArrowRight className="size-4" />
                                </Button>
                            </Link>
                            <Button size="lg" variant="bordered" className="font-bold border-gray-300 text-textDark flex items-center gap-2" radius="full">
                                <Play className="size-4 fill-current text-secondary" /> Watch Overview
                            </Button>
                        </div>
                    </div>

                    {/* Mosaic Grid Content */}
                    <div className="relative grid grid-cols-12 gap-4 h-112.5 lg:h-137.5">
                        <div className="col-span-8 overflow-hidden rounded-[3rem] shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500 z-10">
                            <Image alt="Quran" width={500} height={600} className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=800" />
                        </div>
                        <div className="col-span-4 grid gap-4">
                            <div className="overflow-hidden rounded-[2rem] shadow-xl border-4 border-white -rotate-3 hover:rotate-0 transition-all">
                                <Image alt="Student" width={300} height={300} className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=400" />
                            </div>

                            {/* Live Session */}
                            <LiveSession />
                        </div>

                        <BounceSlow className="absolute -left-12 bottom-12 z-20 hidden md:block">
                            <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white flex items-center gap-3">
                                <Icon icon="solar:medal-star-bold" className="text-2xl text-green-600" />
                                <p className="text-sm font-bold">Hifz Certified</p>
                            </div>
                        </BounceSlow>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;