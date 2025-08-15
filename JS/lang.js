document.addEventListener('DOMContentLoaded', () => {
  let currentLang = localStorage.getItem('language') || 'english';

  const data = {
    english: {
      title: 'Casey Adams',
      buttonText: '日本語に切り替え',
      menu: ['About', 'Projects', 'Resume', 'Blog'],
      subtitle: 'Full Stack Engineer',
      description: 'Avid Japanese learner, born and raised in beautiful BC, Canada.'
    },
    japanese: {
      title: 'ケーシー アダムス',
      buttonText: 'Switch to English',
      menu: ['紹介', 'プロジェクト', '履歴書', 'ブログ'],
      subtitle: 'フルスタックエンジニア',
      description: '日本語を熱心に勉強している、カナダ・ブリティッシュコロンビア州出身の開発者です。'
    }
  };

  function updateLanguage() {
    document.body.classList.remove('english', 'japanese');
    document.body.classList.add(currentLang);

    // Update title
    document.title = data[currentLang].title;
    const titleEl = document.querySelector('.title');
    if (titleEl) titleEl.textContent = data[currentLang].title;

    // Update menu
    const menuItems = document.querySelectorAll('.bold-section a');
    menuItems.forEach((item, index) => {
      item.textContent = data[currentLang].menu[index];
    });

    // Update subtitle (h3) and description (h5)
    const subtitleEl = document.querySelector('.introduction-text h3');
    const descEl = document.querySelector('.introduction-text h5');
    if (subtitleEl) subtitleEl.textContent = data[currentLang].subtitle;
    if (descEl) descEl.textContent = data[currentLang].description;

    // Update button text
    const langBtn = document.getElementById('lang-switch');
    if (langBtn) {
      langBtn.textContent = data[currentLang].buttonText;
    }
    window.dispatchEvent(new Event('languageChange'));
  }

  updateLanguage();

  const langBtn = document.getElementById('lang-switch');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'english' ? 'japanese' : 'english';
      localStorage.setItem('language', currentLang);
      updateLanguage();
    });
  }
});