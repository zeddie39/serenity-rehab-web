
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
      {/* Hero Section with Healing Gradient */}
      <section className="relative healing-gradient py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-healing-sage/10 via-healing-lavender/5 to-soul-purple/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="healing-text">Your Journey</span>
              <br />
              <span className="text-gray-700">to Healing Begins Here</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              At Serenity Rehab, we believe every soul deserves compassionate care, hope, and a chance to heal. 
              Our evidence-based treatments create a sanctuary where transformation becomes possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-healing-sage hover:bg-healing-sage/90 text-white px-8 py-4 text-lg soul-glow rounded-full"
              >
                <Link to="/bookings">Begin Your Healing Journey</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-healing-sage text-healing-sage hover:bg-healing-sage hover:text-white px-8 py-4 text-lg soul-glow rounded-full"
              >
                <Link to="/contact">Speak With Our Compassionate Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Statistics */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center soul-glow">
                <Card className="trust-shadow bg-gradient-to-br from-healing-cream to-white border-healing-sage/20">
                  <CardContent className="p-8">
                    <stat.icon className="h-12 w-12 text-healing-sage mx-auto mb-4" />
                    <div className="text-4xl font-bold text-healing-sage mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 healing-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="healing-text">Compassionate Care</span>
              <br />
              <span className="text-gray-700">Tailored to Your Needs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every individual's path to recovery is unique. Our comprehensive programs are designed 
              to nurture both body and soul, providing the foundation for lasting transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="soul-glow trust-shadow bg-white/90 backdrop-blur-sm border-healing-sage/10 hover:border-soul-purple/30">
                <CardHeader className="text-center pb-4">
                  <service.icon className="h-16 w-16 text-healing-sage mx-auto mb-4 animate-soul-pulse" />
                  <CardTitle className="text-2xl text-gray-800">{service.title}</CardTitle>
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
              className="border-healing-sage text-healing-sage hover:bg-healing-sage hover:text-white soul-glow rounded-full px-8 py-4"
            >
              <Link to="/services">
                Explore All Our Healing Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories Section - Now Visible */}
      <section className="py-20 bg-gradient-to-br from-healing-lavender/10 to-soul-purple/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="healing-text">Stories of Hope</span>
              <br />
              <span className="text-gray-700">& Transformation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Real stories from brave souls who found their way back to themselves. 
              Each journey is a testament to the power of healing and human resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Sarah M.",
                text: "Serenity gave me back my life and my family. The compassionate care here touched my soul in ways I never thought possible.",
                duration: "18 months sober"
              },
              {
                name: "Michael R.",
                text: "The healing environment and understanding staff created a safe space where I could finally face my demons and find peace.",
                duration: "2 years sober"
              },
              {
                name: "Jennifer L.",
                text: "This place doesn't just treat addiction - it heals hearts, minds, and souls. I found myself again here.",
                duration: "14 months sober"
              }
            ].map((story, index) => (
              <Card key={index} className="soul-glow trust-shadow bg-white/95 backdrop-blur-sm border-healing-sage/20 hover:border-soul-purple/40">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic text-lg">
                    "{story.text}"
                  </blockquote>
                  <div className="border-t border-healing-sage/20 pt-4">
                    <p className="font-semibold text-gray-800">{story.name}</p>
                    <div className="bg-healing-sage/10 text-healing-sage px-3 py-1 rounded-full text-sm font-medium inline-block mt-2">
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
              className="bg-soul-purple hover:bg-soul-purple/90 text-white soul-glow rounded-full px-8 py-4 text-lg"
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
      <section className="py-20 bg-gradient-to-r from-healing-sage to-trust-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Your Healing Journey Starts Today
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
              className="text-healing-sage hover:bg-white/90 soul-glow rounded-full px-8 py-4 text-lg"
            >
              <Link to="/bookings">Schedule a Confidential Consultation</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-healing-sage soul-glow rounded-full px-8 py-4 text-lg"
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
