import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-[#1A1A1A] border-b border-[#262626] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="w-full flex min-h-[600px]">
          {/* 左侧文字内容区域 */}
          <div className="w-[60%] pt-20 flex flex-col border-r border-[#262626]">
            <div className="flex-1 flex flex-col justify-center pr-8">
              {/* 副标题 */}
              <p className="text-[#A0A0A0] text-lg mb-6">
                Your Journey to Tomorrow Begins Here
              </p>
              
              {/* 主标题 */}
              <h1 className="text-white text-5xl font-bold mb-8 leading-tight">
                Explore the Frontiers of
                <br />
                Artificial Intelligence
              </h1>
              
              {/* 正文 */}
              <p className="text-[#C0C0C0] text-base leading-relaxed max-w-2xl mb-12">
                Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.
              </p>
            </div>

            {/* 统计数据表格 */}
            <div className="relative grid grid-cols-3 border-t border-[#262626] bg-[#1A1A1A]">
              {/* 顶部延伸线 */}
              <div className="absolute top-[-1px] right-full w-screen h-[1px] bg-[#262626]"></div>
              
              {/* 第一个数据点 */}
              <div className="px-8 py-6 border-r border-[#262626]">
                <div className="flex items-center mb-1">
                  <span className="text-white text-4xl font-bold">300</span>
                  <span className="text-primary-yellow text-4xl font-bold">+</span>
                </div>
                <p className="text-[#98989A] text-sm">Resources available</p>
              </div>

              {/* 第二个数据点 */}
              <div className="px-8 py-6 border-r border-[#262626]">
                <div className="flex items-center mb-1">
                  <span className="text-white text-4xl font-bold">12k</span>
                  <span className="text-primary-yellow text-4xl font-bold">+</span>
                </div>
                <p className="text-[#98989A] text-sm">Total Downloads</p>
              </div>

              {/* 第三个数据点 */}
              <div className="px-8 py-6">
                <div className="flex items-center mb-1">
                  <span className="text-white text-4xl font-bold">10k</span>
                  <span className="text-primary-yellow text-4xl font-bold">+</span>
                </div>
                <p className="text-[#98989A] text-sm">Active Users</p>
              </div>
            </div>
          </div>
          
          {/* 右侧图片区域 */}
          <div className="w-[40%] relative min-h-[600px]">
            <div className="w-full h-full absolute inset-0">
              {/* 这里放置图片，暂时使用占位 */}
              <div className="w-full h-full bg-[#1A1A1A] flex items-center justify-center">
                <span className="text-white/30 text-sm">Image Placeholder</span>
              </div>
              {/* 实际使用时替换为：
              <Image
                src="/hero-image.jpg"
                alt="AI Innovation"
                fill
                className="object-cover"
                priority
              />
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

