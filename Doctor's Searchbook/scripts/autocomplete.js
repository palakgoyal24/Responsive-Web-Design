$(function() {
  var doctorNames = [
    "Akshay Gupta",
    "Aakash Malhotra",
    "Akon Gilmore",
    "Akshra Rai",
    "Akansha Jajodia",
    "Aksa Verma",
    "Akira Mittal",
    "Alka Agarwal",
    "A.K. Gupta",
    "Disha Goyal",
    "Kanak Bhatt",
    "Sangeeta Agarwal",
    "Sameera Desai",
    "Nivedita Sharma",
    "Utkarsh Kaushik"
  ];

  $(function(){
    ( "#doctor-name").autocomplete({
    source: doctorNames,
    minLength: 2
  })});

  //To search only from the beginning of the string
  $.ui.autocomplete.filter = function (array, term){
    var matchchar = new RegExp("^" + $.ui.autocomplete.escapeRegex(term),"i");
    return $.grep(array, function (value){
      return matchchar.test(value.label || value.value || value);
    });
  };
});
