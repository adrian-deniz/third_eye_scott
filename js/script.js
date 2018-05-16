var i = 0;

function navToggle() {
  var navlinks = document.getElementById("navlinks");
  var biobtn = document.getElementById("z");

if(i == 0) {
    navlinks.style.visibility = "visible";
    if(biobtn) {
    biobtn.style.visibility = "hidden";
  }
    i++;
  }
  else {
    navlinks.style.visibility= "hidden";
    if(biobtn) {
      biobtn.style.visibility = "visible";
    }
    i--;
  }
}
