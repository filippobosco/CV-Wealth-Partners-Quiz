import sharp from 'sharp';
import { readdir } from 'fs/promises';

const images = [
  { input: 'public/hero.png', output: 'public/hero.webp', width: 900 },
  { input: 'public/Erik.jpg', output: 'public/Erik.webp', width: 400 },
  { input: 'public/Antonio.jpg', output: 'public/Antonio.webp', width: 400 },
];

for (const img of images) {
  await sharp(img.input)
    .resize({ width: img.width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(img.output);
  console.log(`✓ ${img.output}`);
}
