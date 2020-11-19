// counts the characters in the textarea and replaces the text with the remainign characters left to type
$(document).ready(() => {
  
  $('#tweet-text').on('input', function() {
    const text = 140 - $(this).val().length;
    const counter = $(this).parent().find(".counter");

    $(counter).val(text);

    if (text < 0) {
      $(counter).addClass('counter-red');
    } else {
      $(counter).removeClass('counter-red');
    }
  })

});