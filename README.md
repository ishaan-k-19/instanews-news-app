
# 📰 InstaNews - News Aggregation Web Application

## Overview
InstaNews is a modern React-based news application that provides real-time news articles across multiple categories. The application offers an intuitive, responsive interface for browsing the latest headlines.

## 🌟 Features
- Multiple News Categories
  - Business
  - Entertainment
  - General
  - Health
  - Science
  - Sports
  - Technology

- Infinite Scrolling
- Responsive Design
- Category-based News Filtering
- Progress Loading Bar
- Detailed Article Cards

## 🛠 Technologies Used
- React.js
- React Router
- Bootstrap
- Infinite Scroll Component
- Top Loading Bar

## 📦 Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

## 🚀 Getting Started

### Installation
1. Clone the repository
```bash
git clone https://github.com/ishaan-k-19/instanews-news-app.git
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory
```
REACT_APP_NEWS_API=your_news_api_key_here
```

4. Start the development server
```bash
npm start
```

## 🔧 Environment Configuration
- `pageSize`: Number of articles per page/scroll (default: 10)
- `REACT_APP_NEWS_API`: Your news API key from a news data provider

## 📋 Project Structure
- `src/components/Navbar.js`: Navigation component
- `src/components/News.js`: Main news fetching and rendering component
- `src/components/NewsItem.js`: Individual news article card component
- `src/App.js`: Main application routing and configuration

## 🌐 Routing
- `/`: General news
- `/business`: Business news
- `/entertainment`: Entertainment news
- Other category-specific routes available

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
Distributed under the MIT License.

## 🔗 Contact
Ishaan Kashyap - ishaank.1912@gmail.com
Project Link: [https://github.com/ishaan-k-19/instanews-news-app]

## 🙏 Acknowledgements
- React.js
- React Router
- Bootstrap
- News API Provider
