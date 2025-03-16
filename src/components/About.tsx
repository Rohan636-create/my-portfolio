
const skills = [
  'Microcontroller Programming',
  'IoT Protocols',
  'Sensor Integration & Data Acquisition',
  'Serial Communication (UART, SPI, I2C)',
  'RTOS',
  'Cloud Platforms (AWS IoT)',
  'Git',
  'Front-end Frameworks',
  'Debugging',
];

const About = () => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-1 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Me
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              I am an Embedded Hardware Engineer and IoT Developer with a strong passion for building innovative solutions in the field of embedded systems, cloud computing, and full-stack development. With hands-on experience in Raspberry Pi, ESP8266, IoT protocols, and real-time data visualization, I have worked on projects ranging from autonomous underwater vehicles to cloud-based monitoring dashboards using Grafana and InfluxDB.
            </p>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              In addition to my embedded systems expertise, I have experience in full-stack web development, having built custom CRMs using ERPNext, backend systems with Node.js, and responsive React + Tailwind CSS frontends. My work spans both hardware and software, allowing me to create end-to-end solutions that bridge physical and digital technologies.
            </p>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              I am always eager to explore new technologies, solve challenging problems, and contribute to impactful projects. Feel free to explore my portfolio and reach out for collaborations!
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Skills</h3>
              <div className="grid grid-cols-3 gap-3">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="text-sm font-medium text-gray-900 bg-gray-100 rounded-md px-3 py-2 w-full">
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900">Education</h3>
              <div className="mt-2 text-gray-500">
                <p>BTech in Electronics and Telecommunication</p>
                <p>Walchand College of Engineering, Solapur, 2021-2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 