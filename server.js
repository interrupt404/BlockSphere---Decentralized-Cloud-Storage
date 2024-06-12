const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3001;

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Proxy endpoint for fetching images
app.get('/fetch-image', async (req, res) => {
  const imageUrl = req.query.url;
  try {
    if (!imageUrl) {
      throw new Error('Image URL is missing');
    }

    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    if (response.status === 200) {
      const contentType = response.headers['content-type'];
      res.set('Content-Type', contentType);
      res.send(response.data);
    } else {
      throw new Error('Failed to fetch image');
    }
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).send('Error fetching image');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
