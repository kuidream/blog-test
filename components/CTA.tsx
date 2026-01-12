export default function CTA() {
  return (
    <section className="w-full px-6 py-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary-dark-gray rounded-lg p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center">
                  <span className="text-primary-dark font-bold text-2xl">FT</span>
                </div>
                <div>
                  <p className="text-primary-yellow mb-1">Learn, Share, and Innovate</p>
                  <h2 className="text-4xl md:text-5xl font-bold">Be Part of the Future Tech Revolution</h2>
                </div>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Join our growing community of innovators, researchers, and enthusiasts. Gain exclusive access to resources, participate in discussions, and stay ahead of the curve in AI and future technologies.
              </p>
            </div>
            
            <div className="grid gap-6">
              <div className="bg-primary-dark p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary-dark text-2xl">●</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Resource Access</h3>
                <p className="text-gray-400 text-sm">
                  Gain exclusive access to our extensive library of ebooks, whitepapers, and research articles.
                </p>
              </div>
              
              <div className="bg-primary-dark p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary-dark text-2xl">●</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Forum</h3>
                <p className="text-gray-400 text-sm">
                  Join a vibrant community to discuss ideas, collaborate on projects, and network with peers.
                </p>
              </div>
              
              <div className="bg-primary-dark p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary-dark text-2xl">●</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Tech Events</h3>
                <p className="text-gray-400 text-sm">
                  Get updates on upcoming webinars, conferences, and workshops to expand your knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

