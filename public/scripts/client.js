$(document).ready(() => {
  const renderAndCreateTweetsHTML = tweets => renderTweets(tweets, createTweetElement);
  const loadAndCreateHTML = () => loadTweets(renderAndCreateTweetsHTML);
  //Load the existing tweets when the app loads
  loadAndCreateHTML();

  $('form').on('submit', event => {
    submitPost(event, loadAndCreateHTML);
  });

  $('#compose').on('click', () => {
    expandTextareaBtn();
  });

});