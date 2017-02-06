$(function() {
  var location = prompt("Please enter your Location");
  sessionStorage.setItem('Location', location);
  
  $('#reset').click(function(event){
	  var fname = $('#FirstName').val();
	  $('#FirstName').val("");
	  localStorage.setItem('First Name', fname);
  })

})