// TODO: fazer esse método importar uma partial de html.

var makeTaskCompleteButton = function(id) {
  return "<span class='switch tiny'>" 
    + "<input class='switch-input' id='task__complete"
    + id +"' type='checkbox' />" 
    + "<label class='switch-paddle' for='task__complete" + id + "'>" 
    + "<span class='show-for-sr'>Completar tarefa</span></label></span>";
}

var completeTask = function(taskId) {    
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
}

var reloadTasks = function() {
  $.ajax("/last_task.json", {
    success: function(data) {
      $(".tasks__list").append($('<div>', {
        class: "callout task__callout"
      }));
      $(".task__callout").last()
        .html(makeTaskCompleteButton(data.id));
      $(".task__callout").last().append($('<p>', {
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
        reloadTasks();
      },
      error: function(er) {
        console.log(er);
      }
    });
  });
});