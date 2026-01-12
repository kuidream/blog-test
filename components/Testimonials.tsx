const testimonials = [
  {
    id: 1,
    name: "Sarah Thompson",
    location: "NYC, USA",
    rating: 5,
    quote: "The articles on Future Tech have been a game-changer for my research. They provide in-depth analysis that's both insightful and easy to understand.",
  },
  {
    id: 2,
    name: "Tim Peter",
    location: "London, UK",
    rating: 5,
    quote: "The unique perspective on emerging technologies is truly refreshing. I always look forward to their new publications.",
  },
  {
    id: 3,
    name: "Emily Adams",
    location: "Berlin, Germany",
    rating: 5,
    quote: "Future Tech is an invaluable resource for staying up-to-date with the rapid advancements in AI. Highly recommend!",
  },
  {
    id: 4,
    name: "Alex Jackson",
    location: "Houston, USA",
    rating: 5,
    quote: "The depth of knowledge shared here is unparalleled. It's my go-to source for understanding complex AI concepts.",
  },
  {
    id: 5,
    name: "Jessica Miller",
    location: "Dublin, USA",
    rating: 5,
    quote: "I appreciate the diverse range of topics covered. It helps me broaden my understanding of the entire tech landscape.",
  },
  {
    id: 6,
    name: "Diego Lopez",
    location: "Barcelona, Spain",
    rating: 5,
    quote: "The community features are fantastic! It's great to connect with other enthusiasts and share insights.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full px-6 py-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-primary-yellow mb-2">What Our Readers Say</p>
            <h2 className="text-4xl md:text-5xl font-bold">Real Words from Real Readers</h2>
          </div>
          <button className="bg-primary-yellow text-primary-dark px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
            View All Reviews
            <span className="text-xl">→</span>
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-primary-dark-gray p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-light-gray"></div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.location}</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-primary-yellow">★</span>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

