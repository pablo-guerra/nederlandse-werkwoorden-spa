//initialize verb index variables
let data = data_short;
// console.log(data);
let verb_total_length = Object.keys(data).length;
let current_verb_index = verb_total_length-1;
// console.log(`Number of verbs loaded = ${verb_total_length}`);
// console.log('Inf number 1 = ' + data[current_verb_index][0]);
//slider switch swap nl - eng modes
let slider_ennl_state = false;
document.getElementById("switch-mode-ennl").addEventListener("click", function(){
  if(slider_ennl_state === false) {
    slider_ennl_state = true;
  } else {
    slider_ennl_state = false;
  };});
//function to update the displayed text
function updateDisplayedVerbs(verb_index = current_verb_index) {
  if(slider_ennl_state === false) {
    document.getElementById("text_inf").innerHTML = data[current_verb_index][0];
    document.getElementById("text_imp").innerHTML = data[current_verb_index][1];
    document.getElementById("text_per").innerHTML = data[current_verb_index][2];
    document.getElementById("text_eng").innerHTML = data[current_verb_index][3];
  } else {
    document.getElementById("text_inf").innerHTML = data[current_verb_index][3];
    document.getElementById("text_imp").innerHTML = data[current_verb_index][1];
    document.getElementById("text_per").innerHTML = data[current_verb_index][2];
    document.getElementById("text_eng").innerHTML = data[current_verb_index][0];
  }

};
// slider order variable
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
//slider switch conjugation
let slider_conj_state = true;
document.getElementById("switch-mode-conj").addEventListener("click", function(){
  if(slider_conj_state === false) {
    slider_conj_state = true;
    document.getElementById("conj-mode-text").innerHTML = 'Knowledge test: hide conjugation of new verbs';
  } else {
    slider_conj_state = false;
    document.getElementById("conj-mode-text").innerHTML = 'Test your knowledge of conjugations?';
  };});

//slider switch translation
let slider_trans_state = true;
document.getElementById("switch-mode-trans").addEventListener("click", function(){
  if(slider_trans_state === false) {
    slider_trans_state = true;
    document.getElementById("trans-mode-text").innerHTML = 'Knowledge test: hide translation of new verbs';
  } else {
    slider_trans_state = false;
    document.getElementById("trans-mode-text").innerHTML = 'Test your knowledge of translations?';
  };});

// function to hide the tiles
function hideTiles() {
  if(slider_conj_state === true) {
    btn_conjugate_state = false;
    document.getElementById("imperfectum").className = "invisible";
    document.getElementById("perfectum").className = "invisible";
  } else {
  };
  if(slider_trans_state === true) {
    btn_english_state = false;
    document.getElementById("english-translation").className = "invisible";
  } else {
  };
  // btn_english_state = false;
  // document.getElementById("english-translation").className = "invisible";
  // btn_conjugate_state = false;
  // document.getElementById("imperfectum").className = "invisible";
  // document.getElementById("perfectum").className = "invisible";
};
//slider switch order
let slider_order_state = true;
document.getElementById("switch-mode-order").addEventListener("click", function(){
  if(slider_order_state === false) {
    slider_order_state = true;
    document.getElementById("order-mode-text").innerHTML = 'Willekeurige volgorde (Random order)';
  } else {
    slider_order_state = false;
    document.getElementById("order-mode-text").innerHTML = 'Alfabetische volgorde (Alphabetical order)';
  };});
//Switch words back and forth:
function goToLeft(){
  console.log(`Current verb index is = ${current_verb_index}`);
  if (slider_order_state === true) {
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
};
function goToRight(){
  console.log(`Current verb index is = ${current_verb_index}`);
  if (slider_order_state === true) {
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
}
document.getElementById("go-left").addEventListener("click", goToLeft);
document.getElementById("go-right").addEventListener("click", goToRight);
//Allow for right/left keyboard presses to change verbs
document.addEventListener('keydown', (e) => {
  // console.log(`key pressed = ${e.keyCode}`)
  if (e.keyCode === 37) { goToLeft();
  }
  else if (e.keyCode === 39) { goToRight();
  };
});
//slider switch amount
let slider_amount_state = false;
document.getElementById("switch-mode-amount").addEventListener("click", function(){
  if(slider_amount_state === false) {
    slider_amount_state = true;
    document.getElementById("amount-mode-text").innerHTML = '250 werkwoorden (250 verbs)';
    data = data_extended;
    verb_total_length = Object.keys(data).length;
    current_verb_index = verb_total_length-1;
  } else {
    slider_amount_state = false;
    document.getElementById("amount-mode-text").innerHTML = '100 werkwoorden (100 verbs)';
    data = data_short;
    verb_total_length = Object.keys(data).length;
    current_verb_index = verb_total_length-1;
  };});

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
