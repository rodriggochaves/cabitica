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
        console.log("smile");
        console.log(resp);
      },
      error: function(er) {
        console.log("saddens");
        console.log(er.responseText);
      }
    })
  });
});