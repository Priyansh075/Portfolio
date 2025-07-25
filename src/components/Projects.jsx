import YT from '../assets/YoutubeUI.webp';
import lib from '../assets/OIP.webp';

const Projects = () => (
  <section id="projects" className="px-8 py-20 bg-primary text-white border border-gray-900 rounded-xl shadow">
    <h2 className="text-3xl font-bold text-secondary mb-8">Projects</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: 'YT Clone',
          image: YT,
          description: 'A clone of the popular video sharing platform YouTube, built to demonstrate expertise in front-end development and UI/UX design.',
        },
        {
          title: 'Library Management System',
          image: lib,
          description: 'A Python-based library management system that allows users to manage books, authors, and borrowers. It features a user-friendly interface and robust data storage.',
        },
        {
          title: 'Project Title',
          image: 'https://via.placeholder.com/300x200',
          description: 'Short project description goes here. Highlight your best work!',
        },
      ].map((project, i) => (
        <div
          key={i}
          className="bg-surface rounded-xl p-6 shadow-lg hover:bg-white hover:text-black hover:border-black transition duration-500 ease-in-out transform hover:scale-105"
        >
          <div className="h-40 bg-muted rounded mb-4">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-accent hover:text-black">
            {project.title}
          </h3>
          <p className="text-muted hover:text-black">{project.description}</p>
          <button
            className="bg-accent hover:bg-black text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => window.open('https://github.com/Priyansh075?tab=repositories', '_blank')}
          >
            Visit Repo
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;