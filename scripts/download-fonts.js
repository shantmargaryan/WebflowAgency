const https = require('https');
const fs = require('fs');
const path = require('path');

const fonts = [
  {
    name: 'Poppins-Regular',
    weight: '400',
    style: 'normal'
  },
  {
    name: 'Poppins-Medium',
    weight: '500',
    style: 'normal'
  },
  {
    name: 'Poppins-SemiBold',
    weight: '600',
    style: 'normal'
  }
];

const fontsDir = path.join(__dirname, '../public/fonts');

// Create fonts directory if it doesn't exist
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

fonts.forEach(font => {
  const url = `https://fonts.googleapis.com/css2?family=Poppins:wght@${font.weight}&display=swap`;
  
  https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      // Extract the font URL from the CSS
      const fontUrl = data.match(/src: url\((.*?)\)/)[1];
      
      // Download the font file
      https.get(fontUrl, (fontRes) => {
        const filePath = path.join(fontsDir, `${font.name}.woff2`);
        const fileStream = fs.createWriteStream(filePath);
        fontRes.pipe(fileStream);
        
        fileStream.on('finish', () => {
          console.log(`Downloaded ${font.name}.woff2`);
        });
      });
    });
  });
}); 