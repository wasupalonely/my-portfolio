// src/components/ProjectModal.jsx
import React from 'react';

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={onClose}>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 dark:text-white">{project.title}</h2>
        <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover mb-4"/>
        <p className="dark:text-gray-300">{project.details}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default ProjectModal;
