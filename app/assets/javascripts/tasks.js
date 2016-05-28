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

$(document).ready(function() {
  $('.task__add').click(function() {
    var description = $('.task__description').val();
    var elemType = "tasks";
    addElem(elemType, description);
  });
  $('.tasks__list')
    .on("click", ".switch-input", function(){
      completeTask(this);
    }).on("click", ".close-button", function(){
      var id = $(this).closest('.task__callout').attr("id");
      var taskId = extractIdNumber(id);
      removeElem("tasks", taskId);
    });
});
