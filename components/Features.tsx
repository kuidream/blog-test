import Image from "next/image";

export default function Features() {
  return (
    <section className="w-full bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex">
          {/* 第一个区块 */}
          <div className="flex-1 relative p-8 border-r border-[#262626]">
            {/* 右上角按钮 */}
            <button className="absolute top-8 right-8 w-10 h-10 bg-primary-yellow rounded-full flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 10.5L10.5 3.5M10.5 3.5H5.25M10.5 3.5V8.75" stroke="#262626" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {/* 图标 */}
            <div className="mb-5">
              <Image src="/images/Icon1.png" alt="Latest News Updates" width={48} height={48} />
            </div>
            
            {/* 标题 */}
            <h3 className="text-white text-2xl font-bold mb-3">Latest News Updates</h3>
            
            {/* 描述文字 */}
            <p className="text-[#A0A0A0] text-base mb-4">Stay Current</p>
            <p className="text-[#A0A0A0] text-sm">Over 1,000 articles published monthly</p>
          </div>
          
          {/* 垂直分割线 */}
          <div className="w-px bg-[#262626]"></div>
          
          {/* 第二个区块 */}
          <div className="flex-1 relative p-8 border-r border-[#262626]">
            {/* 右上角按钮 */}
            <button className="absolute top-8 right-8 w-10 h-10 bg-primary-yellow rounded-full flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 10.5L10.5 3.5M10.5 3.5H5.25M10.5 3.5V8.75" stroke="#262626" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {/* 图标 */}
            <div className="mb-5">
              <Image src="/images/Icon2.png" alt="Expert Contributors" width={48} height={48} />
            </div>
            
            {/* 标题 */}
            <h3 className="text-white text-2xl font-bold mb-3">Expert Contributors</h3>
            
            {/* 描述文字 */}
            <p className="text-[#A0A0A0] text-base mb-4">Trusted Insights</p>
            <p className="text-[#A0A0A0] text-sm">50+ renowned AI experts on our team</p>
          </div>
          
          {/* 垂直分割线 */}
          <div className="w-px bg-[#262626]"></div>
          
          {/* 第三个区块 */}
          <div className="flex-1 relative p-8">
            {/* 右上角按钮 */}
            <button className="absolute top-8 right-8 w-10 h-10 bg-primary-yellow rounded-full flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 10.5L10.5 3.5M10.5 3.5H5.25M10.5 3.5V8.75" stroke="#262626" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {/* 图标 */}
            <div className="mb-5">
              <Image src="/images/Icon3.png" alt="Global Readership" width={48} height={48} />
            </div>
            
            {/* 标题 */}
            <h3 className="text-white text-2xl font-bold mb-3">Global Readership</h3>
            
            {/* 描述文字 */}
            <p className="text-[#A0A0A0] text-base mb-4">Worldwide Impact</p>
            <p className="text-[#A0A0A0] text-sm">2 million monthly readers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
