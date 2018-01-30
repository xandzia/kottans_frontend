"use strict;";

Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = "0" + s;
  }
  return s;
};

{
  const clock = document.getElementById("clock");

  function updateClock(clock) {
    var d = new Date(),
      h = d.getHours().pad(),
      m = d.getMinutes().pad(),
      s = d.getSeconds().pad(),
      time = `${h}:${m}:${s}`;
    clock.innerHTML = time;
  }

  window.setInterval(() => {
    updateClock(clock);
  }, 500);
}