
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Calendar, Clock, Heart, Check } from "lucide-react";

const Bookings = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    insuranceProvider: "",
    emergencyContact: "",
    medicalHistory: "",
    currentMedications: "",
    previousTreatment: "",
    additionalInfo: "",
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please agree to the terms and conditions.");
      return;
    }
    // TODO: Integrate with Supabase when connected
    console.log("Booking submitted:", formData);
    alert("Your assessment has been scheduled! We'll contact you within 24 hours to confirm your appointment.");
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const services = [
    "Initial Assessment",
    "Inpatient Treatment",
    "Intensive Outpatient (IOP)",
    "Outpatient Counseling",
    "Detoxification",
    "Family Therapy",
    "Psychiatric Evaluation"
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Schedule Your Assessment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step toward recovery. Complete this confidential form to schedule 
            your initial assessment with our clinical team.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Benefits Section */}
        <div className="mb-12">
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Heart className="h-6 w-6 text-teal-600 mr-2" />
                What to Expect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Confidential Assessment</p>
                    <p className="text-gray-600 text-sm">60-90 minute comprehensive evaluation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Insurance Verification</p>
                    <p className="text-gray-600 text-sm">We'll help verify your coverage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Treatment Planning</p>
                    <p className="text-gray-600 text-sm">Personalized care recommendations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Same-Day Admission</p>
                    <p className="text-gray-600 text-sm">Available for urgent cases</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Booking Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">
              Assessment Booking Form
            </CardTitle>
            <p className="text-gray-600">
              All information is kept strictly confidential and secure.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Calendar className="h-5 w-5 text-teal-600 mr-2" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleChange("firstName", e.target.value)}
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      placeholder="Last name"
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
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      required
                      value={formData.dateOfBirth}
                      onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="emergencyContact">Emergency Contact</Label>
                    <Input
                      id="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={(e) => handleChange("emergencyContact", e.target.value)}
                      placeholder="Name and phone number"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Heart className="h-5 w-5 text-teal-600 mr-2" />
                  Service Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select value={formData.serviceType} onValueChange={(value) => handleChange("serviceType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="insuranceProvider">Insurance Provider</Label>
                    <Input
                      id="insuranceProvider"
                      value={formData.insuranceProvider}
                      onChange={(e) => handleChange("insuranceProvider", e.target.value)}
                      placeholder="Your insurance company"
                    />
                  </div>
                </div>
              </div>

              {/* Scheduling */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="h-5 w-5 text-teal-600 mr-2" />
                  Preferred Schedule
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="preferredDate">Preferred Date *</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => handleChange("preferredDate", e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <Label htmlFor="preferredTime">Preferred Time *</Label>
                    <Select value={formData.preferredTime} onValueChange={(value) => handleChange("preferredTime", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Medical History */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Medical History (Optional)</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="medicalHistory">Current Medical Conditions</Label>
                    <Textarea
                      id="medicalHistory"
                      value={formData.medicalHistory}
                      onChange={(e) => handleChange("medicalHistory", e.target.value)}
                      placeholder="Please list any current medical conditions or concerns..."
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="currentMedications">Current Medications</Label>
                    <Textarea
                      id="currentMedications"
                      value={formData.currentMedications}
                      onChange={(e) => handleChange("currentMedications", e.target.value)}
                      placeholder="Please list all current medications and dosages..."
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="previousTreatment">Previous Treatment History</Label>
                    <Textarea
                      id="previousTreatment"
                      value={formData.previousTreatment}
                      onChange={(e) => handleChange("previousTreatment", e.target.value)}
                      placeholder="Please describe any previous addiction or mental health treatment..."
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={(e) => handleChange("additionalInfo", e.target.value)}
                      placeholder="Anything else you'd like us to know..."
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              {/* Consent */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => handleChange("consent", checked as boolean)}
                  />
                  <div className="text-sm">
                    <Label htmlFor="consent" className="font-medium">
                      I consent to treatment and acknowledge the following: *
                    </Label>
                    <ul className="mt-2 space-y-1 text-gray-600">
                      <li>• I understand this information will be used for assessment and treatment planning</li>
                      <li>• I consent to contact via phone, email, or text for appointment scheduling</li>
                      <li>• I understand all information is kept confidential per HIPAA regulations</li>
                      <li>• I may be contacted by clinical staff within 24 hours to confirm my appointment</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Important:</strong> If you are experiencing a medical emergency or having thoughts of 
                  self-harm, please call 911 or go to your nearest emergency room immediately. For crisis support, 
                  call our 24/7 helpline at (555) 123-HELP.
                </p>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-teal-600 hover:bg-teal-700"
                disabled={!formData.consent}
              >
                Schedule My Assessment
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Bookings;
