const https = require('https');

https.get('https://www.youtube.com/@TRADEPULSE-n7p/videos', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const match = data.match(/"videoId":"([^"]+)"/);
    if (match) {
      console.log('Video ID:', match[1]);
    } else {
      console.log('Not found');
    }
  });
}).on('error', (err) => {
  console.log('Error:', err.message);
});
