var startTime = new Date().getTime();

setInterval(function() {
    var date = new Date();
    var timeDiff = date.getTime() - startTime;

    var h = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((timeDiff % (1000 * 60)) / 1000);
  
    var timer_h = (h < 10) ? ('0' + h) : h;
    var timer_m = (m < 10) ? ('0' + m) : m;
    var timer_s = (s < 10) ? ('0' + s) : s;
  
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    var time_h = (h < 10) ? ('0' + h) : h;
    var time_m = (m < 10) ? ('0' + m) : m;
    var time_s = (s < 10) ? ('0' + s) : s;

    $('#time').html('Time: ' + time_h + ':' + time_m + ':' + time_s);
    $('#timer').html('Timer: ' + timer_h + ':' + timer_m + ':' + timer_s);
  }, 1000);
