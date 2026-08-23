import React from "react";
import {
    Button,
    Select,
    SearchField,
    Label,
    ListBox
} from "@heroui/react";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import CourseCard from "@/app/components/courses/CourseCard";
import { redirect } from "next/navigation";

const AllCoursesPage = async ({ searchParams }) => {
    const { search } = await searchParams;

    const res = await fetch('https://darul-hikmah-academy.vercel.app/data/courses.json');
    const courses = await res.json();

    const filteredCourses = search ? courses.filter(course => course.title.toLowerCase().includes(search.toLowerCase())
    )
        : courses;

    const handleSearch = async (formData) => {
        "use server";
        const query = formData.get("search");
        if (query) {
            redirect(`/courses?search=${query}`);
        } else {
            redirect(`/courses`);
        }
    };

    return (
        <main className="min-h-screen bg-background">
            {/* --- Header Section --- */}
            <section className="bg-primary pt-28 pb-12 px-4 relative overflow-hidden">
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Expand Your Knowledge
                    </h1>
                    <p className="text-white/70 max-w-xl mx-auto text-lg mb-8">
                        Explore our comprehensive range of courses designed for your spiritual and academic growth.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-3xl mx-auto relative flex items-center">
                        <form action={handleSearch} className="w-full relative flex items-center">
                            <SearchField name="search" defaultValue={search || ""} className="w-full">
                                <Label className="sr-only">Search</Label>
                                <SearchField.Group className="flex items-center w-full h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 transition-all focus-within:bg-white group">
                                    <Search className="text-white group-focus-within:text-slate-400" size={20} />
                                    <SearchField.Input
                                        className="flex-1 bg-transparent border-none outline-none px-4 text-white focus-within:text-black text-lg placeholder:text-white/60"
                                        placeholder="Search courses..."
                                    />
                                    <SearchField.ClearButton className="text-white/60" />
                                </SearchField.Group>
                            </SearchField>
                            <Button
                                type="submit"
                                color="secondary"
                                radius="full"
                                className="absolute right-1.5 h-13 font-bold px-10 z-20 shadow-lg"
                            >
                                Search
                            </Button>
                        </form>

                        <Button
                            color="secondary"
                            radius="full"
                            className="absolute right-1.5 h-13 font-bold px-10 z-20 shadow-lg"
                        >
                            Search
                        </Button>
                    </div>
                </div>
            </section>

            {/* --- Filter Section --- */}
            <section className="py-12 px-4">
                <div className="container mx-auto">

                    {/* Filter Bar */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12 bg-white py-2 px-4 rounded-3xl border border-slate-100 shadow-sm">
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                            <Select
                                className="w-full sm:w-65"
                                placeholder="Sort By"
                                variant="flat"
                                radius="xl"
                            >
                                <Label className="hidden text-xs font-bold mb-1 ml-2">Sort By</Label>
                                <Select.Trigger className=" bg-slate-50 border-none px-4">
                                    <Select.Value className="font-semibold" />
                                    <Select.Indicator>
                                        <ChevronDown size={18} />
                                    </Select.Indicator>
                                </Select.Trigger>
                                <Select.Popover className="rounded-2xl shadow-xl border border-slate-100">
                                    <ListBox className="p-2">
                                        <ListBox.Item id="Most Popular" textValue="Most Popular" className="rounded-xl font-medium">
                                            Most Popular
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Newest" textValue="Newest" className="rounded-xl font-medium">
                                            Newest
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Price: Low to High" textValue="Price: Low to High" className="rounded-xl font-medium">
                                            Price: Low to High
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>

                            <Button isIconOnly variant="flat" radius="xl" className="h-10 w-10 bg-slate-50 border border-slate-100 shrink-0">
                                <SlidersHorizontal size={20} className="text-primary" />
                            </Button>
                        </div>

                        {/* Courses length */}
                        <div className="text-slate-500 font-medium text-sm">
                            Showing <span className="text-primary font-bold">{courses.length}</span> results
                        </div>
                    </div>

                    {/* --- Courses Grid --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCourses.map((course) => (
                            <CourseCard course={course} key={course.id} />
                        ))}
                    </div>

                    {/* --- Pagination --- */}
                    <div className="mt-20 flex justify-center">
                        <div className="flex gap-2">
                            {[1, 2, 3, '...', 10].map((page, index) => (
                                <Button
                                    key={index}
                                    isIconOnly
                                    variant={page === 1 ? "solid" : "flat"}
                                    color={page === 1 ? "primary" : "default"}
                                    className={`font-bold rounded-xl ${page === 1 ? "shadow-lg shadow-primary/30" : "bg-white border border-slate-100"}`}
                                >
                                    {page}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AllCoursesPage;