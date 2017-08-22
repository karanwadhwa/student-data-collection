$( document ).ready(function() {
  $('.modal').modal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: 0.85, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '4%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
  });
  $('#modal1').on('click', function() {
  });
});


  $(document).ready(function() {
    $('select').material_select();
  });

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
      
