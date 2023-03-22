// Wait for the DOM to be loaded
document.addEventListener("DOMContentLoaded", function() {

    // Show the card
    document.getElementById("arr-card").style.display = "flex";
    document.getElementById("animated-text").style.display = "none";
  
    // Set a timeout to hide the card after 1 minute (60,000 milliseconds)
    setTimeout(function() {
      document.getElementById("arr-card").style.display = "none";
      document.getElementById("animated-text").style.display = "block";
    }, 1600);
  
  });
  
/* .animated-text  */


  
