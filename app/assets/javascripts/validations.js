var CJR_EMAIL_REGEX = /[\w+\-.]+@cjr\.org\.br$/i;
var validEmailCSS = {
      'borderColor':'green',
      'boxShadow':'0px 0px 10px #16FA73'
    }
var invalidEmailCSS = {
      'borderColor':'red',
      'boxShadow':'0px 0px 10px #FF3535'
    }

$(document).ready(function() {
  $("#email_field").bind('input propertychange', function(){
    validateEmail(this);
  });
})

function validateEmail(emailField){
  var email = emailField.value;
  if(CJR_EMAIL_REGEX.test(email)){
    setStyle(emailField, validEmailCSS);
  } else {
    setStyle(emailField, invalidEmailCSS);
  }
}
function setStyle(elem, propertyObject) {
  // var elem = document.getElementById(objId);
  for (var property in propertyObject)
    elem.style[property] = propertyObject[property];
}
