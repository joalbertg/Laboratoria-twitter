window.onload = begin;

function begin() {
  var tweetArea = document.getElementById('tweet-area');
  var tweetBtn = document.getElementById('tweet-btn');
  var messages = document.getElementById('messages');

  tweetBtn.addEventListener('click', message);

  function message(event) {
    console.log(event.target.id);
    event.preventDefault();

    var div = document.createElement('div');
    var tweet = document.createElement('span');

    tweet.textContent = tweetArea.value;
    tweet.classList.add('tweet');

    div.classList.add('nuevo-mensaje');
    tweetArea.value = '';

    div.appendChild(tweet);
    messages.insertBefore(div, messages.firstElementChild);
  }
}