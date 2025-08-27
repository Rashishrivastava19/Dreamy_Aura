const Output = document.getElementById("Output");

document.getElementById("visualizeBtn").addEventListener("click", () => {
  let text = document.getElementById("dreamInput").value.toLowerCase();

  // Reset
  Output.className = "mt-4";
  Output.textContent = "";

  // Keyword matching
  let skykewords = ["sky", "fly", "wind", "cloud","sun","moon","aeroplane","airplane","bird","galaxy","wings","heaven","Flight"," Clouds", "Wind", "Stars","Moon", "Sun", "Rainbow", "Birds", "Space", "Galactic", "Soaring", "Drifting", "Floating", "Astronaut", "Skydiving"]
  let firekeywords = ["fire", "volcano", "heat", "hot","camfire","coal","crisp","ignite","flame","spark"]
  let waterkeywords=["water","ocean","river","lake","waves","rain","sea","drowning","swimming","unerwater","flood","waterfall","storm","tide","ice","aqua"]
   let forestkeywords =[ "trees", "mountains", "Flowers", "Grass","leaves","animals","roots","woods","jungle","green","earth","trail","learing"]
  // let forestkeywords = [ "trees", "mountains", "Flowers", "Grass", "Leaves", "Animals", "Roots"," Woods", "Jungle"," Green"," Earth", "Trail", "Clearing"," Wild"]
  if (skykewords.some(keyword => text.includes(keyword))) {
    Output.classList.add("keyword1");
    Output.textContent = "☁️ Your imagination is as vast as the clear blue sky, Let your dreams soar and touch the star!";
  }
  else if (firekeywords.some(keyword => text.includes(keyword))) {
    Output.classList.add("keyword2");
    Output.textContent = "🔥 A fiery dream full of passion and energy. You are drawn to a warm and brilliant light. Your spirit is as bright as a dancing flame!";
  }

  else if (waterkeywords.some(keyword => text.includes(keyword))) {
    Output.classList.add("keyword3");
    Output.textContent = "🌊You are diving into the depths of your emotions. A cool, calm river flows through your mind. Your feelings are like the ocean, deep and powerful. You are lost in the waves of the ocean!";
  }
  else if (forestkeywords.some(keyword => text.includes(keyword))) {
    Output.classList.add("keyword4");
    Output.textContent = "🌳You are connected to nature's peaceful heart.A mysterious forest surrounds you, full of secrets . Your dreams are growing, just like the mighty trees! ";
  }
  else {
    Output.classList.add("mystery");
    Output.textContent = "✨ A dream full of mysteries!";
  }
});

function showAquariusInfo(event) {
  event.preventDefault();
  const readElement =event.target;
  readElement.textContent="Special Qualities: Innovative, Independent, Humanitarian    Beneficial Colors: Electric Blue💙, Violet💜   Lucky Numbers: 4, 7, 13"
   readElement.onclick=null
}



function showAriesInfo(event) {
  event.preventDefault();
  const readElement =event.target;
  readElement.textContent=" Special Qualities: Energetic, Courageous and Ambitious   Beneficial Colors:Red❤, White🤍, Yellow💛   Lucky Numbers: 9, 18, 27"
   readElement.onclick=null
}
function showCancerInfo(event) {
  event.preventDefault();
  const readElement =event.target;
  readElement.textContent="Special Qualities: Nurturing, Emotional, Intuitive   Beneficial Colors: Silver, White🤍, Cream   Lucky Numbers: 2, 11, 20"
   readElement.onclick=null
}
function showCapricornInfo(event) {
  event.preventDefault();
  const readElement =event.target;
  readElement.textContent="Special Qualities: Disciplined, Patient, Responsible   Beneficial Colors: Black🖤, Gray, Brown🤎    Lucky Numbers: 8, 17, 26"
   readElement.onclick=null
}
function showGeminiInfo(event) {
  event.preventDefault();
  const readElement =event.target;
  readElement.textContent="Special Qualities: Adaptable, Curious, Communicative   Beneficial Colors: Yellow💛, Green💚, Orange🧡    Lucky Numbers: 5, 14, 23"
   readElement.onclick=null
}
function showLeoInfo(event) {
  event.preventDefault();
  const readElement =event.target;
  readElement.textContent="Special Qualities: Confident, Generous, Creative   Beneficial Colors: Gold, Orange🧡, Red❤   Lucky Numbers: 1, 10, 19"
   readElement.onclick=null
}
function showLibraInfo(event) {
  event.preventDefault();
  const readElement =event.target;
  readElement.textContent="Special Qualities: Diplomatic, Charming, Fair-minded   Beneficial Colors: Pink💗, Blue💙, Green💚    Lucky Numbers: 6, 15, 24"
   readElement.onclick=null
}function showPiscesInfo(event) {
  event.preventDefault();
  const readElement =event.target;
  readElement.textContent="Special Qualities: Compassionate, Artistic, Intuitive    Beneficial Colors: Sea Green💚, Light Blue💙, 💜    Lucky Numbers: 3, 12, 21"
   readElement.onclick=null
}function showSagittariusInfo(event) {
  event.preventDefault();
  const readElement =event.target;
  readElement.textContent="Special Qualities: Optimistic, Adventurous, Philosophical   Beneficial Colors: Purple💜, Blue💙, Red❤     Lucky Numbers: 3, 12, 21"
   readElement.onclick=null
}
function showScorpioInfo(event) {
  event.preventDefault();
  const readElement =event.target;
  readElement.textContent="Special Qualities: Passionate, Resourceful, Determined    Beneficial Colors: Black🖤, Red❤, Maroon    Lucky Numbers: 9, 18, 27"
   readElement.onclick=null
}function showTaurasInfo(event) {
  event.preventDefault();
  const readElement =event.target;
  readElement.textContent="Special Qualities: Reliable, Patient and Practical   Beneficial Colors: Green💚, Pink💗, White🤍   Lucky Numbers: 6, 15, 24"
   readElement.onclick=null
}function showVirgoInfo(event) {
  event.preventDefault();
  const readElement =event.target;
  readElement.textContent="Special Qualities: Practical, Detail-oriented, Analytical   Beneficial Colors: Green💚, Brown🤎, White🤍   Lucky Numbers: 5, 14, 23"
   readElement.onclick=null
}