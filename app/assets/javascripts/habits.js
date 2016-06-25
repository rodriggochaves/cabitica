var upvoteHabit = function(upvoteHabitElem) {    
  var id = $(upvoteHabitElem).closest('.habit__callout').attr("id");
  var habitId = extractIdNumber(id);
  console.log("Sent upvote for habit " + habitId);
  $.ajax({
    url: '/upvote_habit/' + habitId,
    type: 'GET',
    success: function(resp) {
      console.log("upvoted habit " + habitId);
    },
    error: function(err) {
      console.log("Error upvoting habit: ");
      console.log(err);
    }
  });
}

var downvoteHabit = function(downvoteHabitElem) {
  var id = $(downvoteHabitElem).closest('.habit__callout').attr("id");
  var habitId = extractIdNumber(id);
  console.log("Sent downvote for habit " + habitId);
  $.ajax({
    url: '/downvote_habit/' + habitId,
    type: 'GET',
    success: function(resp) {
      console.log("downvote habit " + habitId);
    },
    error: function(err) {
      console.log("Error downvoting habit: ");
      console.log(err);
    }
  });
}

$(document).ready(function() {
  $('.habits__list')
    .on("click", ".habits__plus", function(){
      upvoteHabit(this);
    }).on("click", ".habits__minus", function(){
      downvoteHabit(this);
    }).on("click", ".close-button", function(){
      var id = $(this).closest('.habit__callout').attr("id");
      var habitId = extractIdNumber(id);
      removeElem("habits", habitId);
    });
});
