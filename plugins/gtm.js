export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'AW-16550440619');
  
      // Load GTM script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-16550440619';
      document.head.appendChild(script);
  
      // Optional: Push initial events or configurations
      gtag('event', 'conversion', {
          'send_to': 'AW-16550440619/EbFXCLHb-qsZEKvd7tM9',
          'value': 1.0,
          'currency': 'USD'
      });
    }
  });