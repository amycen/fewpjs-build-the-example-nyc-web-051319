// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// Your JavaScript code goes here!
//const liked = document.querySelectorAll(".activated-heart")
const hearts = document.querySelectorAll(".like-glyph")
const modal = document.querySelector("#modal")
const modalMsg = document.querySelector("#modal-message")

hearts.forEach(function(element) {
  element.addEventListener('click', function (e) {mimicServerCall()
  .then(function (response) {
    element.textContent = changeHeart(element.textContent)

    if (element.textContent === FULL_HEART){
    element.className += " activated-heart"
    }
    else {
      element.setAttribute("class", "like-glyph")
    }
  })
  .catch(function (error) {
    setTimeout(function () {
    modal.className = ""
    modalMsg.innerText = error
    modal.className = "hidden"
    }, 5000)
  })
})
})



function changeHeart(currHeart) {
  if (currHeart === EMPTY_HEART){
    return FULL_HEART
  }
  else {
    return EMPTY_HEART
  }
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
