import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button, Chip, Card } from "@heroui/react";
import {
  Clock,
  Users,
  Star,
  BookOpen,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Award,
  BarChart3,
} from "lucide-react";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;

  // Fetch course data
  const res = await fetch(
    "https://darul-hikmah-academy.vercel.app/data/courses.json",
    { next: { revalidate: 3600 } }
  );
  
  if (!res.ok) {
    notFound();
  }

  const courses = await res.json();
  const course = courses.find((item) => item.id.toString() === id.toString());

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50/60 pt-28 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft size={18} /> Back to Courses
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Course Info (Left 2 Columns) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Card */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Chip size="sm" className="bg-primary/10 text-primary font-bold border-none">
                  {course.category}
                </Chip>
                <Chip size="sm" className="bg-secondary/10 text-secondary font-bold border-none">
                  {course.level}
                </Chip>
                {course.trending && (
                  <Chip size="sm" className="bg-amber-500/10 text-amber-600 font-bold border-none">
                    🔥 Trending
                  </Chip>
                )}
              </div>

              <h1 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight">
                {course.title}
              </h1>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                {course.description}
              </p>

              {/* Instructor & Meta info */}
              <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-slate-100 text-sm text-slate-600">
                <div>
                  <span className="text-slate-400 block text-xs">Instructor</span>
                  <span className="font-semibold text-slate-800">{course.instructor}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Star size={18} className="text-amber-500 fill-amber-500" />
                  <span className="font-bold text-slate-800">{course.rating}</span>
                  <span className="text-slate-400">(Course Rating)</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Users size={18} className="text-primary" />
                  <span className="font-semibold text-slate-800">{course.enrolled} Enrolled</span>
                </div>
              </div>
            </div>

            {/* Banner Image */}
            <div className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
              <Image
                src={course.image}
                alt={course.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* What you'll learn / Features */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-900">What You Will Learn</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Comprehensive step-by-step guidance",
                  "Practical exercises and retention techniques",
                  "Direct instructor mentorship and support",
                  "Flexible self-paced learning schedule",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sticky Sidebar (Right 1 Column) */}
          <div className="lg:sticky lg:top-28">
            <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl p-2 bg-white">
              <Card.Content className="p-6 space-y-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-black text-slate-900">
                    ${course.price}
                  </span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    Full Access
                  </span>
                </div>

                <div className="space-y-3">
                  <Button
                    color="primary"
                    radius="full"
                    size="lg"
                    className="w-full font-bold shadow-lg shadow-primary/20"
                  >
                    Enroll Now
                  </Button>
                  <Button
                    variant="flat"
                    radius="full"
                    size="lg"
                    className="w-full font-bold text-slate-700 bg-slate-100"
                  >
                    Add to Wishlist
                  </Button>
                </div>

                {/* Course Specs */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900">This course includes:</h3>
                  
                  <div className="space-y-3 text-sm text-slate-600">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Clock size={16} className="text-primary" /> Duration
                      </span>
                      <span className="font-medium text-slate-800">{course.duration}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <BookOpen size={16} className="text-primary" /> Lessons
                      </span>
                      <span className="font-medium text-slate-800">{course.lessons} Modules</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <BarChart3 size={16} className="text-primary" /> Skill Level
                      </span>
                      <span className="font-medium text-slate-800">{course.level}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Award size={16} className="text-primary" /> Certificate
                      </span>
                      <span className="font-medium text-slate-800">Yes</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <ShieldCheck size={16} className="text-primary" /> Access
                      </span>
                      <span className="font-medium text-slate-800">Lifetime</span>
                    </div>
                  </div>
                </div>
              </Card.Content>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CourseDetailsPage;