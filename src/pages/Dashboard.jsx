import { BookOpen, Clock, Award, BarChart } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      
      <main className="pt-24 px-4 max-w-7xl mx-auto">
        <div className="mb-8 slide-up">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Student!</h1>
          <p className="text-gray-600">Track your progress and continue learning</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-primary" />
              <div className="ml-4">
                <p className="text-sm text-gray-500">Enrolled Courses</p>
                <p className="text-2xl font-semibold">4</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-primary" />
              <div className="ml-4">
                <p className="text-sm text-gray-500">Hours Learned</p>
                <p className="text-2xl font-semibold">26</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center">
              <Award className="h-8 w-8 text-primary" />
              <div className="ml-4">
                <p className="text-sm text-gray-500">Certificates</p>
                <p className="text-2xl font-semibold">2</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center">
              <BarChart className="h-8 w-8 text-primary" />
              <div className="ml-4">
                <p className="text-sm text-gray-500">Average Score</p>
                <p className="text-2xl font-semibold">92%</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Current Courses</h2>
            <div className="space-y-4">
              {[
                { name: "Web Development Fundamentals", progress: 75 },
                { name: "Data Science Essentials", progress: 45 },
                { name: "UX/UI Design Masterclass", progress: 30 }
              ].map((course, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{course.name}</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} />
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Upcoming Sessions</h2>
            <div className="space-y-4">
              {[
                { name: "JavaScript Advanced Concepts", time: "Tomorrow, 10:00 AM" },
                { name: "Python for Data Analysis", time: "Wed, 2:00 PM" },
                { name: "Design Systems Workshop", time: "Fri, 11:00 AM" }
              ].map((session, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">{session.name}</span>
                  <span className="text-sm text-gray-500">{session.time}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
