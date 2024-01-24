const homeButton = document.getElementById('home-button');

homeButton.addEventListener('click', () => {
  // Play the sound effect first
  playHomeButtonSound();

  // Then reload the page with a slight delay
  setTimeout(() => window.location.reload(), 100);
});

function playHomeButtonSound() {
  // Create your sound element and play the effect here
  // You can use libraries like Howler.js or SoundJS for advanced sounds
  const sound = new Audio('path/to/sound.mp3');
  sound.play();
}
