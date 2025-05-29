
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Quote, Star, Heart } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Denver, CO",
      program: "Inpatient Treatment",
      rating: 5,
      text: "Serenity Rehab saved my life. The staff was incredibly compassionate and the program gave me the tools I needed to rebuild my relationship with my family. I've been sober for 18 months now and couldn't be happier.",
      sobrietyDuration: "18 months sober"
    },
    {
      name: "Michael R.",
      location: "Austin, TX",
      program: "Intensive Outpatient",
      rating: 5,
      text: "The IOP program allowed me to get treatment while keeping my job. The evening sessions fit perfectly with my schedule, and the group therapy sessions were life-changing. I learned I wasn't alone in this struggle.",
      sobrietyDuration: "2 years sober"
    },
    {
      name: "Jennifer L.",
      location: "Phoenix, AZ",
      program: "Dual Diagnosis Treatment",
      rating: 5,
      text: "Struggling with both addiction and depression felt overwhelming until I found Serenity. Their dual diagnosis program addressed both issues simultaneously. I finally understand my triggers and have healthy coping mechanisms.",
      sobrietyDuration: "14 months sober"
    },
    {
      name: "David K.",
      location: "Seattle, WA",
      program: "Family Therapy",
      rating: 5,
      text: "My son's addiction tore our family apart. The family therapy program at Serenity helped us all heal together. We learned how to support his recovery while taking care of ourselves. Our family is stronger than ever.",
      sobrietyDuration: "Family in recovery"
    },
    {
      name: "Maria G.",
      location: "Miami, FL",
      program: "Outpatient Counseling",
      rating: 5,
      text: "After completing inpatient treatment elsewhere, I continued my recovery journey with Serenity's outpatient program. The ongoing support and accountability have been crucial to maintaining my sobriety.",
      sobrietyDuration: "3 years sober"
    },
    {
      name: "Robert T.",
      location: "Chicago, IL",
      program: "Detox & Inpatient",
      rating: 5,
      text: "I was terrified of detox, but the medical team at Serenity made the process as comfortable as possible. The transition to inpatient treatment was seamless, and I felt supported every step of the way.",
      sobrietyDuration: "8 months sober"
    }
  ];

  const stats = [
    { number: "500+", label: "Lives Transformed" },
    { number: "87%", label: "Treatment Completion Rate" },
    { number: "73%", label: "6-Month Sobriety Rate" },
    { number: "94%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who found hope, healing, and a new beginning 
            through their journey with Serenity Rehab.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Voices of Recovery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These testimonials represent the courage, determination, and hope of individuals 
              who chose recovery. Names have been changed to protect privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-teal-600 mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 flex-grow">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="border-t pt-4 mt-auto">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                        <p className="text-sm text-teal-600 font-medium">{testimonial.program}</p>
                      </div>
                      <div className="text-right">
                        <div className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                          {testimonial.sobrietyDuration}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Family Impact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heart className="h-12 w-12 text-teal-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Healing Families, Rebuilding Lives
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recovery doesn't just transform individuals—it heals entire families and communities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <blockquote className="text-xl text-gray-700 text-center mb-6 italic">
              "Recovery gave me back my son, my daughter got her father back, and I got my life back. 
              The ripple effect of healing at Serenity touched our entire family."
            </blockquote>
            <div className="text-center">
              <p className="font-semibold text-gray-900">Anonymous Family Member</p>
              <p className="text-teal-600">Family Recovery Program</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Notice */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Privacy & Confidentiality
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              All testimonials are shared with written consent. Names and identifying details 
              have been changed to protect client privacy while maintaining the authenticity 
              of their recovery experiences. These stories represent real outcomes from our programs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Your Success Story Starts Today
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join the hundreds of individuals and families who have found hope and healing 
            through our comprehensive treatment programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link to="/bookings">Begin Your Journey</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 text-lg px-8 py-3">
              <Link to="/contact">Speak With Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
