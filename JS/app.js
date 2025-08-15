window.addEventListener('load', () => {
  const splash = document.querySelector('.splash');

  setTimeout(() => {
    splash.classList.add('display-none');

    // Remove splash from DOM after fade-out transition (0.75s)
    splash.addEventListener('transitionend', () => {
      splash.style.display = 'none';
    });
  }, 3250);
});
