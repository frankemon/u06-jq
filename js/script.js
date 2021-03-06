// Sortable lists
$( function() {
  $( "#sortable1, #sortable2, #sortable3" ).sortable({
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
 
    $( ".opener" ).on( "click", function() {
      $( ".dialog" ).dialog( "open" );
    });
  } );

  $('.dialog').dialog({
    height: "auto",
    width: 300,
    modal: false,
    resizable: true,
    dialogClass: 'no-close success-dialog'
});

// Dialog w/ delete
// $( function() {
//   $( "#dialog-confirm" ).dialog({
//     autoOpen: false,
//     resizable: false,
//     height: "auto",
//     width: 300,
//     modal: true,
//     buttons: {
//       "Delete all items": function() {
//         $( this ).dialog( "close" );
//       },
//       Cancel: function() {
//         $( this ).dialog( "close" );
//       }
//     }
//   });
// } );