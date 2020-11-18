$(document).ready(() => {

  const dataArr = [
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

  const createTweetElement = (data) => {
    let $tweet = $(`
      <article class="tweet">
      <header>
        <div>
          <img class="avatar" src=${data.user.avatars}}>
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

  const renderTweets = (tweets) => {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet)
      $('#tweets-container').append($tweet);
    }
  }

  renderTweets(dataArr);
})
