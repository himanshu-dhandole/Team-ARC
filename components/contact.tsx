"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: ""
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  return (
    <section id="contact" className="relative py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Badge className="rounded-full border border-gray-200 bg-white text-gray-700 px-3 py-1 text-[11px] font-medium tracking-wide shadow-sm uppercase">
              Contact
            </Badge>
          </div>
          <h2 className="text-[52px] sm:text-[68px] font-serif tracking-tight text-gray-900 leading-tight">
            <span className="italic font-light text-gray-600">Let's</span> work together
          </h2>
          <p className="text-[16px] text-gray-700 mt-4 max-w-2xl mx-auto font-light">
            Ready to build something great? Get in touch and let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[28px] font-serif text-gray-900 mb-6">Get in touch</h3>
              <p className="text-[15px] text-gray-700 leading-relaxed font-light mb-8">
                We're here to help bring your vision to life. Whether you need a full-stack product, 
                blockchain protocol, or AI integration—let's talk.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gray-100">
                  <Mail className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-[13px] text-gray-600 font-medium uppercase tracking-wide mb-1">Email</p>
                  <a href="mailto:info.arc@gmail.com" className="text-[16px] text-gray-900 hover:text-gray-600 transition-colors font-light">
                    info.arc@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gray-100">
                  <Phone className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-[13px] text-gray-600 font-medium uppercase tracking-wide mb-1">Phone</p>
                  <a href="tel:+919284961467" className="text-[16px] text-gray-900 hover:text-gray-600 transition-colors font-light">
                    +91 9284961467
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gray-100">
                  <MapPin className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-[13px] text-gray-600 font-medium uppercase tracking-wide mb-1">Location</p>
                  <p className="text-[16px] text-gray-900 font-light">
                    Nagpur, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-[14px] text-gray-600 font-light mb-4">
                Typical response time: <span className="font-semibold text-gray-900">24 hours</span>
              </p>
              <p className="text-[13px] text-gray-500 font-light">
                We're available Monday through Friday, 9 AM - 6 PM IST
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="space-y-6">
              <div>
                <label className="block text-[13px] font-medium text-gray-700 mb-2 uppercase tracking-wide">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-[15px] font-light focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-gray-700 mb-2 uppercase tracking-wide">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-[15px] font-light focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-gray-700 mb-2 uppercase tracking-wide">
                  Company / Project
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-[15px] font-light focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-gray-700 mb-2 uppercase tracking-wide">
                  Project Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => handleChange("budget", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-[15px] font-light focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                >
                  <option value="">Select budget range</option>
                  <option value="5k-10k">$5k - $10k</option>
                  <option value="10k-25k">$10k - $25k</option>
                  <option value="25k-50k">$25k - $50k</option>
                  <option value="50k+">$50k+</option>
                </select>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-gray-700 mb-2 uppercase tracking-wide">
                  Project Details *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-[15px] font-light focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project, timeline, and requirements..."
                />
              </div>

              <Button 
                onClick={handleSubmit}
                className="w-full rounded-full text-[14px] bg-gray-900 text-white hover:bg-gray-800 font-medium px-6 h-12 shadow-lg transition-all"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;