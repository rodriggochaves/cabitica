// TODO: fazer esse método importar uma partial de html.

var makeTaskCompleteButton = function(id) {
  return "<span class='switch tiny'>" 
    + "<input class='switch-input' id='task__switch_" + id + "'"
    + "type='checkbox' />" 
    + "<label class='switch-paddle' for='task__switch_" + id + "'>" 
    + "<span class='show-for-sr'>Completar tarefa</span></label></span>";
}

var closeButtonHtml = function(){
  return "<button class='close-button'>"
    + "<span>"
    + "&times"
    + "</span>"
    + "</button>"
}

function extractIdNumber(elem){
  idAttribute = elem.getAttribute("id");
  idNum = idAttribute.substring(idAttribute.lastIndexOf("_")+1);
  return idNum;
}

var completeTask = function(taskElem) {    
  var taskCallout = taskElem.closest('.task__callout');
  var sendCompleteTaskRequest = function() {
    taskId = extractIdNumber(taskCallout);
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
  if(taskElem.checked){
    $(taskCallout).fadeOut(3000, "swing", sendCompleteTaskRequest);
  } else {
    $(taskCallout).stop().animate({opacity:'100'});
  }
}

var removeTask = function(taskElem){
  var taskCallout = taskElem.closest('.task__callout');
  var sendRemoveTaskRequest = function(){
    taskId = extractIdNumber(taskCallout);
    $.ajax({
      url: '/remove_task/' + taskId,
      type: 'GET',
      success: function(resp) {
        console.log("Task removed: " + taskId)
      },
      error: function(err) {
        console.log("Error removing task: " + err)
      }
    });
  };
  sendRemoveTaskRequest(taskCallout);
  var taskList = taskCallout.parentNode;
  taskList.removeChild(taskCallout);
}

var appendLastTask = function() {
  $.ajax("/last_task.json", {
    success: function(data) {
      $(".tasks__list").append($('<div>', {
        class: "callout task__callout",
        id: "task_" + data.id
      }));

      var lastTask = $(".task__callout").last();
      lastTask.html(makeTaskCompleteButton(data.id));
      lastTask.append($('<p>', {
        text: data.description
      }));
      $(".task__description").val("");
      lastTask.append(closeButtonHtml());
    },
    error: function(er) {
      console.log("Error loading last task");
      console.log(er);
    }   
  });
};

$(document).ready(function() {
  $('.task__add').click(function() {
    var description = $('.task__description').val();

    $.ajax({
      url: "/tasks.json",
      type: "POST",
      data: {
        description: description
      },
      dataType: "json",
      success: function(resp) {
        appendLastTask();
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
