$(document).ready(() => {
  const renderAndCreateTweetsHTML = tweets => renderTweets(tweets, createTweetElement); 
  const loadAndCreateHTML = () => loadTweets(renderAndCreateTweetsHTML);
  loadAndCreateHTML()

  $('form').on('submit', event => {
    submitPost(event, loadAndCreateHTML);
  })

  $('#new-tweet-btn').on('click', () => {
    expandTextareaBtn();
  })
})