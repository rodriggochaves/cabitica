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

function showEditWindow(window) {
  var taskCallout = window.parent();
  var editOptions = window.siblings(".edit_options"); 
  if( !window.data( "actived" ) ) {
    taskCallout.css( "height", "200px");
    editOptions.css( "display", "inline-block");
    window.data( "actived", true )
  } else {
    taskCallout.css( "height", "64px" );
    editOptions.css( "display", "none" );
    window.data( "actived", false )
  }
}

$(document).ready(function() {
  $('.tasks__list')
    .on("click", ".switch-input", function(){
      completeTask(this);
    }).on("click", ".close-button", function(){
      var id = $(this).closest('.task__callout').attr("id");
      var taskId = extractIdNumber(id);
      removeElem("tasks", taskId);
    });

  $('.edit_button').click(function() {
    showEditWindow($(this));
  });
});
