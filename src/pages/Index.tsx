
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Users, ArrowRight, Star, Phone, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: Heart,
      title: "Inpatient Treatment",
      description: "24/7 medical supervision and comprehensive care in a safe, supportive environment designed for healing."
    },
    {
      icon: Shield,
      title: "Outpatient Programs",
      description: "Flexible treatment options that allow you to maintain work and family commitments while receiving care."
    },
    {
      icon: Users,
      title: "Family Support",
      description: "Healing extends beyond the individual. We provide support and education for families on the recovery journey."
    }
  ];

  const stats = [
    { number: "500+", label: "Lives Transformed", icon: Heart },
    { number: "87%", label: "Completion Rate", icon: Star },
    { number: "24/7", label: "Support Available", icon: Phone },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-100/30 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-teal-600">Your Journey</span>
              <br />
              <span className="text-gray-900">to Recovery Begins Here</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              At Serenity Rehab, we believe every person deserves compassionate care, hope, and a chance to heal. 
              Our evidence-based treatments create a sanctuary where transformation becomes possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg transition-all hover:scale-105"
              >
                <Link to="/bookings">Begin Your Recovery Journey</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 text-lg transition-all hover:scale-105"
              >
                <Link to="/contact">Speak With Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <Card className="hover:shadow-lg transition-shadow border-teal-100">
                  <CardContent className="p-8">
                    <stat.icon className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                    <div className="text-4xl font-bold text-teal-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-teal-600">Comprehensive Care</span>
              <br />
              <span className="text-gray-900">Tailored to Your Needs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every individual's path to recovery is unique. Our comprehensive programs are designed 
              to support both body and mind, providing the foundation for lasting transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-teal-100">
                <CardHeader className="text-center pb-4">
                  <service.icon className="h-16 w-16 text-teal-600 mx-auto mb-4" />
                  <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center text-lg leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition-all hover:scale-105 px-8 py-4"
            >
              <Link to="/services">
                Explore All Our Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-teal-600">Stories of Hope</span>
              <br />
              <span className="text-gray-900">& Transformation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Real stories from brave individuals who found their way back to themselves. 
              Each journey is a testament to the power of healing and human resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Sarah M.",
                text: "Serenity gave me back my life and my family. The compassionate care here made all the difference in my recovery journey.",
                duration: "18 months sober"
              },
              {
                name: "Michael R.",
                text: "The supportive environment and understanding staff created a safe space where I could finally heal and grow.",
                duration: "2 years sober"
              },
              {
                name: "Jennifer L.",
                text: "This place doesn't just treat addiction - it treats the whole person. I found myself again here.",
                duration: "14 months sober"
              }
            ].map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-teal-100">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic text-lg">
                    "{story.text}"
                  </blockquote>
                  <div className="border-t border-teal-100 pt-4">
                    <p className="font-semibold text-gray-900">{story.name}</p>
                    <div className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium inline-block mt-2">
                      {story.duration}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              asChild 
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white transition-all hover:scale-105 px-8 py-4 text-lg"
            >
              <Link to="/testimonials">
                Read More Success Stories
                <Heart className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Your Recovery Journey Starts Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards a life of hope, healing, and renewed purpose. 
            Our compassionate team is here to guide you every step of the way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center text-white">
              <Phone className="h-6 w-6 mr-3" />
              <span className="text-lg font-semibold">(555) 123-HOPE</span>
            </div>
            <div className="flex items-center text-white">
              <Calendar className="h-6 w-6 mr-3" />
              <span className="text-lg">24/7 Crisis Support</span>
            </div>
            <div className="flex items-center text-white">
              <MapPin className="h-6 w-6 mr-3" />
              <span className="text-lg">Healing City, HC</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              variant="secondary" 
              className="text-teal-700 hover:bg-white/90 transition-all hover:scale-105 px-8 py-4 text-lg"
            >
              <Link to="/bookings">Schedule a Confidential Consultation</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-teal-700 transition-all hover:scale-105 px-8 py-4 text-lg"
            >
              <Link to="/contact">Get Help Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
