const languageImages = document.querySelectorAll('.language-image');

window.addEventListener('scroll', () => {
  languageImages.forEach((image) => {
    const imageTop = image.getBoundingClientRect().top;
    const imageBottom = image.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    
    if (imageTop < windowHeight && imageBottom > 0) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
});
