const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

async function processImages() {
  const files = fs.readdirSync(publicDir);
  for (const file of files) {
    if (file.toLowerCase().startsWith('logo') || file.toLowerCase().endsWith('.webp') || file.toLowerCase().endsWith('.svg') || file.toLowerCase().endsWith('.mp4')) {
      continue;
    }
    
    if (file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
      const filePath = path.join(publicDir, file);
      const parsed = path.parse(filePath);
      const webpPath = path.join(publicDir, `${parsed.name}.webp`);
      
      try {
        const metadata = await sharp(filePath).metadata();
        let sharpInstance = sharp(filePath);
        
        if (metadata.width > 2000) {
          sharpInstance = sharpInstance.resize({ width: 2000, withoutEnlargement: true });
        }
        
        await sharpInstance
          .webp({ quality: 80 })
          .toFile(webpPath);
          
        console.log(`Converted ${file} to ${parsed.name}.webp`);
        
        // Remove original file
        fs.unlinkSync(filePath);
      } catch (e) {
        console.error(`Error processing ${file}:`, e);
      }
    }
  }
}

processImages();
