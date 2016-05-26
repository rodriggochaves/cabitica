var completeHabit = function(switchHabitElem) {    
  var habitCallout = $(switchHabitElem).closest('.habit__callout');
  var id = habitCallout.attr("id");
  var habitId = extractIdNumber(id);
  var sendCompleteHabitRequest = function() {
    $.ajax({
      url: '/complete_habit/' + habitId,
      type: 'GET',
      success: function(resp) {
        console.log(resp)
      },
      error: function(err) {
        console.log(err)
      }
    });
  };
  if(switchHabitElem.checked){
    $(habitCallout).fadeOut(3000, "swing", sendCompleteHabitRequest);
  } else {
    $(habitCallout).stop().animate({opacity:'100'});
  }
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
  $('.habits__list').on("click", ".switch-input", function(){
    completeHabit(this);
  });
  $('.habits__list').on("click", ".close-button", function(){
    removeHabit(this);
  });
});
