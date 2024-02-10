document.addEventListener('DOMContentLoaded', function() {
  const backgrounds = [  'background8.png', 'background5.jpg', 'background6.jpg' , 'background9.png',];
  let currentIndex = 0;

  function changeBackground() {
      document.body.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
      currentIndex = (currentIndex + 1) % backgrounds.length;
  }


  changeBackground();

 
  setInterval(changeBackground, 4000);
});

document.getElementById('yesBtn').addEventListener('click', function() {
  // Redirect to the "Yes" page when "Yes" button is clicked
  window.location.href = 'yes.html'; // Change 'yes.html' to the actual file path of your "Yes" page
});

document.getElementById('noBtn').addEventListener('click', function() {
  // Redirect to the "No" page when "No" button is clicked
  window.location.href = 'no.html'; // Change 'no.html' to the actual file path of your "No" page
});
