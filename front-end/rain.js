// rain.js
window.addEventListener('DOMContentLoaded', () => {
  const rainContainer = document.createElement('div');
  rainContainer.classList.add('rain-container');
  document.body.appendChild(rainContainer);

  const totalDrops = 100;

  for (let i = 0; i < totalDrops; i++) {
    const drop = document.createElement('div');
    drop.classList.add('drop');

    drop.style.left = Math.random() * 100 + 'vw';
    drop.style.animationDuration = 0.5 + Math.random() * 1.5 + 's';
    drop.style.animationDelay = Math.random() * 2 + 's';
    drop.style.height = 10 + Math.random() * 20 + 'px';

    rainContainer.appendChild(drop);
  }
});
