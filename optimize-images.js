const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const optimizeImages = async () => {
  const dir = './src/assets/images'; // Ajuste para sua pasta de imagens
  const files = fs.readdirSync(dir);

  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.png')) {
      const inputPath = path.join(dir, file);
      const outputPath = path.join(dir, `optimized_${file}`);
      
      await sharp(inputPath)
        .resize(800) // Redimensionar conforme necessário
        .toFile(outputPath);
    }
  }
};

optimizeImages();
