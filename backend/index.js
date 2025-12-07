const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000;

const getCachedData = (key) => {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  return null;
};

const setCachedData = (key, data) => {
  cache.set(key, { data, timestamp: Date.now() });
};

app.get('/api/news', async (req, res) => {
  try {
    const cached = getCachedData('news');
    if (cached) return res.json(cached);
    
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: 'technology',
        sortBy: 'publishedAt',
        apiKey: process.env.API
      }
    });
    setCachedData('news', response.data);
    res.json(response.data);
  } catch (error) {
    console.error('News fetch error:', error.message);
    res.status(500).json({ error: 'The news hamsters are on strike. Try again later!' });
  }
});

app.get('/api/trending', async (req, res) => {
  try {
    const cached = getCachedData('trending');
    if (cached) return res.json(cached);
    
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: 'trending',
        sortBy: 'popularity',
        apiKey: process.env.API
      }
    });
    setCachedData('trending', response.data);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch trending' });
  }
});

app.get('/api/search', async (req, res) => {
  try {
    const query = req.query.q;
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: query,
        sortBy: 'publishedAt',
        apiKey: process.env.API
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'alive', message: 'Server is caffeinated and ready!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`☕ Powered by coffee and questionable decisions`);
});
