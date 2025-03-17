const Research = () => {
  const researchPaper = {
    title: "Empowering Sustainable Agriculture: A CNN-Based Plant Disease Detection System with Interactive AI Guidance",
    summary: "An innovative approach combining convolutional neural networks with interactive AI guidance to help farmers identify and manage plant diseases, promoting sustainable agricultural practices.",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    pdfLink: "#", // Replace with actual PDF link
  };

  return (
    <section id="research" className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Research Publication
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Academic contribution to sustainable agriculture
          </p>
        </div>

        <div className="relative overflow-hidden rounded-xl shadow-xl bg-white transform transition-all duration-500 hover:shadow-2xl animate-fadeIn">
          {/* Background pattern - subtle plant-themed design */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center" 
            style={{ backgroundImage: `url(${researchPaper.image})` }}
          />
          
          <div className="relative z-10 p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center">
            {/* Left side - Image */}
            <div className="w-full md:w-2/5 mb-8 md:mb-0">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={researchPaper.image} 
                  alt="Plant disease detection research" 
                  className="w-full h-64 md:h-80 object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="w-full md:w-3/5 md:pl-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                {researchPaper.title}
              </h3>
              
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Research Paper
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  Agriculture
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  AI
                </span>
              </div>
              
              <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                {researchPaper.summary}
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <a 
                  href={researchPaper.pdfLink} 
                  className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Paper
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 border border-gray-300 text-sm sm:text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research; 