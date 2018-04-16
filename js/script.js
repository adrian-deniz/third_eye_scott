var i = 0;

function navToggle() {
  var navlinks = document.getElementById("navlinks");
  var biobtn = document.getElementById("z");

  if(i == 0) {
    // navlinks.setAttribute("style", "display: flex;");
    navlinks.style.visibility = "visible";
    biobtn.style.visibility = "hidden";
    i++;
  }
  else {
    // navlinks.removeAttribute("style", "display: none;");
    navlinks.style.visibility= "hidden";
    biobtn.style.visibility = "visible";
    i--;
  }
}
