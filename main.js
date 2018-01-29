'use strict';
console.log("main.js");

function HappyBox(value, color) {
   this.value = value;
   this.color = color;
   this.container = `<div class="${this.color}" onclick=youClicked(${this.value})>${this.value}</div>`;

}

function youClicked(value){
   console.log("you clicked from youClicked", value);
}

let boxArray = [];
let dom = document.getElementById("boxes");

function makeBoxes() {
   let bkgColors = ["one", "two", "three"];
   for (var i = 0; i < 10; i++) {
      // make the happy boxes and put into array
      boxArray.push(new HappyBox(i + 1, bkgColors[i%3]));
   }
   boxArray.forEach((item) => {
      // display array items on screen
      dom.innerHTML += item.container;
   });
}

makeBoxes();

// function test() {
//
// }