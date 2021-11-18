function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");
    var commentBox = document.getElementById("comment-form");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
      commentBox.style.display = "block";
    } else {
      text.style.display = "none";
      commentBox.style.display = "none";
    }
  }



// function myFunction() {
//     var x = document.getElementById("flexSwitchCheckDefault").checked;
//     console.log(x);
//   };

//   document.querySelector('#flexSwitchCheckDefault').addEventListener('click', myFunction);

//   $('#price_check').on('switchChange.bootstrapSwitch', function (e, data) {

//     alert($('#price_check').bootstrapSwitch('state'));

//   });


// $(document).ready(function () {
//     $('input[type=checkbox]').each(function () {
//         //register for each checbox a click event
//         $(this).on('click', function () {
//             //check if this checbox is checked or not
//             if ($(this).is(':checked') == true) {
//                 console.log("true");
//             } else {
//                 console.log("false");
//             }
//         });
//     });
// });

// $(function () {
//     $('input:checkbox').each(function () {
//         // Iterate over the checkboxes and set their "check" values based on the session data
//         var $el = $(this);
//         $el.prop('checked', sessionStorage[$el.prop('id')] === 'true');
//     });

//     $('input:checkbox').on('change', function () {
//         // save the individual checkbox in the session inside the `change` event, 
//         // using the checkbox "id" attribute
//         var $el = $(this);
//         sessionStorage[$el.prop('id')] = $el.is(':checked');
//     });
// });
