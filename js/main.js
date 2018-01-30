// lets code jquery to make an ajax request to get the data through api in json format. 
$(document).ready(function(){
    // lets create a global variable for quote and author
    var quote
    var author

    function getResult(){
        // ajax request
        $.ajax({
            url: "http://api.forismatic.com/api/1.0/",
            // adding some extra options to be able to get the data as the chrome browser is not accessing the data for a security reason
            jsonp: 'jsonp',
            dataType: 'jsonp',
            data: {
                method: 'getQuote',
                format: 'jsonp',
                lang: 'en'
            },
            // after getting the data from the server, lets display those data on our HTML page.
            success: function(data){
                quote = data.quoteText;
                author = data.quoteAuthor;

                $('#quoteResult').text('Quote: ' + quote)
                // if author is false, lets give that an unknow author name. 
                if(author){
                    $('#quoteWriter').text('Author: ' + author)
                }else{
                    $('#quoteWriter').text('Author: Unknown')
                }
            }
        })
    }
    // calling the function.
    getResult()

    // lets make the function load everytime the button is pressed and pass a parameter event to let the page stay on position when the windows size is minimized.
    $('.quoteBtn').on('click',function(event){
        event.preventDefault();
        getResult();
        
        // create random background color for body.
        var allchar="0123456789ABCDEF";

        function myFun(){
            var  randcol= "";
          for(var i=0; i<6; i++){
             randcol += allchar[Math.floor(Math.random()*16)];
          }
          document.body.style.backgroundColor= "#"+randcol;
          
          }
          myFun();
          
          // create random background color for div getResult.
          function myFun2(){
          var  randcol2= "";
          for(var i=0; i<6; i++){
             randcol2 += allchar[Math.floor(Math.random()*16)];
          }
          
          document.getElementById('result').style.backgroundColor= "#"+randcol2;
          
          
          
          }
          myFun2();

        //   change font color.
        $("#quoteResult").css('color', "white")
        $("#quoteWriter").css('color', "white")
        $("#main").css('color', "white")
        
          
    })

    // create the twitter share button work.
    $('.quoteShare').on('click', function(event){
        event.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote));
    })
    
})