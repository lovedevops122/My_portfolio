import React, { useState, useEffect } from 'react';
import { ArrowDown, Mail } from 'lucide-react';
import profilImg from "../assets/profil_mikeDEV.jpeg";
import cvFile from '../assets/alassane abou mica (1).pdf';

const Hero = () => {
  const texts = [
    "Développeur Web",
    "Data Analyst",
    "Full Stack Developer",
    "Problem Solver"
  ];

  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "alassane abou mica (1).pdf"; // Nom du fichier téléchargé
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Image + effet */}
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={profilImg}
                  alt="Mika Diallo"
                  className="w-44 h-44 object-cover rounded-full"
                />
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-xl animate-pulse"></div>
          </div>

          {/* Nom */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Mica <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Diallo</span>
          </h1>

          {/* Texte dynamique */}
          <div className="h-16 mb-8">
            <p className="text-2xl md:text-3xl text-gray-600 font-light">
              {texts[currentText]} <span className="animate-pulse text-blue-600">|</span>
            </p>
          </div>

          {/* Paragraphe de présentation */}
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionné par la création d'expériences digitales exceptionnelles et l'analyse de données pour résoudre des problèmes complexes.
          </p>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Mail size={20} />
              Me contacter
            </button>

            <button
              onClick={handleDownload}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              Télécharger CV
            </button>
          </div>

          {/* Flèche vers le bas */}
          <div className="animate-bounce">
            <ArrowDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
