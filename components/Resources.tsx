export default function Resources() {
  return (
    <section className="w-full px-6 py-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-primary-yellow mb-2">Your Hub for In-depth Information</p>
            <h2 className="text-4xl md:text-5xl font-bold">Unlock Valuable Knowledge with Future Tech's Resources</h2>
          </div>
          <button className="bg-primary-yellow text-primary-dark px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
            Explore Resources
            <span className="text-xl">→</span>
          </button>
        </div>
        
        <div className="space-y-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary-yellow rounded"></div>
              <h3 className="text-3xl font-bold">Ebooks</h3>
            </div>
            <p className="text-gray-400 mb-8">
              Download comprehensive guides and in-depth analyses on various future technology topics.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-primary-dark-gray rounded-lg overflow-hidden">
                <div className="w-full h-64 bg-primary-light-gray"></div>
              </div>
              <div>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Variety of Topics</h4>
                    <p className="text-gray-400 text-sm">
                      Over 200+ titles covering machine learning, robotics, blockchain, and more.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Total Downloads</h4>
                    <div className="flex items-center gap-3">
                      <p className="text-gray-400 text-sm">15K+ Users</p>
                      <div className="flex items-center gap-1">
                        <div className="w-8 h-8 rounded-full bg-primary-light-gray border-2 border-primary-dark"></div>
                        <div className="w-8 h-8 rounded-full bg-primary-light-gray border-2 border-primary-dark -ml-2"></div>
                        <div className="w-8 h-8 rounded-full bg-primary-light-gray border-2 border-primary-dark -ml-2"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Available Formats</h4>
                    <p className="text-gray-400 text-sm">PDF format for easy access.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Average Author Expertise</h4>
                    <p className="text-gray-400 text-sm">
                      Ebooks are written by seasoned authors with an average of 10 years of experience.
                    </p>
                  </div>
                </div>
                <button className="bg-primary-yellow text-primary-dark px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
                  Download Ebooks
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary-yellow rounded"></div>
              <h3 className="text-3xl font-bold">Whitepapers</h3>
            </div>
            <p className="text-gray-400 mb-8">
              Access detailed research papers and reports from leading experts in the field.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-primary-dark-gray rounded-lg overflow-hidden">
                <div className="w-full h-64 bg-primary-light-gray"></div>
              </div>
              <div>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Topic Coverage</h4>
                    <p className="text-gray-400 text-sm">
                      Over 100+ whitepapers on AI ethics, quantum computing, data privacy, and advanced robotics.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Total Downloads</h4>
                    <div className="flex items-center gap-3">
                      <p className="text-gray-400 text-sm">10K+ Users</p>
                      <div className="flex items-center gap-1">
                        <div className="w-8 h-8 rounded-full bg-primary-light-gray border-2 border-primary-dark"></div>
                        <div className="w-8 h-8 rounded-full bg-primary-light-gray border-2 border-primary-dark -ml-2"></div>
                        <div className="w-8 h-8 rounded-full bg-primary-light-gray border-2 border-primary-dark -ml-2"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Available Formats</h4>
                    <p className="text-gray-400 text-sm">PDF format for access.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Average Author Expertise</h4>
                    <p className="text-gray-400 text-sm">
                      Whitepapers are authored by subject matter experts with an average of 15 years of experience.
                    </p>
                  </div>
                </div>
                <button className="bg-primary-yellow text-primary-dark px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
                  Download Whitepapers
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

