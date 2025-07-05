import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import profilImg from "../assets/Untitled design (1).png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Tous' },
    { id: 'web', label: 'Web' },
    { id: 'data', label: 'Data' },
    { id: 'mobile', label: 'Mobile' }
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Farmconnect",
      description: "Plateforme e-commerce complète avec paiement intégré, gestion des stocks et dashboard administrateur.",
      image: "data:image/jpeg;base64,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",
      category: "web",
      tags: ["React", "Node.js", "PostgreSQL", "integration mobile money"],
      demoUrl: "https://agri-marketplace-api.vercel.app/",
      githubUrl: "https://github.com/lovedevops122/agri-marketplace-api"
    },
    {
      id: 2,
      title: "Data Analytics Dashboard",
      description: "Dashboard interactif pour l'analyse de données de vente avec visualisations dynamiques et rapports automatisés.",
      image: "https://codedthemes.com/wp-content/uploads/edd/2022/05/Gradient-Able-Reactjs-Admin-Dashboard.webp",
      category: "data",
      tags: ["Flask", "Jinja", "mySQL", "Docker"],
      demoUrl: "#",
      githubUrl: "https://github.com/lovedevops122/travelagency"
    },
    {
      id: 3,
      title: "Mobile Task Manager",
      description: "Application mobile de gestion de tâches avec synchronisation cloud et notifications push.",
      image: "https://img.freepik.com/vecteurs-libre/collection-ecrans-applications-gestion-taches_52683-44237.jpg?w=360",
      category: "mobile",
      tags: ["React Native", "Firebase", "Redux"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      titre: "Site Web vitrine",
      description: "Site vitrine responsive avec animations fluides et optimisation SEO avancée.",
      image: profilImg,
      categorie: "web",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      demoUrl: "https://sethas.net/",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "ML Prediction Model",
      description: "Modèle de machine learning pour prédiction des ventes avec interface web pour visualisation des résultats.",
      image: "data:image/jpeg;base64,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",
      category: "data",
      tags: ["Python", "Scikit-learn", "Flask", "TensorFlow"],
      demoUrl: "#",
      githubUrl: "#"
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projets" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mes <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projets</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations, allant du développement web à l'analyse de données.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-blue-600 shadow-md hover:shadow-lg'
              }`}
            >
              <Filter size={16} />
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.demoUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="text-gray-700" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <Github size={16} className="text-gray-700" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default Projects;