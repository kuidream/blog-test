# Future Tech Blog

个人博客网站项目，基于 Next.js 14 + React + TypeScript + Tailwind CSS 构建。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI**: React 18

## 功能特性

- 响应式设计，支持移动端和桌面端
- 深色主题
- 博客文章展示和分类
- 资源下载（Ebooks、Whitepapers）
- 用户评价展示
- 社区功能展示

## 开始使用

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 项目结构

```
blog-test/
├── app/                 # Next.js App Router 目录
│   ├── layout.tsx      # 根布局
│   ├── page.tsx        # 首页
│   └── globals.css     # 全局样式
├── components/          # React 组件
│   ├── Header.tsx      # 头部导航
│   ├── Hero.tsx        # 英雄区域
│   ├── Features.tsx    # 功能特性
│   ├── BlogPosts.tsx   # 博客文章列表
│   ├── Resources.tsx   # 资源下载
│   ├── Testimonials.tsx # 用户评价
│   ├── CTA.tsx         # 行动号召
│   └── Footer.tsx      # 页脚
├── public/              # 静态资源
└── package.json        # 项目配置
```

## 开发说明

- 所有组件使用 TypeScript 编写
- 样式使用 Tailwind CSS 工具类
- 遵循 Next.js App Router 规范
- 组件化开发，便于维护和扩展
