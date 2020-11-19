$(document).ready(() => {

  const escape =  str => {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
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
        <p>${escape(data.content.text)}</p>
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
      if (typeof tweet === 'object') {
        const $tweet = createTweetElement(tweet)
        $('#tweets-container').prepend($tweet);
      }
    }
  }
  
  const submitPost = (event, action)=> {
    event.preventDefault();
    const tweetVal = $('textarea').val();
    let errorMsg;
    let $error;

    if (tweetVal.length > 140) {
      $('.empty-tweet').slideUp();
      $('.long-tweet').slideDown();
    } else if (tweetVal === null || tweetVal === '') {
      $('.long-tweet').slideUp();
      $('.empty-tweet').slideDown();
    } else {
      $('.long-tweet').slideUp();
      $('.empty-tweet').slideUp();
      $
      .ajax({
        url: '/tweets',
        method: 'POST',
        data: $('form').serialize()
      })
      .then(res => action(res))
    }
  }

  const loadTweets = () => {
    $
    .ajax({
      url: '/tweets',
      method: 'GET'
    })
    .then((res) => {
      $('#tweets-container').empty();
      $('#tweet-text').val('');
      renderTweets(res);
    })
  }
  

  $('form').on('submit', event => {
    submitPost(event, loadTweets)
  })

})