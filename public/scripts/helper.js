const escape =  str => {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

const createTweetElement = (tweet) => {
  let $tweet = $(`
    <article class="tweet">
    <header>
      <div>
        <img class="avatar" src=${tweet.user.avatars}}>
        <p class="username">${tweet.user.name}</p>
        </div>
      <span class="tweeter-id">${tweet.user.handle}</span>
    </header>
    <div class="tweet-content">
      <p>${escape(tweet.content.text)}</p>
    </div>
    <footer>
      <p>${moment(tweet.created_at).fromNow()}</p>
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


const renderTweets = (tweets, creationMethod) => {
  for (const tweet of tweets) {
    if (typeof tweet === 'object') {
      const $tweet = creationMethod(tweet)
      $('#tweets-container').prepend($tweet);
    }
  }
}

const submitPost = (event, loadTweetMethod)=> {
  event.preventDefault();
  const tweetVal = $('textarea').val();

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
    .then(res => loadTweetMethod(res))
  }
}

const loadTweets = (data, renderMethod) => {
  $
  .ajax({
    url: '/tweets',
    method: 'GET'
  })
  .then((data) => {
    $('#tweets-container').empty();
    $('#tweet-text').val('');
    $('.counter').val(140);
    renderMethod(data);
  })
}

const expandTextareaBtn = () => {
  if ($('button').attr('class') === 'not-clicked') {
    $('.new-tweet').slideDown();
    $('button').addClass('clicked');
    $('button').removeClass('not-clicked');
  } else {
    $('.new-tweet').slideUp();
    $('button').addClass('not-clicked');
    $('button').removeClass('clicked');
  }
}