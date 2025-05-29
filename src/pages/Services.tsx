
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Users, Calendar, Clock } from "lucide-react";

const Services = () => {
  const programs = [
    {
      title: "Inpatient Treatment",
      duration: "30-90 days",
      description: "24/7 medically supervised care in a safe, supportive environment.",
      features: [
        "Medical detoxification",
        "Individual therapy sessions",
        "Group counseling",
        "Family therapy",
        "Medication management",
        "Recreational therapy"
      ],
      icon: Heart
    },
    {
      title: "Intensive Outpatient (IOP)",
      duration: "3-6 months",
      description: "Structured treatment while maintaining work and family responsibilities.",
      features: [
        "9 hours of therapy per week",
        "Evening and weekend options",
        "Individual and group sessions",
        "Relapse prevention training",
        "Life skills development",
        "Family support groups"
      ],
      icon: Calendar
    },
    {
      title: "Outpatient Counseling",
      duration: "Ongoing",
      description: "Flexible therapy sessions tailored to your schedule and needs.",
      features: [
        "Individual therapy",
        "Couples counseling",
        "Family therapy",
        "Psychiatric services",
        "Medication management",
        "Crisis intervention"
      ],
      icon: Users
    }
  ];

  const specialties = [
    {
      title: "Alcohol Addiction",
      description: "Comprehensive treatment for alcohol use disorders with medical support."
    },
    {
      title: "Drug Addiction",
      description: "Evidence-based treatment for substance use disorders including opioids, cocaine, and methamphetamines."
    },
    {
      title: "Dual Diagnosis",
      description: "Integrated treatment for co-occurring mental health and substance use disorders."
    },
    {
      title: "Trauma Therapy",
      description: "Specialized treatment for trauma-related disorders and PTSD."
    },
    {
      title: "Mental Health",
      description: "Treatment for depression, anxiety, bipolar disorder, and other mental health conditions."
    },
    {
      title: "Family Therapy",
      description: "Healing for the whole family affected by addiction and mental health issues."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Treatment Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a full continuum of care with evidence-based treatments 
            tailored to meet your unique needs and circumstances.
          </p>
        </div>
      </section>

      {/* Treatment Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <program.icon className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                  <CardTitle className="text-2xl text-gray-900">{program.title}</CardTitle>
                  <div className="flex items-center justify-center text-teal-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="font-medium">{program.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Treatment Specialties
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our specialized programs address a wide range of addiction and mental health conditions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{specialty.title}</h3>
                  <p className="text-gray-600">{specialty.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Recovery?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free, confidential assessment. Our admissions team 
            will help determine the best treatment program for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link to="/bookings">Schedule Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 text-lg px-8 py-3">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
