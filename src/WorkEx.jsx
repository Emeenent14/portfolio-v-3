export default function WorkEx() {
  return (
    <div>
      <div
        id="workex-container"
        className="workex-container bg-slate-900 pt-20 pb-12"
        style={{ zIndex: 100, position: "relative" }}
      >
        <h3 className="text-white text-center text-3xl font-bold my-6">
          Work Experience
        </h3>
        <div className="timeline mt-6">
          <div className="timeline-container">
            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="text-sky-500">Frontend developer || React.js & Next.js</h3>
                <span className="text-white">Polaris Digitech Ltd. Lagos, Nigeria</span>
                <p className="text-white mb-3">
                  <em>2023 - 2024</em>
                </p>
                <p className="text-gray-400 text-justify">
                  Developed and optimized dynamic, high-performance user interfaces using React.js, Next.js, and Tailwind CSS, reducing page load speeds by
                  40%.
                  Built reusable component architectures with TypeScript and Redux, reducing development time for new features by 30%.
                  Worked in an Agile development environment, collaborating with UI/UX designers and backend teams to deliver scalable solutions.

                </p>
              </div>
            </div>

            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="text-sky-500">Full Stack Developer || React & Django</h3>
                <span className="text-white">Elonatech Nigeria Ltd. Lagos</span>
                <p className="text-white mb-3">
                  <em>2021 - 2023</em>
                </p>
                <p className="text-justify text-gray-400">
                   Led the development of enterprise-level web applications, improving system efficiency and user experience for clients across industries.
                   Optimized API performance by 60% through Django Rest Framework (DRF) query optimizations, database indexing, and efficient state management using Redux
                   Streamlined development workflows by implementing CI/CD pipelines with GitHub Actions, reducing deployment time by 50%.

                </p>
              </div>
            </div>

            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="text-sky-500">Full Stack Developer Internship</h3>
                <span className="text-white">
                  MEGHEE
                </span>
                <p className="text-white mb-3">
                  <em>2020 - 2021</em>
                </p>
                <p className="text-gray-400 text-justify">
                  Developed responsive, user-friendly interfaces using Tailwind CSS, JavaScript, and TypeScript, ensuring cross-browser compatibility.
                  Implemented backend APIs using Django Rest Framework (DRF) for secure and scalable data handling.
                  Built and maintained full-stack web applications using React.js, Next.js, Django, and PostgreSQL.

                </p>
              </div>
            </div>

            </div>
          </div>
        </div>
      </div>

  );
}
