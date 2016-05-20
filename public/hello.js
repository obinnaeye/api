$(document).ready(function() {
    $.ajax({
        url: "http://apilayer.net/api/live?access_key=33f42ad70412937e86f3ccdd4e8f935c "
    }).then(function(data) {
       $('.current1').append(data.timestamp);
        $('.class').append(data.source);
        $('.austra').append(data.quotes.USDAED);
        console.log(data)
        
      
    });
});