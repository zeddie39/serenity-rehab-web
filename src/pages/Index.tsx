
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Users, Calendar, Check } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Our experienced team provides personalized treatment with empathy and understanding."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Licensed professionals specializing in addiction recovery and mental health treatment."
    },
    {
      icon: Calendar,
      title: "Flexible Programs",
      description: "Inpatient, outpatient, and intensive outpatient programs tailored to your needs."
    }
  ];

  const services = [
    "Medical Detoxification",
    "Individual Therapy",
    "Group Counseling",
    "Family Therapy",
    "Medication Management",
    "Aftercare Planning"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Journey to
              <span className="text-teal-600"> Recovery</span>
              <br />
              Starts Here
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              At Serenity Rehab, we provide compassionate, evidence-based treatment for addiction 
              and mental health challenges. Take the first step toward healing today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-3">
                <Link to="/bookings">Start Your Recovery</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-teal-600 text-teal-600 hover:bg-teal-50 text-lg px-8 py-3">
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Serenity Rehab?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine clinical expertise with genuine care to provide the highest quality treatment experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Treatment Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our holistic approach addresses both addiction and underlying mental health conditions, 
                providing you with the tools and support needed for long-term recovery.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              
              <Button asChild className="bg-teal-600 hover:bg-teal-700">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Begin?</h3>
              <p className="text-gray-600 mb-6">
                Take the first step toward recovery. Our admissions team is available 24/7 to help you 
                or your loved one get started.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">Free confidential assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">Insurance verification assistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">Family support and guidance</span>
                </div>
              </div>
              <Button asChild className="w-full mt-6 bg-teal-600 hover:bg-teal-700">
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Recovery is Possible. Help is Available.
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Don't wait another day to start your journey to recovery. 
            Our compassionate team is here to support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link to="/bookings">Schedule Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 text-lg px-8 py-3">
              <Link to="/testimonials">Read Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
