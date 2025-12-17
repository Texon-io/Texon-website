function ProjectCard({ project }) {
    return (
        <div
            className={`project-card w-full md:w-3/5 lg:w-88 ${
                project.id % 2 === 0 ? "" : "sm:mt-36 mr-0"
            } my-10`}
        >
            {/* Project Image */}
            <div className="card-img rounded-2xl bg-gray-800 overflow-hidden h-80 w-full relative group">
                <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform ${
                        project.link ? "duration-700" : "duration-500"
                    }`}
                />

                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 "
                    >
            <span className="px-6 py-2 border rounded-full border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black duration-500">
              View Project
            </span>
                    </a>
                )}
            </div>

            {/* Text */}
            <div className="card-text px-2">
                <h3 className="text-xl font-semibold mt-4">{project.title}</h3>

                <p className="text-sm text-main-text/80 leading-relaxed mt-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="text-xs px-2 py-1 rounded-full border border-gray-600 text-gray-300 hover:bg-gray-300 hover:text-gray-900 transition-colors duration-500"
                        >
              {t}
            </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
