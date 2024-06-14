/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";

window.onload = function() {
  //write your code here
  let who = [
    "The turtle",
    "My dad",
    "The policeman",
    "My dog",
    "My cousin's horse"
  ];
  let action = ["hit", "kicked", "smashed", "broke", "stole"];
  let what = ["my computer", "my telephone", "my bike", "the keys"];
  let when = [
    "while I was doing yoga",
    "when I was taking a shower",
    "when I was in bed",
    "before the work",
    "while I was food shopping"
  ];
  let rand_who = Math.floor(Math.random() * who.length);
  let rand_action = Math.floor(Math.random() * action.length);
  let rand_what = Math.floor(Math.random() * what.length);
  let rand_when = Math.floor(Math.random() * when.length);
  //return who[i] + action[i] + what[i] + when[i];
  document.getElementById("excuse").innerHTML =
    "<p>" +
    who[rand_who] +
    " " +
    action[rand_action] +
    " " +
    what[rand_what] +
    " " +
    when[rand_when] +
    "</p>";

  const reload = document.getElementById("reload");

  reload.addEventListener("click", _ => {
    location.reload();
  });
};
//for (let i = who; i < who.length; i++) {}
console.log("OMG! You will not believe me but...");
