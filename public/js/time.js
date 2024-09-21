document.addEventListener('DOMContentLoaded', () => {
  setInterval(function() {
    var date = new Date();
    var time = date.toLocaleTimeString("en-US", {timeZone: "Asia/Manila"});
    document.getElementById("show-time").innerHTML = time;
  }, 1000);
});