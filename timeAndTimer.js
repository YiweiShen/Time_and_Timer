setInterval(function() {
    var now = new Date().getTime();
    var distance = now - store.startTime;
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    hours = (hours < 10) ? ('0' + hours) : hours;
    minutes = (minutes < 10) ? ('0' + minutes) : minutes;
    seconds = (seconds < 10) ? ('0' + seconds) : seconds;
  
    $('#timer').html('Timer: ' + hours + ':' + minutes + ':' + seconds);
  }, 1000);

  