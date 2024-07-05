import "./projects.css";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Project Management System",
      description: "Developed a comprehensive project management system using React, Node.js, and MongoDB, featuring task tracking, team collaboration, and reporting functionalities.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Built a scalable e-commerce platform using Angular, Express.js, and PostgreSQL, with integrated payment gateways, user authentication, and product management.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      title: "Real-time Chat Application",
      description: "Created a real-time chat application using Vue.js, Firebase, and Node.js, supporting private messaging, group chats, and file sharing.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      title: "Data Analytics Dashboard",
      description: "Implemented a data analytics dashboard using React, D3.js, and Python, allowing users to visualize and analyze large datasets interactively.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "Developed a feature-rich blog platform using Django and React, with support for markdown editing, commenting, and social media sharing.",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="projects-section" id="projects">
      <h2 className="text-3xl font-bold mb-8 text-end">Projects</h2>
      <div className="carousel-container">
        <div className="carousel py-8">
          {projectsData.map(project => (
            <div key={project.id} className="carousel-item">
              <div className="card">
                <img src={project.image} alt={project.title} className="card-image"/>
                <div className="card-content">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-description">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
