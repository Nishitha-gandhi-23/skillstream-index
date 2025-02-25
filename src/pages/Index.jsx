import { ArrowRight, BookOpen, Users, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Web Developer",
    comment: "The courses here transformed my career. The instructors are amazing and the content is top-notch."
  },
  {
    name: "Michael Chen",
    role: "Data Scientist",
    comment: "I've taken multiple courses on this platform. The learning experience is unmatched."
  },
  {
    name: "Emily Williams",
    role: "UX Designer",
    comment: "The flexibility and quality of courses helped me land my dream job. Highly recommended!"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
        <div className="text-center space-y-6 slide-up">
          <span className="px-3 py-1 text-sm font-semibold bg-primary/10 text-primary rounded-full">
            Transform Your Future
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
            Unlock Your Potential with Expert-Led Online Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of learners from around the globe and access world-class education from anywhere.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button size="lg" className="gap-2">
              Explore Courses <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-lg text-gray-600">Discover what makes our platform unique</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 slide-up">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with years of experience.</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
              <p className="text-gray-600">Study at your own pace, anywhere and anytime.</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Certified Courses</h3>
              <p className="text-gray-600">Earn recognized certificates upon completion.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl font-bold text-gray-900">What Our Students Say</h2>
            <p className="mt-4 text-lg text-gray-600">Read success stories from our community</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 slide-up">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.comment}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">EduLearn</h3>
            <p className="text-sm">Transforming lives through online education.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/courses" className="hover:text-white transition-colors">Courses</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/help" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <p className="text-sm mb-4">Stay updated with our newsletter</p>
            <Button variant="secondary" className="w-full">Subscribe</Button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800">
          <p className="text-sm text-center">© 2024 EduLearn. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
