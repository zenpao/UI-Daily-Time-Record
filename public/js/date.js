document.addEventListener('DOMContentLoaded', () => {
  setInterval(function() {
    var date = new Date();
    var dateOnly = date.toLocaleDateString("en-US", {timeZone: "Asia/Manila"});
    document.getElementById("show-date").innerHTML = dateOnly;
  }, 1000);
});