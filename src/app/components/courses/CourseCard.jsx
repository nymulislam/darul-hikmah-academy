import { Button, Card, CardHeader, Chip } from "@heroui/react";
import { Clock, Users } from "lucide-react";
import Image from "next/image";


const CourseCard = ({course}) => {
    return (
        <Card
            className="border-none rounded-[2.5rem] hover:shadow-[0_20px_50px_rgba(26,27,95,0.15)] transition-all duration-500 group"
        >
            <CardHeader className="p-0 overflow-hidden rounded-t-4xl">
                <Image
                    width={500}
                    height={300}
                    alt={course.title}
                    className="object-cover w-full h-56 group-hover:scale-105 transition-transform duration-700"
                    src={course.image}
                />
            </CardHeader>
            <Card.Content className="p-6">
                <div className="flex gap-2 mb-4">
                    <Chip size="sm" className="bg-primary/10 text-primary font-bold border-none">
                        {course.category}
                    </Chip>
                    <Chip size="sm" className="bg-secondary/10 text-secondary font-bold border-none">
                        {course.level}
                    </Chip>
                </div>
                <h3 className="text-xl font-bold text-textDark mb-3 group-hover:text-primary transition-colors line-clamp-1">
                    {course.title}
                </h3>

                <div className="space-y-2 border-l-2 border-secondary/30 pl-4 mb-5">
                    <p className="text-xs text-slate-500 flex items-center gap-2">
                        <Users size={14} className="text-primary" /> {course.enrolled} Students
                    </p>
                    <p className="text-xs text-slate-500 flex items-center gap-2">
                        <Clock size={14} className="text-primary" /> {course.duration}
                    </p>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-2xl font-black text-textDark">${course.price}</span>
                    <Button
                        color="primary"
                        radius="full"
                        className="font-bold px-8 shadow-lg shadow-accent-soft-hover hover:opacity-90"
                    >
                        Enroll
                    </Button>
                </div>
            </Card.Content>
        </Card>
    );
};

export default CourseCard;