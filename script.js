/* ============================================================
   KS Investments — Main Script
   - Auto-redirect mobile users to their app store
   - Generate QR codes for Play Store and App Store
   - Scroll-reveal animations
   ============================================================ */

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.ksinvestments.mobile.app';
const APP_STORE_URL  = 'https://apps.apple.com/in/app/ks-investments-by-anil-rathod/id6782927035';

/* ---------- 1. AUTO-REDIRECT MOBILE USERS ---------- */
(function autoRedirect() {
  const ua = navigator.userAgent || navigator.vendor || '';
  setTimeout(function () {
    if (/android/i.test(ua)) {
      window.location.href = PLAY_STORE_URL;
    } else if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
      window.location.href = APP_STORE_URL;
    }
  }, 2000);
})();

/* ---------- 2. QR CODE GENERATION ---------- */
window.addEventListener('load', function () {
  var qrOptions = {
    width:        164,
    height:       164,
    colorDark:    '#000000',   /* pure black */
    colorLight:   '#FFFFFF',
    correctLevel: QRCode.CorrectLevel.H
  };

  // Google Play Store QR
  new QRCode(document.getElementById('qr-android'), Object.assign({}, qrOptions, {
    text: PLAY_STORE_URL
  }));

  // Apple App Store QR
  new QRCode(document.getElementById('qr-ios'), Object.assign({}, qrOptions, {
    text: APP_STORE_URL
  }));
});

