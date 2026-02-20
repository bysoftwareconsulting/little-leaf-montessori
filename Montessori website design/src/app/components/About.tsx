import { Award, Users, BookOpen, Smile } from "lucide-react";

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6 text-stone-800">About Us</h1>
            <p className="text-xl text-stone-600">
              Montessori Garden has been nurturing young minds for over 20 years,
              combining the wisdom of Montessori education with the beauty and
              wonder of the natural world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 text-stone-800">Our Mission</h2>
              <p className="text-stone-600 mb-4">
                We are dedicated to creating a learning environment where children
                can explore, discover, and grow at their own pace. Our approach
                integrates traditional Montessori principles with nature-based
                learning, fostering independence, creativity, and a deep connection
                to the natural world.
              </p>
              <p className="text-stone-600">
                Every child is unique, and we honor that uniqueness by providing
                individualized attention and carefully prepared environments that
                inspire curiosity and joy in learning.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1607506549681-b0c179560f00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwbmF0dXJlJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzExOTI5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Children learning outdoors"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-emerald-700" />
              </div>
              <div className="text-4xl mb-2 text-stone-800">20+</div>
              <div className="text-stone-600">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-700" />
              </div>
              <div className="text-4xl mb-2 text-stone-800">150+</div>
              <div className="text-stone-600">Students</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-sky-700" />
              </div>
              <div className="text-4xl mb-2 text-stone-800">15</div>
              <div className="text-stone-600">Certified Teachers</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smile className="w-8 h-8 text-rose-700" />
              </div>
              <div className="text-4xl mb-2 text-stone-800">100%</div>
              <div className="text-stone-600">Happy Families</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center text-stone-800">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-emerald-50 p-8 rounded-2xl">
              <h3 className="text-2xl mb-4 text-stone-800">Respect for the Child</h3>
              <p className="text-stone-600">
                We honor each child's developmental timeline, interests, and unique
                personality, creating an environment where they feel valued and heard.
              </p>
            </div>
            <div className="bg-amber-50 p-8 rounded-2xl">
              <h3 className="text-2xl mb-4 text-stone-800">Connection to Nature</h3>
              <p className="text-stone-600">
                Natural materials, outdoor exploration, and environmental stewardship
                are woven throughout our curriculum and daily activities.
              </p>
            </div>
            <div className="bg-sky-50 p-8 rounded-2xl">
              <h3 className="text-2xl mb-4 text-stone-800">Hands-On Learning</h3>
              <p className="text-stone-600">
                Children learn best by doing. Our classrooms are filled with
                beautiful, purposeful materials that invite exploration and discovery.
              </p>
            </div>
            <div className="bg-rose-50 p-8 rounded-2xl">
              <h3 className="text-2xl mb-4 text-stone-800">Community Partnership</h3>
              <p className="text-stone-600">
                We work closely with families to create a supportive learning
                community that extends from school to home and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center text-stone-800">Meet Our Educators</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-32 h-32 bg-emerald-200 rounded-full mx-auto mb-4" />
              <h3 className="text-xl mb-2 text-center text-stone-800">Sarah Martinez</h3>
              <p className="text-emerald-600 text-center mb-3">Lead Guide</p>
              <p className="text-stone-600 text-sm text-center">
                AMI certified with 15 years of experience in early childhood education
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-32 h-32 bg-amber-200 rounded-full mx-auto mb-4" />
              <h3 className="text-xl mb-2 text-center text-stone-800">David Chen</h3>
              <p className="text-amber-600 text-center mb-3">Elementary Guide</p>
              <p className="text-stone-600 text-sm text-center">
                Passionate about nature-based learning and outdoor education
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-32 h-32 bg-rose-200 rounded-full mx-auto mb-4" />
              <h3 className="text-xl mb-2 text-center text-stone-800">Emma Thompson</h3>
              <p className="text-rose-600 text-center mb-3">Assistant Guide</p>
              <p className="text-stone-600 text-sm text-center">
                Specializes in sensory learning and creative arts integration
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
