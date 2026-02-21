import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childAge: "",
    program: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    alert("Thank you for your interest! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      childAge: "",
      program: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6 text-stone-800">Contact Us</h1>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl mb-8 text-stone-800">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-stone-800">Address</h3>
                    <p className="text-stone-600">
                      123 Nature Lane
                      <br />
                      Garden City, GC 12345
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-stone-800">Phone</h3>
                    <p className="text-stone-600">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-sky-700" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-stone-800">Email</h3>
                    <p className="text-stone-600">info@montessorigarden.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-rose-700" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-stone-800">Hours</h3>
                    <p className="text-stone-600">
                      Monday - Friday: 8:00 AM - 5:00 PM
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 h-64 bg-stone-200 rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-stone-500">
                  Map Location
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl mb-8 text-stone-800">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-stone-700"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-stone-700"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-stone-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="childAge"
                    className="block mb-2 text-stone-700"
                  >
                    Child's Age
                  </label>
                  <input
                    type="text"
                    id="childAge"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    placeholder="e.g., 3 years old"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="program"
                    className="block mb-2 text-stone-700"
                  >
                    Program of Interest
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">Select a program</option>
                    <option value="infant">Infant Community (3-18 months)</option>
                    <option value="toddler">Toddler Program (18 months - 3 years)</option>
                    <option value="primary">Primary Program (3-6 years)</option>
                    <option value="elementary">Elementary Program (6-12 years)</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-stone-700"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center text-stone-800">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl">
              <h3 className="text-xl mb-3 text-stone-800">
                How do I schedule a tour?
              </h3>
              <p className="text-stone-600">
                You can schedule a tour by filling out the contact form above,
                calling us at (555) 123-4567, or emailing
                info@montessorigarden.com. We offer tours Monday through Friday at
                9:00 AM and 2:00 PM.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl">
              <h3 className="text-xl mb-3 text-stone-800">
                What is your enrollment process?
              </h3>
              <p className="text-stone-600">
                Our enrollment process begins with a tour of our facility. After
                the tour, interested families complete an application and meet with
                our director to discuss program fit and availability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl">
              <h3 className="text-xl mb-3 text-stone-800">
                Do you offer part-time programs?
              </h3>
              <p className="text-stone-600">
                Yes! We offer both full-time and part-time enrollment options for
                most of our programs. Please contact us to discuss the options that
                would work best for your family.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl">
              <h3 className="text-xl mb-3 text-stone-800">
                What should my child bring to school?
              </h3>
              <p className="text-stone-600">
                We provide a detailed supply list upon enrollment. Generally,
                children need indoor shoes, weather-appropriate outdoor clothing,
                and a lunch box. We provide all learning materials and supplies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
