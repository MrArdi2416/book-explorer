# 📚 Book Explorer &nbsp; 
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB) 
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) 
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-593D88?logo=redux&logoColor=white) 
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)

> A Google Books-powered React app to search, view, and favorite books.

---

## 🚀 Live Demo

🔗 [View Deployed App on Render](https://book-explorer-6wmw.onrender.com)

---

## ✨ Features

- 🔍 **Multi-field Search**: Search books by title, author, or genre.
- 📘 **Book Details**: See covers, authors, and descriptions.
- ❤️ **Favorites**: Add books to your favorites using Redux Toolkit.
- ⚛️ **Routing**: Navigate across pages with React Router.
- 🧠 **State Management**: Powered by Redux Toolkit.
- 🎨 **Tailwind CSS UI**: Clean, responsive design.
- ⚙️ **TypeScript Support**: Type-safe components and logic.

---

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **API**: Google Books API

---

## 📁 Folder Structure
<pre> 
book-explorer/
├── public/
├── src/
│ ├── components/
│ │ ├── BookCard.tsx # Book display component
│ │ └── SearchForm.tsx # Search form
│
│ ├── pages/
│ │ ├── BookDetailsPage.tsx # Book detail view
│ │ ├── FavoritesPage.tsx # Saved favorites list
│ │ ├── LandingPage.tsx # Welcome / intro page
│ │ └── SearchPage.tsx # Book search results
│
│ ├── redux/
│ │ ├── slices/
│ │ │ └── favoritesSlice.ts # Favorite state logic
│ │ └── store.ts # Redux Toolkit store config
│
│ ├── App.tsx
│ └── index.tsx
├── tailwind.config.js
├── package.json
└── tsconfig.json
 </pre>
---

## 🧑‍💻 Getting Started

### 1. Clone the Repository

git clone https://github.com/MrArdi2416/book-explorer.git
cd book-explorer

### 2. Install Dependencies
Make sure you have Node.js ≥ 16 installed.

npm install

### 3. Run the Development Server

npm run start

🌐 http://localhost:3000

### 📦 Build for Production

npm run build

serve -s build

### 🌐 Deployment

The app is deployed on Render:
🔗 https://book-explorer-6wmw.onrender.com

You can also deploy this app to:

  Vercel
  Netlify
  GitHub Pages

### 👤 Author
Dhaval Ardi
🔗 GitHub - MrArdi2416

💡 Feel free to fork and enhance this app. PRs are welcome!


