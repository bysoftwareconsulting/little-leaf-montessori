import { Link } from "react-router";
import { Sprout, Heart, Sun } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Home() {
  const { translations } = useLanguage();
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1728071485384-3602db0923ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBncmVlbiUyMGxlYXZlcyUyMHN1bmxpZ2h0fGVufDF8fHx8MTc3MTE5Mjk3M3ww&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-stone-900/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl mb-6">{translations.homeHero.title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-stone-100">
          {translations.homeHero.subtitle}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/programs"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full transition-colors"
            >
              {translations.homeHero.exploreButton}
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full border border-white/30 transition-colors"
            >
              {translations.homeHero.scheduleButton}
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-stone-800">{translations.homeSection.title}</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
            {translations.homeSection.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sprout className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-xl mb-3 text-stone-800">{translations.homeSection.cards[0].title}</h3>
              <p className="text-stone-600">
              {translations.homeSection.cards[0].desc}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sun className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl mb-3 text-stone-800">{translations.homeSection.cards[1].title}</h3>
              <p className="text-stone-600">
              {translations.homeSection.cards[1].desc}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-rose-700" />
              </div>
              <h3 className="text-xl mb-3 text-stone-800">{translations.homeSection.cards[2].title}</h3>
              <p className="text-stone-600">
              {translations.homeSection.cards[2].desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/child.avif"
                alt="Children learning in nature"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="flower.avif"
                alt="Montessori materials"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">{translations.homeFooter.title}</h2>
          <p className="text-xl mb-8 text-emerald-100">
          {translations.homeFooter.subtitle}          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-full hover:bg-stone-100 transition-colors"
          >
{translations.homeFooter.ctaButton}          </Link>
        </div>
      </section>
    </div>
  );
}
