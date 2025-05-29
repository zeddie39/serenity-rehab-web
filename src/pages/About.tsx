
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Users, Calendar, Check } from "lucide-react";

const About = () => {
  const values = [
    {
      title: "Compassion",
      description: "We treat every person with dignity, respect, and understanding, recognizing that recovery is a deeply personal journey."
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards of clinical care and continuously improve our services based on evidence-based practices."
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical principles in all our interactions and treatment approaches."
    },
    {
      title: "Hope",
      description: "We believe in the potential for recovery and help our clients rediscover hope for a fulfilling, substance-free life."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Mitchell",
      title: "Medical Director",
      credentials: "MD, Addiction Medicine",
      description: "15+ years specializing in addiction medicine and dual diagnosis treatment."
    },
    {
      name: "Michael Rodriguez",
      title: "Clinical Director",
      credentials: "LCSW, CSAT",
      description: "Licensed clinical social worker with expertise in trauma-informed care and group therapy."
    },
    {
      name: "Jennifer Kim",
      title: "Program Manager",
      credentials: "LPC, CAC III",
      description: "Licensed professional counselor specializing in family therapy and relapse prevention."
    },
    {
      name: "David Thompson",
      title: "Psychiatric Nurse",
      credentials: "RN, PMHN-BC",
      description: "Psychiatric mental health nurse with expertise in medication management and crisis intervention."
    }
  ];

  const accreditations = [
    "Joint Commission Accredited",
    "CARF International Accredited",
    "State Licensed Treatment Facility",
    "DEA Registered for Medication-Assisted Treatment",
    "In-Network with Major Insurance Providers"
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Serenity Rehab
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over a decade, we've been helping individuals and families overcome addiction 
              and mental health challenges through compassionate, evidence-based treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Serenity Rehab, our mission is to provide comprehensive, compassionate treatment 
                that addresses the whole person—mind, body, and spirit. We believe that recovery 
                is possible for everyone, and we're committed to helping our clients build the 
                foundation for a fulfilling, substance-free life.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our approach combines evidence-based therapies with personalized care plans, 
                ensuring that each individual receives the specific support they need to achieve 
                lasting recovery.
              </p>
              <Button asChild className="bg-teal-600 hover:bg-teal-700">
                <Link to="/services">Explore Our Programs</Link>
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <Heart className="h-16 w-16 text-teal-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Recovery Statistics</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-teal-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Treatment Completion Rate</span>
                  <span className="text-2xl font-bold text-teal-600">87%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <span className="text-gray-700 font-medium">6-Month Sobriety Rate</span>
                  <span className="text-2xl font-bold text-blue-600">73%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Client Satisfaction</span>
                  <span className="text-2xl font-bold text-green-600">94%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do and shape the culture of healing at Serenity Rehab.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our multidisciplinary team of licensed professionals brings decades of combined 
              experience in addiction treatment and mental health care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-8 w-8 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-teal-600 font-medium">{member.title}</p>
                      <p className="text-sm text-gray-500 mb-2">{member.credentials}</p>
                      <p className="text-gray-600">{member.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Accreditations & Certifications
            </h2>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Our facility maintains the highest standards of care through rigorous accreditation and certification processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accreditations.map((accreditation, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white bg-opacity-10 p-4 rounded-lg">
                <Check className="h-6 w-6 text-white flex-shrink-0" />
                <span className="text-white font-medium">{accreditation}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our compassionate team is here to answer your questions and help you take 
            the first step toward recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-3">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 text-lg px-8 py-3">
              <Link to="/bookings">Schedule Assessment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
