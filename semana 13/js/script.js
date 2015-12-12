$( "#right" ).click(function() {
  $( ".block" ).animate({ "left": "+=200px" }, "fast" );
});
 
$( "#left" ).click(function(){
  $( ".block" ).animate({ "left": "-=200px" }, "fast" );
});
