window.onscroll = function() {
    // Detect scroll position
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
    // Calculate the transition point between the images
    var transitionPoint = document.getElementById('page1').offsetHeight;
  
    // Compare the scroll position to the transition point to swap between the images
    if (scrollPosition >= transitionPoint) {
      document.getElementById('page1').style.backgroundAttachment = 'scroll';
      document.getElementById('page2').style.backgroundAttachment = 'fixed';
    } else {
      document.getElementById('page1').style.backgroundAttachment = 'fixed';
      document.getElementById('page2').style.backgroundAttachment = 'scroll';
    }
  };
  