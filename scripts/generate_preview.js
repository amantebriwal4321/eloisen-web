const sharp = require('sharp');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

const sharp = require('sharp');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

async function createImages() {
  const sourceImage = path.join(publicDir, 'img2.webp'); // A good cinematic hero image
  const previewPath = path.join(publicDir, 'preview.jpg');
  
  try {
    await sharp(sourceImage)
      .resize({
        width: 1200,
        height: 630,
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 90 })
      .toFile(previewPath);
      
    console.log("Successfully generated preview.jpg (1200x630)");
  } catch (err) {
    console.error("Failed to generate preview image:", err);
  }
  
  const logoPath = path.join(publicDir, 'logo4.png');
  const faviconPath = path.join(publicDir, 'favicon.ico');
  try {
    await sharp(logoPath)
      .resize({ width: 64, height: 64, fit: 'contain', background: { r:0, g:0, b:0, alpha:0 } })
      .png()
      .toFile(faviconPath);
    console.log("Successfully generated favicon.ico (64x64 png)");
  } catch(err) {
    console.error("Failed to generate favicon:", err);
  }
}

createImages();
