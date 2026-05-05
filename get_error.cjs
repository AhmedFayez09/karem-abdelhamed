const puppeteer = require('puppeteer');
(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    page.on('console', msg => {
      if (msg.type() === 'error') console.log('BROWSER_ERROR:', msg.text());
    });
    page.on('pageerror', error => console.log('PAGE_ERROR:', error.message));
    
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
    
    // Scroll down smoothly
    await page.evaluate(async () => {
      for(let i=0; i<10; i++){
        window.scrollBy(0, window.innerHeight / 2);
        await new Promise(r => setTimeout(r, 200));
      }
    });

    await new Promise(r => setTimeout(r, 1000));
    console.log("Puppeteer finished.");
    await browser.close();
  } catch(e) {
    console.error("Puppeteer Script Error:", e);
  }
})();
