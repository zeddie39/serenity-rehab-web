
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Calendar, Clock, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    urgency: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('inquiries')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            subject: formData.subject || null,
            message: formData.message,
            urgency: formData.urgency || null,
            status: 'new'
          }
        ]);

      if (error) {
        console.error('Error submitting inquiry:', error);
        toast({
          title: "Error",
          description: "There was an error submitting your inquiry. Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Thank you for your message. We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "", urgency: "" });
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help 24/7. Reach out for immediate assistance, general inquiries, 
            or to schedule a confidential consultation.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Emergency Contact */}
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-800 flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Crisis Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-700 font-semibold text-lg">(555) 123-HELP</p>
                  <p className="text-red-600 text-sm mt-1">24/7 Emergency Line</p>
                  <p className="text-red-600 text-sm mt-2">
                    If you or someone you know is in immediate danger, please call 911.
                  </p>
                </CardContent>
              </Card>

              {/* General Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-teal-600" />
                    General Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">info@serenityrehab.com</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">
                      123 Recovery Lane<br />
                      Healing City, HC 12345
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-teal-600" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="text-gray-900 font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-gray-900 font-medium">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-900 font-medium">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="mt-4 p-3 bg-teal-50 rounded-lg">
                    <p className="text-teal-700 text-sm font-medium">
                      Crisis support and admissions available 24/7
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Send Us a Message
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours. 
                  All communications are confidential.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="urgency">Urgency Level</Label>
                      <Select value={formData.urgency} onValueChange={(value) => handleChange("urgency", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select urgency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="urgent">Urgent - Need Help Soon</SelectItem>
                          <SelectItem value="crisis">Crisis - Need Immediate Help</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      placeholder="Brief description of your inquiry"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Please describe how we can help you..."
                      rows={6}
                    />
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Privacy Notice:</strong> All information shared through this form is 
                      kept strictly confidential in accordance with HIPAA regulations and our privacy policy.
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-teal-600 hover:bg-teal-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section Placeholder */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Our Location</CardTitle>
              <p className="text-gray-600">
                Conveniently located with easy access to public transportation and parking.
              </p>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">
                  Interactive map will be displayed here
                  <br />
                  <span className="text-sm">(Integration pending)</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
