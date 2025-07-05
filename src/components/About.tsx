import React from 'react';
import { Code, Database, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Développement",
      description: "Expert en React, Node.js et technologies modernes"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Analysis",
      description: "Analyse et visualisation de données complexes"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Solutions créatives pour défis techniques"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Objectifs",
      description: "Livraison de projets de qualité dans les délais"
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            À propos de <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">moi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="text-xl mb-6">
                Développeur passionné avec plus de 5 ans d'expérience dans la création d'applications web modernes et l'analyse de données.
              </p>
              <p className="mb-6">
                Mon parcours m'a mené à travailler sur des projets variés, de la conception d'interfaces utilisateur intuitives à l'implémentation de systèmes backend robustes. J'ai une approche centrée sur l'utilisateur et je privilégie toujours la qualité du code et les bonnes pratiques.
              </p>
              <p className="mb-8">
                Constamment en veille technologique, j'aime explorer de nouveaux outils et méthodologies pour améliorer mes compétences et apporter de la valeur à chaque projet.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React Expert</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Full Stack</span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Data Scientist</span>
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">UI/UX</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;