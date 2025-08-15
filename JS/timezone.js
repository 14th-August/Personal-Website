document.addEventListener('DOMContentLoaded', () => {
  const timeDisplay = document.getElementById('time-display');

  function getTimeZoneForLang(lang) {
    return lang === 'japanese' ? 'Asia/Tokyo' : 'America/Los_Angeles';
  }

  function getLocaleForLang(lang) {
    return lang === 'japanese' ? 'ja-JP' : 'en-US';
  }

  function updateTime() {
    const currentLang = localStorage.getItem('language') || 'english';
    const timeZone = getTimeZoneForLang(currentLang);
    const locale = getLocaleForLang(currentLang);

    const now = new Date();
    const formatter = new Intl.DateTimeFormat(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone,
      hour12: false
    });

    if (timeDisplay) {
      timeDisplay.textContent = `🕒 ${formatter.format(now)} (${timeZone})`;
    }
  }

  // Refresh time every second
  setInterval(updateTime, 1000);

  // Also update on language switch
  window.addEventListener('languageChange', updateTime);

  // Initial call
  updateTime();
});