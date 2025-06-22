// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Dynamicky detekovat base path
    const base = window.location.pathname.startsWith('/krizovna') ? '/krizovna' : '';
    navigator.serviceWorker.register(base + '/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
} 