var reloadTasks = function() {
  $.ajax("/last_task.json", {
    success: function(data) {
      $(".tasks__list").append($('<div>', {
        class: "callout task__callout"
      }));
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
    })
  });
});