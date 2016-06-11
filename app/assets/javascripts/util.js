function extractIdNumber(id){
  idNum = id.substring(id.lastIndexOf("_")+1);
  return idNum;
}

var removeElem = function(elemType, elemId){
  var url = '/' + elemType + '/' + elemId;
  var jquerySelector = "#" + elemType + "_" + elemId;
  $.ajax({
    url: url,
    type: 'DELETE',
    success: function(resp) {
      $(jquerySelector).remove();
    },
    error: function(err) {
      console.log("Error removing element: ");
      console.log(err);
    }
  });
}
