// Sortable lists
$( function() {
  $( ".connectedSortable" ).sortable({
    connectWith: ".connectedSortable"
  }).disableSelection();
} );


  // Dialog 
  $( function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "fade",
        duration: 200
      },
      hide: {
        effect: "fade",
        duration: 300
      }
    });
 
    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  } );

  $('.dialog').dialog({
    height: "auto",
    width: "100"
    // modal: false,
    // resizable: true,
    // dialogClass: 'no-close success-dialog'
});

// Tabs
$( function() {
  $( "#tabs" ).tabs();
} );

// Datepicker
$( function() {
  $( "#datepicker" ).datepicker();
} );

