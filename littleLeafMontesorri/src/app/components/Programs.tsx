import { Baby, Palette, TreePine, Users } from "lucide-react";
import { Link } from "react-router";

export function Programs() {
  const programs = [
    {
      icon: Baby,
      name: "Infant Community",
      age: "3 months - 18 months",
      description:
        "A nurturing environment designed for our youngest learners, focusing on sensory exploration, movement, and the development of trust and security.",
      color: "emerald",
      features: [
        "Low child-to-teacher ratio",
        "Natural materials and textures",
        "Focus on motor development",
        "Parent partnership program",
      ],
    },
    {
      icon: Palette,
      name: "Toddler Program",
      age: "18 months - 3 years",
      description:
        "A carefully prepared environment that supports independence, language development, and practical life skills through hands-on activities.",
      color: "amber",
      features: [
        "Practical life activities",
        "Language enrichment",
        "Outdoor exploration time",
        "Creative expression through art",
      ],
    },
    {
      icon: TreePine,
      name: "Primary Program",
      age: "3 - 6 years",
      description:
        "The heart of Montessori education, where children engage with classic materials across practical life, sensorial, language, mathematics, and cultural studies.",
      color: "sky",
      features: [
        "Mixed-age classrooms",
        "Self-directed learning",
        "Nature-based curriculum",
        "Garden and outdoor learning",
      ],
    },
    {
      icon: Users,
      name: "Elementary Program",
      age: "6 - 12 years",
      description:
        "An integrated curriculum that nurtures the elementary child's imagination, social development, and growing sense of responsibility to the world.",
      color: "rose",
      features: [
        "Project-based learning",
        "Environmental stewardship",
        "Collaborative work",
        "Going out experiences",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6 text-stone-800">Our Programs</h1>
            <p className="text-xl text-stone-600">
              From infancy through elementary school, we offer comprehensive
              Montessori programs designed to meet the developmental needs of each
              age group.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programs.map((program, index) => {
              const Icon = program.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={program.name}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <div
                      className={`w-16 h-16 bg-${program.color}-100 rounded-full flex items-center justify-center mb-6`}
                    >
                      <Icon className={`w-8 h-8 text-${program.color}-700`} />
                    </div>
                    <h2 className="text-3xl mb-2 text-stone-800">{program.name}</h2>
                    <p className={`text-${program.color}-600 mb-4`}>
                      Ages {program.age}
                    </p>
                    <p className="text-stone-600 mb-6">{program.description}</p>
                    <div className="space-y-2">
                      {program.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-${program.color}-500 mt-2 flex-shrink-0`}
                          />
                          <span className="text-stone-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className={`relative h-80 rounded-2xl overflow-hidden shadow-xl ${
                      isEven ? "" : "lg:col-start-1 lg:row-start-1"
                    }`}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1609811645795-f72ea07f47e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBlZHVjYXRpb25hbCUyMHRveXMlMjBtb250ZXNzb3JpfGVufDF8fHx8MTc3MTE5Mjk3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt={program.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center text-stone-800">Daily Schedule</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm">
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-stone-200">
                <span className="text-stone-800">Morning Arrival & Work Cycle</span>
                <span className="text-emerald-600">8:00 AM - 11:30 AM</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-stone-200">
                <span className="text-stone-800">Outdoor Exploration</span>
                <span className="text-emerald-600">11:30 AM - 12:30 PM</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-stone-200">
                <span className="text-stone-800">Lunch & Rest Time</span>
                <span className="text-emerald-600">12:30 PM - 2:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-stone-200">
                <span className="text-stone-800">Afternoon Activities</span>
                <span className="text-emerald-600">2:00 PM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-800">Closing Circle & Departure</span>
                <span className="text-emerald-600">4:00 PM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Find the Perfect Program</h2>
          <p className="text-xl mb-8 text-emerald-100">
            Schedule a tour to see our programs in action and meet our educators
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-full hover:bg-stone-100 transition-colors"
          >
            Schedule a Visit
          </Link>
        </div>
      </section>
    </div>
  );
}
