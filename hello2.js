
// This part of the code is executed on 
$(document).ready(function(){
  $('#testbut').click(function(){
    var x = $('#name_var').val();
    var y = "http://apilayer.net/api/live?access_key=" + "33f42ad70412937e86f3ccdd4e8f935c";
    $.ajax({
      url: y,
    }).then(function(data)
    {
      $('.test').append("<p>" + "1 Austra dollar: " + data.quotes.USDAED + " USD" +
       "<br/>" + "The Time Stamp used for converting " + x + " Austra dollar to USD: " + data.timestamp +
       "<br/>" + x + " Austra dollar = " + x * data.quotes.USDAED + "USD" +
       "</br>" + "Thanks for using Dollar Converter!" + "</p>");
      console.log(data);
    });
  });
});


// This clears the output so far
$(document).ready(function(){
  $('#testclear').click(function(){
    $('.test').empty();
  });
});







