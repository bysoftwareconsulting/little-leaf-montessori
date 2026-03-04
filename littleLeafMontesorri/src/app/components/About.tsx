import { useLanguage } from "../../context/LanguageContext";

export function About() {
  const { translations } = useLanguage();
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6 text-stone-800">{translations.aboutTitle.title}</h1>
            <p className="text-xl text-stone-600">
            {translations.aboutTitle.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 text-stone-800">{translations.aboutHero.title}</h2>
              <p className="text-stone-600 mb-4">
              {translations.aboutHero.desc1}
              </p>
              <p className="text-stone-600">
              {translations.aboutHero.desc2}
              </p>
              <h3 className="text-4xl m-6 text-stone-800">{translations.aboutHero.subtitle}</h3>
              <ul>
                {translations.aboutHero.list.map((item:string)=>{
                  return <li key={item}>{item}</li>
                })}
              </ul>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/scissors.avif"
                alt="Child's hand with scissors"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
