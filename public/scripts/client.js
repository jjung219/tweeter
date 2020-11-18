$(document).ready(() => {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
 }
  
  const renderTweets = function () {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
  }

  const createTweetElement = function (data) {
    //return a tweet <article> element containing the entire HTML structure of the tweet
    let $tweet = $(`
      <article class="tweet">
      <header>
        <div>
          <img src=${data.user.avatars}}>
          <p class="username">${data.user.name}</p>
          </div>
        <span class="tweeter-id">${data.user.handle}</span>
      </header>
      <div class="tweet-content">
        <p>${data.content.text}</p>
      </div>
      <footer>
        <p>${moment(data.created_at).fromNow()}</p>
        <div class="logos">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    </article>
    `);
  

    return $tweet;
  }

  const $tweet = createTweetElement(tweetData);
  
  
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

})
