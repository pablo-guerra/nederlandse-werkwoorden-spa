//initialize verb index variables
console.log(data);
const verb_total_length = Object.keys(data).length;
let current_verb_index = verb_total_length-1;
console.log(`Number of verbs loaded = ${verb_total_length}`);
console.log('Inf number 1 = ' + data[current_verb_index][0]);
//function to update the displayed text
function updateDisplayedVerbs(verb_index = current_verb_index) {
  document.getElementById("text_inf").innerHTML = data[current_verb_index][0];
  document.getElementById("text_imp").innerHTML = data[current_verb_index][1];
  document.getElementById("text_per").innerHTML = data[current_verb_index][2];
  document.getElementById("text_eng").innerHTML = data[current_verb_index][3];
};
// initialize slider variable
let current_slider_state = false;
function getRandomInt(min = 0, max = (verb_total_length - 1)) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Initialize variables for making lines visible/invisible
let btn_english_state = true; // 0 means invisible
let btn_conjugate_state = true; // 0 means invisible
console.log(`English button state = ${btn_english_state}`);
console.log(`Conjugate button state = ${btn_conjugate_state}`);
// function to hide the tiles
function hideTiles() {
  btn_english_state = false;
  document.getElementById("english-translation").className = "invisible";
  btn_conjugate_state = false;
  document.getElementById("imperfectum").className = "invisible";
  document.getElementById("perfectum").className = "invisible";
};
//slider switch
document.getElementById("mode-switch").addEventListener("click", function(){
  if(current_slider_state === false) {
    current_slider_state = true;
    document.getElementById("app-mode-text").innerHTML = 'Willekeurig';
  } else {
    current_slider_state = false;
    document.getElementById("app-mode-text").innerHTML = 'Alfabetisch';
  };});
//Switch words back and forth:
document.getElementById("go-left").addEventListener("click", function(){
  console.log(`Current verb index is = ${current_verb_index}`);
  if (current_slider_state === true) {
    current_verb_index = getRandomInt();
  } else if (current_verb_index <0 || current_verb_index >verb_total_length-1) {
    current_verb_index = 0;
  } else if (current_verb_index === 0) {
    current_verb_index = verb_total_length - 1;
  } else {
    current_verb_index = current_verb_index - 1;
  };
  updateDisplayedVerbs();
  console.log(`New verb index is = ${current_verb_index}`);
  hideTiles();
});
document.getElementById("go-right").addEventListener("click", function(){
  console.log(`Current verb index is = ${current_verb_index}`);
  if (current_slider_state === true) {
    current_verb_index = getRandomInt();
  } else if (current_verb_index <0 || current_verb_index >verb_total_length-1) {
    current_verb_index = 0;
  } else if (current_verb_index == (verb_total_length-1)) {
    current_verb_index = 0;
  } else {
    current_verb_index = current_verb_index + 1;
  };
  updateDisplayedVerbs();
  console.log(`New verb index is = ${current_verb_index}`);
  hideTiles();
});
//Switch visibility of English translation
document.getElementById("switch-english").addEventListener("click", function(){
  if(btn_english_state === false) {
    console.log(`[click] English button state is = ${btn_english_state}`);
    btn_english_state = true;
    document.getElementById("english-translation").className = "visible";
    console.log(`NEW english button state = ${btn_english_state}`);
  } else {
    console.log(`[click] English button state is = ${btn_english_state}`);
    btn_english_state = false;
    document.getElementById("english-translation").className = "invisible";
    console.log(`NEW english button state = ${btn_english_state}`);
  };});
//Switch visibility of conjugation
document.getElementById("switch-conjugation").addEventListener("click", function(){
  if(btn_conjugate_state === false) {
    console.log(`[click] conjugation button state is = ${btn_conjugate_state}`);
    btn_conjugate_state = true;
    document.getElementById("imperfectum").className = "visible";
    document.getElementById("perfectum").className = "visible";
    console.log(`NEW conjugation button state = ${btn_conjugate_state}`);
  } else {
    console.log(`[click] conjugation button state is = ${btn_conjugate_state}`);

    btn_conjugate_state = false;
    document.getElementById("imperfectum").className = "invisible";
    document.getElementById("perfectum").className = "invisible";
    console.log(`NEW conjugation button state = ${btn_conjugate_state}`);
  };});
