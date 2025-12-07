import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/nav'
import Footer from './components/Footer'
import EasterEgg from './components/EasterEgg'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import News from './pages/news'
import Trending from './pages/Trending'
import Categories from './pages/Categories'
import Search from './pages/Search'
import Bookmarks from './pages/Bookmarks'
import About from './pages/About'
import NotFound from './pages/NotFound'
import NewsDetail from './components/NewsDetail'

const App = () => {
  return (
    <div className="cursor-none">
      <BrowserRouter>
        <CustomCursor />
        <Nav />
        <EasterEgg />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/search" element={<Search />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/about" element={<About />} />
          <Route path="/article/:id" element={<NewsDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
