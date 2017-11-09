window.onload = function() {

// dialer

var dial = new Audio('assets/dial.mp3');
var call = new Audio('assets/call.mp3');

// initial phoneNumber variable
let phoneNumber = "";

// grab the value of the digit clicked, begin formatting it.
$('.value').on('click', function(){
    dial.play();
    var currentEntry = $(this).attr('value');
    console.log(currentEntry);
    if (phoneNumber === '') phoneNumber = currentEntry;
    else phoneNumber = phoneNumber + currentEntry;
    formattedPhone = '(' + phoneNumber.substr(0, 3) + ')' + '-' + phoneNumber.substr(3, 3) + '-' + phoneNumber.substr(6,4);
    updateScreen(formattedPhone);
})


// update of the numbers box
let updateScreen = function(displayValue) {
    var displayValue = displayValue.toString();
    $('#numbers').html(displayValue);
};

// initiate the call
$('#call').click(function(){
    $('#id01').show();
    call.play();
    $("#phonebox").html(formattedPhone);
})

// hang up, reload phone
$('#hangup').click(function(){
    location.reload();
})

}