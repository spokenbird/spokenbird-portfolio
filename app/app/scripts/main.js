// Sets the Load Image Button
const loadImageBtn = document.querySelector('.load-image');

// Event listener to trigger Load Image Button
loadImageBtn.addEventListener('click', function(evt) {
  // Prevents page from reloading
  evt.preventDefault();
  // Get image url from input
  const imageURL = document.querySelector('.image-url').value;
  // Variable to set an existing img
  const existingImg = document.querySelector('#preview-img');
  // Set src to input value
  existingImg.src = imageURL;
  });

// Set text input variables for collecting user input
const topTextInput = document.querySelector('#top-text-input');
const bottomTextInput = document.querySelector('#bottom-text-input');


// Set text div variables
const topText = document.querySelector('.top-text');
const bottomText = document.querySelector('.bottom-text');

// Send user input text to corresponding text-input div
topTextInput.oninput = () => {
  topText.innerHTML = topTextInput.value;
}
bottomTextInput.oninput = () => {
  bottomText.textContent = bottomTextInput.value;
}

// Set div to copy to variable
const memeContainer = document.querySelector('.meme-container');
// Set form to submit variable
const memeForm = document.querySelector('#meme-form');
// Event listener to trigger make meme button
let memeCounter = 1;

memeForm.addEventListener('submit', function(e) {
  e.preventDefault();
  // Make a copy the img-view element and its child nodes
  const imgToCopy = document.querySelector('.img-view');
  const imgCopy = imgToCopy.cloneNode(true);
  imgCopy.removeAttribute('id');
  imgCopy.className = `meme-num-${memeCounter}`;
  memeContainer.appendChild(imgCopy);
  memeContainer.getElementsByTagName('img')[0].removeAttribute('id')
  memeCounter++;
});



memeContainer.addEventListener('mouseover', function(event) {
  const meme = event.target.parentElement;
  meme.addEventListener('click', function(event) {
    memeContainer.removeChild(meme);
  });
});
