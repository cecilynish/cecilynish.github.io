var range = document.getElementById("range");
var one= document.getElementById("one");
var two= document.getElementById("two");
var three= document.getElementById("three");
var four= document.getElementById("four");
var five= document.getElementById("five");
var six= document.getElementById("six");
var seven= document.getElementById("seven");



range.oninput = function hide() {
  var val = range.value;
    if (val<1) {
    one.classList.remove("hidden")
    two.classList.add("hidden")
    three.classList.add("hidden")
    four.classList.add("hidden")
    five.classList.add("hidden")
    six.classList.add("hidden")
    seven.classList.add("hidden")
    eight.classList.add("hidden")
    nine.classList.add("hidden")
    ten.classList.add("hidden")
    eleven.classList.add("hidden")
    twelve.classList.add("hidden")
  }
  else if (val<2) {
    one.classList.add("hidden")
    two.classList.remove("hidden")
    three.classList.add("hidden")
    four.classList.add("hidden")
    five.classList.add("hidden")
    six.classList.add("hidden")
    seven.classList.add("hidden")
    eight.classList.add("hidden")
    nine.classList.add("hidden")
    ten.classList.add("hidden")
    eleven.classList.add("hidden")
    twelve.classList.add("hidden")
  }
    else if (val<3) {
    one.classList.add("hidden")
    two.classList.add("hidden")
    three.classList.remove("hidden")
    four.classList.add("hidden")
    five.classList.add("hidden")
    six.classList.add("hidden")
    seven.classList.add("hidden")
    eight.classList.add("hidden")
    nine.classList.add("hidden")
    ten.classList.add("hidden")
    eleven.classList.add("hidden")
    twelve.classList.add("hidden")
  }
    else if (val<4) {
    one.classList.add("hidden")
    two.classList.add("hidden")
    three.classList.add("hidden")
    four.classList.remove("hidden")
    five.classList.add("hidden")
    six.classList.add("hidden")
    seven.classList.add("hidden")
    eight.classList.add("hidden")
    nine.classList.add("hidden")
    ten.classList.add("hidden")
    eleven.classList.add("hidden")
    twelve.classList.add("hidden")
  }
    else if (val<5) {
    one.classList.add("hidden")
    two.classList.add("hidden")
    three.classList.add("hidden")
    four.classList.add("hidden")
    five.classList.remove("hidden")
    six.classList.add("hidden")
    seven.classList.add("hidden")
    eight.classList.add("hidden")
    nine.classList.add("hidden")
    ten.classList.add("hidden")
    eleven.classList.add("hidden")
    twelve.classList.add("hidden")
  }
    else if (val<6) {
    one.classList.add("hidden")
    two.classList.add("hidden")
    three.classList.add("hidden")
    four.classList.add("hidden")
    five.classList.add("hidden")
    six.classList.remove("hidden")
    seven.classList.add("hidden")
    eight.classList.add("hidden")
    nine.classList.add("hidden")
    ten.classList.add("hidden")
    eleven.classList.add("hidden")
    twelve.classList.add("hidden")
  }
    else if (val<7) {
    one.classList.add("hidden")
    two.classList.add("hidden")
    three.classList.add("hidden")
    four.classList.add("hidden")
    five.classList.add("hidden")
    six.classList.add("hidden")
    seven.classList.remove("hidden")
    eight.classList.add("hidden")
    nine.classList.add("hidden")
    ten.classList.add("hidden")
    eleven.classList.add("hidden")
    twelve.classList.add("hidden")
  }
    else if (val<8) {
    one.classList.add("hidden")
    two.classList.add("hidden")
    three.classList.add("hidden")
    four.classList.add("hidden")
    five.classList.add("hidden")
    six.classList.add("hidden")
    seven.classList.add("hidden")
    eight.classList.remove("hidden")
    nine.classList.add("hidden")
    ten.classList.add("hidden")
    eleven.classList.add("hidden")
    twelve.classList.add("hidden")
  }
    else if (val<9) {
    one.classList.add("hidden")
    two.classList.add("hidden")
    three.classList.add("hidden")
    four.classList.add("hidden")
    five.classList.add("hidden")
    six.classList.add("hidden")
    seven.classList.add("hidden")
    eight.classList.add("hidden")
    nine.classList.remove("hidden")
    ten.classList.add("hidden")
    eleven.classList.add("hidden")
    twelve.classList.add("hidden")
  }
    else if (val<10) {
    one.classList.add("hidden")
    two.classList.add("hidden")
    three.classList.add("hidden")
    four.classList.add("hidden")
    five.classList.add("hidden")
    six.classList.add("hidden")
    seven.classList.add("hidden")
    eight.classList.add("hidden")
    nine.classList.add("hidden")
    ten.classList.remove("hidden")
    eleven.classList.add("hidden")
    twelve.classList.add("hidden")
  }
    else if (val<11) {
    one.classList.add("hidden")
    two.classList.add("hidden")
    three.classList.add("hidden")
    four.classList.add("hidden")
    five.classList.add("hidden")
    six.classList.add("hidden")
    seven.classList.add("hidden")
    eight.classList.add("hidden")
    nine.classList.add("hidden")
    ten.classList.add("hidden")
    eleven.classList.remove("hidden")
    twelve.classList.add("hidden")
  }
    else if (val<12) {
    one.classList.add("hidden")
    two.classList.add("hidden")
    three.classList.add("hidden")
    four.classList.add("hidden")
    five.classList.add("hidden")
    six.classList.add("hidden")
    seven.classList.add("hidden")
    eight.classList.add("hidden")
    nine.classList.add("hidden")
    ten.classList.add("hidden")
    eleven.classList.add("hidden")
    twelve.classList.remove("hidden")
  }
  }
