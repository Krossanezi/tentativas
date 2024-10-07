const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
  await imagemin(['src/assets/images/*.{jpg,png}'], {
    destination: 'dist/images',
    plugins: [
      imageminWebp({ quality: 75 })
    ]
  });

  console.log('Imagens convertidas para WebP');
})();
