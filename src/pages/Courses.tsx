
import { Search, BookOpen, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Input } from "@/components/ui/input";

const courses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Learn the basics of HTML, CSS, and JavaScript to build modern websites.",
    duration: "8 weeks",
    rating: 4.8,
    students: 1234,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    id: 2,
    title: "Data Science Essentials",
    description: "Master the foundations of data analysis, statistics, and machine learning.",
    duration: "12 weeks",
    rating: 4.9,
    students: 987,
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74"
  },
  {
    id: 3,
    title: "UX/UI Design Masterclass",
    description: "Create beautiful and functional user interfaces with modern design principles.",
    duration: "10 weeks",
    rating: 4.7,
    students: 756,
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e"
  }
];

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      
      <main className="pt-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12 slide-up">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Courses</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover a wide range of courses taught by industry experts
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-xl">
            <Input
              type="search"
              placeholder="Search courses..."
              className="w-full pl-10"
            />
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>
                <Button className="w-full">Enroll Now</Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CoursesPage;
