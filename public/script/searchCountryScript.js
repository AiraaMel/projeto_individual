document.addEventListener('DOMContentLoaded', () => {
  const countryButtons = document.querySelectorAll('.country-button');

  countryButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove seleção anterior
      countryButtons.forEach(btn => {
        btn.classList.remove('selected');
        const existingCheckmark = btn.querySelector('.checkmark');
        if (existingCheckmark) {
          existingCheckmark.remove();
        }
      });

      // Adiciona seleção ao botão clicado
      button.classList.add('selected');
      
      // Adiciona checkmark
      if (!button.querySelector('.checkmark')) {
        const checkmark = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        checkmark.setAttribute('class', 'checkmark');
        checkmark.setAttribute('width', '20');
        checkmark.setAttribute('height', '20');
        checkmark.setAttribute('viewBox', '0 0 24 24');
        checkmark.setAttribute('fill', 'none');
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M20 6L9 17L4 12');
        path.setAttribute('stroke', 'currentColor');
        path.setAttribute('stroke-width', '2');
        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('stroke-linejoin', 'round');
        
        checkmark.appendChild(path);
        button.appendChild(checkmark);
      }

    });
  });
});
