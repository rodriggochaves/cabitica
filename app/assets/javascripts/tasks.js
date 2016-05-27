var completeTask = function(switchTaskElem) {    
  var taskCallout = $(switchTaskElem).closest('.task__callout');
  var id = taskCallout.attr("id");
  var taskId = extractIdNumber(id);
  var sendCompleteTaskRequest = function() {
    $.ajax({
      url: '/complete_task/' + taskId,
      type: 'GET',
      success: function(resp) {
        console.log(resp)
      },
      error: function(err) {
        console.log(err)
      }
    });
  };
  if(switchTaskElem.checked){
    $(taskCallout).fadeOut(3000, "swing", sendCompleteTaskRequest);
  } else {
    $(taskCallout).stop().animate({opacity:'100'});
  }
}

var removeTask = function(removeTaskElem){
  var id = $(removeTaskElem).closest('.task__callout').attr("id");
  var taskId = extractIdNumber(id);
  $.ajax({
    url: '/tasks/' + taskId,
    type: 'DELETE',
    success: function(resp) {
      $("#task_" + taskId).remove();
    },
    error: function(err) {
      console.log("Error removing task: " + err)
    }
  });
}

$(document).ready(function() {
  $('.task__add').click(function() {
    var description = $('.task__description').val();

    $.ajax({
      url: "/tasks.js",
      type: "POST",
      data: {
        description: description
      },
      dataType: "script",
      success: function(resp) {
        console.log("Success adding task");
      },
      error: function(er) {
        console.log(er);
      }
    });
  });
  $('.tasks__list').on("click", ".switch-input", function(){
    completeTask(this);
  });
  $('.tasks__list').on("click", ".close-button", function(){
    removeTask(this);
  });
});
