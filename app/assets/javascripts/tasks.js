// TODO: fazer esse método importar uma partial de html.

var makeTaskCompleteButton = function(id) {
  return "<span class='switch tiny'>" 
    + "<input class='switch-input' id='task__complete_"
    + id +"' type='checkbox' />" 
    + "<label class='switch-paddle' for='task__complete_" + id + "'>" 
    + "<span class='show-for-sr'>Completar tarefa</span></label></span>";
}

function extractIdNumber(elem){
  idAttribute = elem.getAttribute("id");
  idNum = idAttribute.substring(idAttribute.lastIndexOf("_")+1);
  return idNum;
}

var completeTask = function(taskElem) {    
  var sendCompleteTaskRequest = function() {
    taskId = extractIdNumber(taskElem);
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
  var taskParent = taskElem.parentElement.parentElement;
  if(taskElem.checked){
    $(taskParent).fadeOut(3000, "swing", sendCompleteTaskRequest);
  } else {
    $(taskParent).stop().animate({opacity:'100'});
  }
}

var appendLastTask = function() {
  $.ajax("/last_task.json", {
    success: function(data) {
      $(".tasks__list").append($('<div>', {
        class: "callout task__callout"
      }));

      var lastTask = $(".task__callout").last();
      lastTask.html(makeTaskCompleteButton(data.id));
      lastTask.append($('<p>', {
        text: data.description
      }));
      $(".task__description").val("");
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
});
