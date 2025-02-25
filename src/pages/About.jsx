import { Users, Target, Heart, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      
      <main className="pt-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About EduLearn</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming lives through accessible and quality education
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 fade-in">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At EduLearn, we believe that education should be accessible to everyone. 
              Our mission is to provide high-quality online learning experiences that 
              empower individuals to achieve their personal and professional goals.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We work with industry experts and leading educators to create 
              comprehensive courses that deliver practical skills and knowledge 
              for the modern workforce.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: Users,
              title: "10K+ Students",
              description: "Joined our global learning community"
            },
            {
              icon: Target,
              title: "200+ Courses",
              description: "Covering the most in-demand skills"
            },
            {
              icon: Heart,
              title: "95% Satisfaction",
              description: "From our dedicated learners"
            },
            {
              icon: MessageSquare,
              title: "24/7 Support",
              description: "Always here to help you learn"
            }
          ].map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive to deliver the highest quality education through carefully crafted courses."
              },
              {
                title: "Innovation",
                description: "We embrace new technologies and teaching methods to enhance the learning experience."
              },
              {
                title: "Community",
                description: "We foster a supportive environment where learners can grow together."
              }
            ].map((value, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
