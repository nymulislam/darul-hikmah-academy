import React from "react";
import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import CourseCard from "../courses/CourseCard";
import Link from "next/link";

const PopularCourses = async () => {
    const res = await fetch('https://darul-hikmah-academy.vercel.app/data/courses.json');
    const courses = await res.json();

    const featuredCourses = courses
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h4 className="text-secondary font-bold tracking-widest uppercase text-sm mb-2">
                            Explore Our Programs
                        </h4>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
                            Popular Courses
                        </h2>
                    </div>
                    <Link href="/courses">
                        <Button
                            variant="light"
                            className="font-bold group text-secondary hover:bg-secondary/10"
                        >
                            View All Courses <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                        </Button>
                    </Link>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredCourses.map((course) => (
                        <CourseCard course={course} key={course.id} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularCourses;