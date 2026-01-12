import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-6 py-12 bg-primary-dark border-t border-primary-light-gray">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-primary-yellow transition-colors">Home</Link></li>
              <li><Link href="/team" className="hover:text-primary-yellow transition-colors">Team</Link></li>
              <li><Link href="/mission" className="hover:text-primary-yellow transition-colors">Mission</Link></li>
              <li><Link href="/contact" className="hover:text-primary-yellow transition-colors">Contact Us</Link></li>
              <li><Link href="/careers" className="hover:text-primary-yellow transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">News</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/trending" className="hover:text-primary-yellow transition-colors">Trending Topics</Link></li>
              <li><Link href="/articles" className="hover:text-primary-yellow transition-colors">Types of Articles</Link></li>
              <li><Link href="/technology" className="hover:text-primary-yellow transition-colors">Technology</Link></li>
              <li><Link href="/ai" className="hover:text-primary-yellow transition-colors">AI</Link></li>
              <li><Link href="/ml" className="hover:text-primary-yellow transition-colors">ML</Link></li>
              <li><Link href="/quantum" className="hover:text-primary-yellow transition-colors">Quantum</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Blogs</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/blog/quantum" className="hover:text-primary-yellow transition-colors">Quantum Computing</Link></li>
              <li><Link href="/blog/ai-ethics" className="hover:text-primary-yellow transition-colors">AI Ethics</Link></li>
              <li><Link href="/blog/data" className="hover:text-primary-yellow transition-colors">Data Exploration</Link></li>
              <li><Link href="/blog/neuro" className="hover:text-primary-yellow transition-colors">Neurotechnology</Link></li>
              <li><Link href="/blog/ml" className="hover:text-primary-yellow transition-colors">Machine Learning</Link></li>
              <li><Link href="/blog/deep-learning" className="hover:text-primary-yellow transition-colors">Deep Learning</Link></li>
              <li><Link href="/blog/metaverse" className="hover:text-primary-yellow transition-colors">Metaverse Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/resources/ebooks" className="hover:text-primary-yellow transition-colors">Ebooks</Link></li>
              <li><Link href="/resources/whitepapers" className="hover:text-primary-yellow transition-colors">Whitepapers</Link></li>
              <li><Link href="/resources/articles" className="hover:text-primary-yellow transition-colors">Articles</Link></li>
              <li><Link href="/resources/case-studies" className="hover:text-primary-yellow transition-colors">Case Studies</Link></li>
              <li><Link href="/resources/reports" className="hover:text-primary-yellow transition-colors">Reports</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Browse</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/browse/all" className="hover:text-primary-yellow transition-colors">All Topics</Link></li>
              <li><Link href="/browse/category" className="hover:text-primary-yellow transition-colors">By Category</Link></li>
              <li><Link href="/browse/author" className="hover:text-primary-yellow transition-colors">By Author</Link></li>
              <li><Link href="/browse/reports" className="hover:text-primary-yellow transition-colors">Reports</Link></li>
              <li><Link href="/browse/newest" className="hover:text-primary-yellow transition-colors">Newest</Link></li>
              <li><Link href="/browse/popular" className="hover:text-primary-yellow transition-colors">Most Popular</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-light-gray pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-primary-yellow transition-colors">
                <span className="sr-only">Twitter</span>
                <span className="text-xl">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-yellow transition-colors">
                <span className="sr-only">Facebook</span>
                <span className="text-xl">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-yellow transition-colors">
                <span className="sr-only">LinkedIn</span>
                <span className="text-xl">LinkedIn</span>
              </a>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/terms" className="hover:text-primary-yellow transition-colors">Terms & Conditions</Link>
              <Link href="/privacy" className="hover:text-primary-yellow transition-colors">Privacy Policy</Link>
            </div>
            
            <div className="text-sm text-gray-400">
              © 2023 FutureTech. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

