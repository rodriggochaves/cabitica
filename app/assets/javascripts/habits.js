var upvoteHabit = function(upvoteHabitElem) {    
  var id = $(upvoteHabitElem).closest('.habit__callout').attr("id");
  var habitId = extractIdNumber(id);
  console.log("Sent upvote for habit " + habitId);
  // $.ajax({
  //   url: '/upvote_habit/' + habitId,
  //   type: 'GET',
  //   success: function(resp) {
  //     console.log("upvoted habit " + habitId);
  //   },
  //   error: function(err) {
  //     console.log("Error upvoting habit: ");
  //     console.log(err);
  //   }
  // });
}

var downvoteHabit = function(downvoteHabitElem) {
  var id = $(downvoteHabitElem).closest('.habit__callout').attr("id");
  var habitId = extractIdNumber(id);
  console.log("Sent downvote for habit " + habitId);
  // $.ajax({
  //   url: '/downvote_habit/' + habitId,
  //   type: 'GET',
  //   success: function(resp) {
  //     console.log("downvote habit " + habitId);
  //   },
  //   error: function(err) {
  //     console.log("Error downvoting habit: ");
  //     console.log(err);
  //   }
  // });
}

var removeHabit = function(removeHabitElem){
  var id = $(removeHabitElem).closest('.habit__callout').attr("id");
  var habitId = extractIdNumber(id);
  $.ajax({
    url: '/habits/' + habitId,
    type: 'DELETE',
    success: function(resp) {
      $("#habit_" + habitId).remove();
    },
    error: function(err) {
      console.log("Error removing habit: " + err)
    }
  });
}

$(document).ready(function() {
  $('.habit__add').click(function() {
    var description = $('.habit__description').val();

    $.ajax({
      url: "/habits.js",
      type: "POST",
      data: {
        description: description
      },
      dataType: "script",
      success: function(resp) {
        console.log("Success adding habit");
      },
      error: function(er) {
        console.log(er);
      }
    });
  });
  $('.habits__list')
    .on("click", ".habit__plus", function(){
      upvoteHabit(this);
    }).on("click", ".habit__minus", function(){
      downvoteHabit(this);
    }).on("click", ".close-button", function(){
      removeHabit(this);
    });
});
