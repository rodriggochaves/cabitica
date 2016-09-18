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

var showEditWindow = function () {
  callout = $(this).parent();
  var editOptions = $(this).siblings(".edit_options"); 
  $(callout).toggleClass('editing')
  $(editOptions).toggle();
}

$(document).ready(function() {
  $('.tasks__list')
    .on("click", ".switch_input", function(){
      completeTask(this);
    }).on("click", ".close_button", function(){
      var id = $(this).closest('.task__callout').attr("id");
      var taskId = extractIdNumber(id);
      removeElem("tasks", taskId);
    });

  $('.edit_button').click(showEditWindow);
});
