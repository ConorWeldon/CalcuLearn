document.addEventListener('DOMContentLoaded', function() {
    // Load saved progress from localStorage (or set defaults)
    let lessonsCompleted = localStorage.getItem('lessonsCompleted') || 0;
    let quizScore = localStorage.getItem('quizScore') || 0;
    
    // Update dashboard progress summary
    if(document.getElementById('lessonsCompleted')) {
      document.getElementById('lessonsCompleted').innerText = lessonsCompleted + "/5";
    }
    if(document.getElementById('quizScore')) {
      document.getElementById('quizScore').innerText = quizScore + "%";
    }
  });
  