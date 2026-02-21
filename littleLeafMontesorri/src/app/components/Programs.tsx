import { Link } from "react-router";
import { useLanguage } from "../../context/LanguageContext";

export function Programs() {
  const { translations } = useLanguage()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-6 text-stone-800">{translations.programHeader.title}</h1>
            <p className="text-xl text-stone-600">
              {translations.programHeader.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {translations.programHero.programs.map((program: { title: string; desc: string }, index: number) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={program.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-flow-dense"
                    }`}
                >
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <h2 className="text-3xl mb-2 text-stone-800">{program.title}</h2>

                    <p className="text-stone-600 mb-6">{program.desc}</p>

                  </div>
                  <div
                    className={`relative h-80 rounded-2xl overflow-hidden shadow-xl ${isEven ? "" : "lg:col-start-1 lg:row-start-1"
                      }`}
                  ><img
                      src={isEven ? "/materials.avif" : "/numbers.avif"}
                      alt={program.title}
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
          <h2 className="text-4xl mb-12 text-center text-stone-800">{translations.programSchedule.title}</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm">
            <div className="space-y-6">
            {translations.programSchedule.schedule.map((schedule:{activity:string,time:string},id:number)=>{
              return(
                <div key={id} className="flex justify-between items-center pb-4 border-b border-stone-200">
                <span className="text-stone-800">{schedule.activity}</span>
                <span className="text-emerald-600">{schedule.time}</span>
              </div>
              )
            })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">{translations.programFooter.title}</h2>
          <p className="text-xl mb-8 text-emerald-100">
          {translations.programFooter.subtitle}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-full hover:bg-stone-100 transition-colors"
          >
           {translations.programFooter.buttonCTA}
          </Link>
        </div>
      </section>
    </div>
  );
}
