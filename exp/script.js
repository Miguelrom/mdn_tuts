$(window).on('load resize', function(event){
  $('#innerWidth').text("InnerWidth = " + window.innerWidth);
  console.log("Event type: " + event.type);
});




