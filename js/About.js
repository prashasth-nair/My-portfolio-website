document.querySelector('#scroll-button').addEventListener('click', function() {
    document.querySelector('.Github_stats').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  });
