import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Timeline = () => {
  const timelineData = [
    {
      year: "2025",
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "Freelance, Dakar",
      type: "experience",
      description: "Lead developer sur des projets e-commerce complexes. Encadrement d'une équipe de 5 développeurs juniors.",
      achievements: ["Migration vers microservices", "Amélioration des performances de 40%", "Mise en place CI/CD"]
    },
   
    {
      year: "2025",
      title: "Full Stack Developer",
      company: "StartupTech",
      location: "Dakar, Sénégal",
      type: "experience",
      description: "Développement d'applications web et mobile pour des startups en forte croissance.",
      achievements: ["Stack MERN", "Applications mobiles", "APIs REST"]
    },
    {
      year: "2024",
      title: "MAster en réseaux et systéme",
      company: "institut supérieur d'informatique",
      location: "Dakar, Sénégal",
      type: "formation",
      description: "Formation intensive en science des données, machine learning et configuration Réseau admin Réseaux et systéme.",
      achievements: ["Python avancé", "Machine Learning", "outils Devops"]
    },
    {
      year: "2023",
      title: "Chargé du système d'information",
      company: "Sethas groupe",
      location: "Dakar, Sénégal",
      type: "experience",
      description: "Développement d'interfaces utilisateur modernes et admin systéme.",
      achievements: ["React/Vue.js", "Design responsive", "Optimisation UX"]
    },
    {
      year: "2023",
      title: "Licence en Informatique option concepteur & dev solution digitale",
      company: "Institut supérieur de management",
      location: "Dakar, Sénégal",
      type: "formation",
      description: "Licence spécialisé en développement logiciel et systèmes d'information.",
      achievements: ["Mention Bien", "Projet de fin d'étude", "Stage en entreprise"]
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'certification':
        return <Award className="w-5 h-5" />;
      case 'formation':
        return <Calendar className="w-5 h-5" />;
      default:
        return <MapPin className="w-5 h-5" />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'certification':
        return 'from-green-500 to-emerald-600';
      case 'formation':
        return 'from-purple-500 to-violet-600';
      default:
        return 'from-blue-500 to-cyan-600';
    }
  };

  return (
    <section id="parcours" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mon <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Parcours</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un parcours marqué par l'apprentissage continu et l'évolution constante dans le domaine du développement.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-blue-200"></div>
          
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start group"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: 'slideInLeft 0.6s ease-out forwards'
                }}
              >
                <div className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${getColor(item.type)} rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-300`}></div>
                
                <div className="ml-20 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:scale-105 w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center gap-3 mb-2 md:mb-0">
                      <div className={`p-2 bg-gradient-to-r ${getColor(item.type)} text-white rounded-lg`}>
                        {getIcon(item.type)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                        <p className="text-blue-600 font-medium">{item.company}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">{item.year}</div>
                      <div className="text-sm text-gray-500 flex items-center gap-1">
                        <MapPin size={14} />
                        {item.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.achievements.map((achievement, achievementIndex) => (
                      <span
                        key={achievementIndex}
                        className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;