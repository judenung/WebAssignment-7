window.onload = function () {
  var mybutton = document.getElementById("myBtn");
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  document.getElementById("copyrightFooter").innerHTML =
    new Date().getFullYear();
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
