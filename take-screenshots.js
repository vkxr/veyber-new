const puppeteer = require('puppeteer');

const sites = [
  { name: 'Vijay Kataria', url: 'https://vijaykataria.in/', file: 'vijaykataria.webp' },
  { name: 'Arihant Media', url: 'https://arihantmedia.co.in/index.php', file: 'arihantmedia.webp' },
  { name: 'Biz Marketing Services', url: 'https://bizmarketingservices.in/', file: 'bizmarketing.webp' },
  { name: 'Marketing Agency London', url: 'https://marketingagencylondon.uk/', file: 'marketingagencylondon.webp' },
  { name: 'Computer Service Near Me', url: 'https://computerservicenearme.in/', file: 'computerservice.webp' },
  { name: 'HSTL Site', url: 'https://hstl.site/', file: 'hstl.webp' },
  { name: 'KVRS Virtual Assistant', url: 'https://kvrsvirtualassistant.com/', file: 'kvrsvirtual.webp' },
  { name: 'KVRS', url: 'https://kvrs.co.in/', file: 'kvrs.webp' },
  { name: 'My Fibroid Clinic', url: 'https://myfibroidclinic.com/', file: 'myfibroid.webp' },
  { name: 'Knee Pain 360', url: 'https://kneepain360.com/', file: 'kneepain.webp' },
  { name: 'My Hemorrhoid Clinic', url: 'https://myhemorrhoidclinic.com/', file: 'myhemorrhoid.webp' },
  { name: 'Geo Treasures Nexus', url: 'https://geotreasuresnexus.com/', file: 'geotreasures.webp' },
  { name: 'Geo Mine Enviro Experts', url: 'https://geomineenviroexperts.com/', file: 'geomine.webp' },
  { name: 'Property Pedia', url: 'https://propertyppedia.com/', file: 'propertypedia.webp' },
  { name: 'Brand Channel UK', url: 'https://brandchannel.co.uk/', file: 'brandchannel.webp' },
  { name: 'Veyber', url: 'https://veyber.co.in/', file: 'veyber.webp' }
];

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  for (const site of sites) {
    console.log(`Taking screenshot of ${site.name}...`);
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1440, height: 900 });
      await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 30000 });
      await page.screenshot({ path: `public/portfolio/${site.file}`, type: 'webp', quality: 80 });
      await page.close();
      console.log(`Success: ${site.file}`);
    } catch (e) {
      console.error(`Failed to capture ${site.name}:`, e.message);
    }
  }
  await browser.close();
  console.log("Done.");
})();
