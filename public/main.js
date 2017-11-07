window.onload = function() {

let phoneNumber = "";

// grab the value of the digit clicked, begin formatting it.
$('.value').on('click', function(){
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
    alert("You dialed number " + formattedPhone);
})
}
