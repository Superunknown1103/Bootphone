window.onload = function() {

let phonenumber = "0";


$('.value').click(function(){
    var number = this.attr("value", value);
})

$('#call').click(function(){
    alert("You are calling " + phonenumber);
})
}
