const keys = document.querySelectorAll('.key');
const offButtonMouse = document.querySelector('.off-mouse');
const offButtonKey = document.querySelector('.off-key');



//ffor help
// help.addEventListener('click', function() {
    
// })


//set initial sound true
let mouse = true; 
let key = true;

// Toggle sound on/off when the "Off MouseOver" button is clicked
offButtonMouse.addEventListener('click', function() {
    mouse = !mouse;
    offButtonMouse.classList.toggle('offm', !mouse);
    console.log(`Sound is ${mouse ? 'enabled' : 'disabled'} for mouseover`);
  });
 


//mouseover
keys.forEach(key => {
  key.addEventListener('mouseover', function() {
    if (mouse) {
      const keyText = key.textContent.toLowerCase();
      console.log(`Key "${keyText}" clicked`);
      playsound(keyText);
    }
  });
});



//keydown
document.addEventListener('keydown', function(event) {
    if (key) {
      const keyText = event.key.toLowerCase();
      console.log(`Key "${keyText}" pressed`);
      playsound(keyText);
    }
})



// Toggle sound on/off when the "Off keydown" button is clicked
offButtonKey.addEventListener('click', function() {
    key = !key;
    console.log(`Sound is ${key ? 'enabled' : 'disabled'} for keydown`);
    offButtonKey.classList.toggle('offm', !key);
    console.log("toggle m");
});
   


//playing sound
function playsound(key) {
  const audio = new Audio(`./audios/${key}.wav`);
  audio.play().catch(error => {
    console.error('Audio play error:', error);
  });
}
