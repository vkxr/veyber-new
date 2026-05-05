const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // We'll read public/logo-black.png
  const logoPath = path.join(__dirname, 'public', 'logo-black.png');
  const logoData = fs.readFileSync(logoPath, { encoding: 'base64' });
  const logoSrc = 'data:image/png;base64,' + logoData;

  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; padding: 0; background: transparent; }
        canvas { display: block; }
      </style>
    </head>
    <body>
      <canvas id="c" width="256" height="256"></canvas>
      <script>
        const canvas = document.getElementById('c');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.onload = () => {
          ctx.beginPath();
          ctx.arc(128, 128, 128, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
          
          // Calculate dimensions to fit the logo inside the circle
          const padding = 20;
          const maxWidth = 256 - padding * 2;
          const scale = maxWidth / img.width;
          const w = img.width * scale;
          const h = img.height * scale;
          
          const x = (256 - w) / 2;
          const y = (256 - h) / 2;
          
          ctx.drawImage(img, x, y, w, h);
          
          window.renderDone = true;
        };
        img.src = "${logoSrc}";
      </script>
    </body>
    </html>
  `);

  await page.waitForFunction('window.renderDone === true');
  
  const element = await page.$('canvas');
  await element.screenshot({ path: path.join(__dirname, 'app', 'icon.png'), omitBackground: true });
  
  // Remove the default favicon.ico so Next.js uses icon.png
  if (fs.existsSync(path.join(__dirname, 'app', 'favicon.ico'))) {
    fs.unlinkSync(path.join(__dirname, 'app', 'favicon.ico'));
  }

  await browser.close();
  console.log('Favicon generated successfully');
})();