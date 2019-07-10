// types out letters from the message array
function printLetters(target, arr, typerForwardSpeed = 40, typerEraseSpeed = 30,  newMessageDelay = 1000, messageRemain = 3000) {

  let typerEl = document.getElementById(target); //element id to execute on
  let forwardAnimation = null; //add to the appropriate scope
  let backwardAnimation = null; //add to the appropriate scope
  let messageIndex = 0; //sets the message array counter at 0;
  let messageArr = arr;

  //go back through the string and erase it, one letter at a time
  function removeLetters(el) {
    let strLength = el.innerHTML.length; //gets the current string's length

    function eraseLoop() {
      //if the string isn't gone

      backwardAnimation = setInterval(function () {
        if (strLength > 0) {
          let newStr = el.innerHTML.slice(0, -1);
          el.innerHTML = newStr;
          strLength = el.innerHTML.length;
        }
        //if we're at the end
        else {
          clearInterval(backwardAnimation);
          setTimeout(function () {
            messageStepper(messageIndex)
          }, newMessageDelay);
        }
      }, typerEraseSpeed);
    }

    eraseLoop();
  }

  //handles the write animation
  function addLetters(el, strIndex) {
    let charCount = 0;
    let strLength = messageArr[strIndex].length; //stores the length of the current string

    //console.log(strLength);

    forwardAnimation = setInterval(function () {
      //if we hit the end of the string, run the removeLetters() functions
      if (charCount >= strLength) {
        setTimeout(function () {
          removeLetters(typerEl)
        }, messageRemain); //run removeLetters after 3 seconds
        clearInterval(forwardAnimation); //remove this interval
      }

      //add letters from the string at a set interval
      else {
        el.innerHTML += messageArr[strIndex][charCount];
        charCount++
      }
    }, typerForwardSpeed);
  }

  //steps through message array
  function messageStepper(messageCount) {
    //if there's still messages in the array
    if (messageCount < messageArr.length) {
      addLetters(typerEl, messageCount);
      messageIndex++; //add one to the message counter
    } 
    
    //otherwise bring us back to the beginning of the array
    else {
      messageIndex = 0;
      messageStepper(messageIndex);
    }
  }

  messageStepper(messageIndex); //run the message Stepper
}
