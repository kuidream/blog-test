export default function Hero() {
  return (
    <section className="w-full px-6 py-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Explore the Frontiers of Artificial Intelligence
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Your Journey to Tomorrow Begins Here
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              At Future Tech, we believe in the power of AI to transform industries and lives. Our platform is dedicated to providing cutting-edge insights, research, and discussions on the latest advancements in artificial intelligence.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-primary-yellow mb-2">300+</div>
                <div className="text-gray-400">Research available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-yellow mb-2">12k+</div>
                <div className="text-gray-400">Total Contributor</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-yellow mb-2">10k+</div>
                <div className="text-gray-400">Active users</div>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-400 mb-3">Followed by 100k+ members</p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary-light-gray border-2 border-primary-dark"></div>
                <div className="w-10 h-10 rounded-full bg-primary-light-gray border-2 border-primary-dark -ml-2"></div>
                <div className="w-10 h-10 rounded-full bg-primary-light-gray border-2 border-primary-dark -ml-2"></div>
                <div className="w-10 h-10 rounded-full bg-primary-light-gray border-2 border-primary-dark -ml-2"></div>
              </div>
            </div>
            
            <button className="bg-primary-yellow text-primary-dark px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
              Explore Resources
              <span className="text-xl">→</span>
            </button>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-primary-dark-gray rounded-lg flex items-center justify-center">
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <defs>
                    <radialGradient id="gradient" cx="50%" cy="50%">
                      <stop offset="0%" stopColor="#FFD700" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="200" cy="200" r="150" fill="url(#gradient)" />
                  <line x1="200" y1="50" x2="200" y2="350" stroke="#FFD700" strokeWidth="2" opacity="0.3" />
                  <line x1="50" y1="200" x2="350" y2="200" stroke="#FFD700" strokeWidth="2" opacity="0.3" />
                  <line x1="100" y1="100" x2="300" y2="300" stroke="#FFD700" strokeWidth="2" opacity="0.3" />
                  <line x1="300" y1="100" x2="100" y2="300" stroke="#FFD700" strokeWidth="2" opacity="0.3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

