export default function Features() {
  return (
    <section className="w-full px-6 py-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-primary-yellow mb-2">Explore our features</p>
          <h2 className="text-4xl md:text-5xl font-bold">Future Tech Features</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-primary-dark-gray p-8 rounded-lg">
            <div className="w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center mb-4">
              <span className="text-primary-dark text-2xl">●</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Latest News & Updates</h3>
            <p className="text-gray-400">
              Stay current with our daily publications, weekly newsletters, and exclusive interviews.
            </p>
          </div>
          
          <div className="bg-primary-dark-gray p-8 rounded-lg">
            <div className="w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center mb-4">
              <span className="text-primary-dark text-2xl">●</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Contributions</h3>
            <p className="text-gray-400">
              Gain insights from leading AI researchers, industry experts, and thought leaders.
            </p>
          </div>
          
          <div className="bg-primary-dark-gray p-8 rounded-lg">
            <div className="w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center mb-4">
              <span className="text-primary-dark text-2xl">●</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Global Readership</h3>
            <p className="text-gray-400">
              Join a diverse community of AI enthusiasts, professionals, and academics worldwide.
            </p>
          </div>
        </div>
        
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-primary-yellow rounded"></div>
            <h3 className="text-3xl font-bold">Future Technology Blog</h3>
          </div>
          <p className="text-gray-400 mb-8">
            Stay informed with our expansive discussions on future technology.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-primary-dark-gray p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Diversity</h4>
              <p className="text-gray-400 text-sm">
                Over 100+ topics covering a broad spectrum of AI and tech.
              </p>
            </div>
            <div className="bg-primary-dark-gray p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Variety</h4>
              <p className="text-gray-400 text-sm">
                Articles, news, tutorials, opinion pieces, and in-depth analyses.
              </p>
            </div>
            <div className="bg-primary-dark-gray p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Frequency</h4>
              <p className="text-gray-400 text-sm">
                New content added daily to keep you up-to-date.
              </p>
            </div>
            <div className="bg-primary-dark-gray p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Authoritative</h4>
              <p className="text-gray-400 text-sm">
                Written by experts and verified by our editorial team.
              </p>
            </div>
            <div className="bg-primary-dark-gray p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Depth</h4>
              <p className="text-gray-400 text-sm">
                Comprehensive articles that delve deep into complex subjects.
              </p>
            </div>
            <div className="bg-primary-dark-gray p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Graphics</h4>
              <p className="text-gray-400 text-sm">
                Rich visuals, infographics, and interactive elements.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-primary-yellow rounded"></div>
            <h3 className="text-3xl font-bold">Research Insights Blogs</h3>
          </div>
          <p className="text-gray-400 mb-8">
            Dive deeper into cutting-edge research and academic papers.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-primary-dark-gray p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Understanding</h4>
              <p className="text-gray-400 text-sm">
                Simplified explanations of complex research papers.
              </p>
            </div>
            <div className="bg-primary-dark-gray p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Summaries</h4>
              <p className="text-gray-400 text-sm">
                Concise summaries of key findings and implications.
              </p>
            </div>
            <div className="bg-primary-dark-gray p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Trends</h4>
              <p className="text-gray-400 text-sm">
                Analysis of emerging trends and future directions in AI research.
              </p>
            </div>
            <div className="bg-primary-dark-gray p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Contributors</h4>
              <p className="text-gray-400 text-sm">
                Insights from leading researchers and academic institutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

