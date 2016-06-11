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

  // captura o evento de click no botão task__add e manda o conteudo do input 
  // para criar a tarefa
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

  $('.edit_button').click(function() {
    var taskCallout = $(this).parent();
    var editOptions = $(this).siblings(".edit_options"); 
    if( !$( this ).data( "actived" ) ) {
      taskCallout.css("height", "200px");
      editOptions.css("display", "inline-block");
      $( this ).data( "actived", true )
    } else {
      taskCallout.css("height", "64px");
      editOptions.css("display", "none");
      $( this ).data( "actived", false )
    }
    
    
  });
});
