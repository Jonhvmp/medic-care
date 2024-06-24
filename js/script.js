/*
    * Animação do texto do banner
*/
document.addEventListener('DOMContentLoaded', function () {
    const words = ['Brighter', 'Radiant', 'Whiter'];
    let currentWordIndex = 0;
    const highlightElement = document.getElementById('highlight');

    setInterval(() => {
      highlightElement.classList.add('hidden');

      setTimeout(() => {
        currentWordIndex = (currentWordIndex + 1) % words.length;
        highlightElement.textContent = words[currentWordIndex];
        highlightElement.classList.remove('hidden');
      }, 500);
    }, 3000); // Muda a palavra a cada 3 segundos
  });

/*
    * Animação de entrada das seções
*/
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
      const delay = section.getAttribute('data-delay');
      setTimeout(() => {
        section.classList.add('show');
      }, parseFloat(delay) * 1000);
    });
  });