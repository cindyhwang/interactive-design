$(document).ready(function() {
//Fendi-1:

$.ajax({
  "url":"https://www.kimonolabs.com/api/4gc8f7da?apikey=ADgMlSYX9S62vGCuLtPZvx99A7g0ftyX",
  "crossDomain":true,
  "dataType":"jsonp",
  //Make a call to the Kimono API following the "url" 
  
  'success': function(response){ 
  // If the call request was successful and the data was retrieved, this function will create a list displaying the data

  var collection = response.results.collection1;

  console.log(collection);

    for (var i = 0; i < collection.length; i++){   
    // for (var i = 0; i < collection.length; i++){   
    // Traverses through every element in the entire collection 

      //var photoURL = collection[i].Picture.src;
      var image5 = collection[i].image5.src;
      var price5 = collection[i].price5;
      var bids5 = collection[i].bids5;
      var timeleft5 = collection[i].timeleft5;
      var link5 = collection[i].image5.href;

      console.log(link5);

      $('.image5').append('<a href="' + link5 + '">' + '<img src="' + image5 + '">' + '</a>');
      $('.price5').append( price5 );
      $('.bids5').append( bids5 );
      $('.timeleft5').append( timeleft5 );
        
        // $(".list-group").append('<li class="list-group-item">' + collection[i].property1.text + '</li>');
        // // adds the text and the links from the first property into the list
      }
  
  }

});

//Fendi-2:

$.ajax({
  "url":"https://www.kimonolabs.com/api/8jyrzmvy?apikey=ADgMlSYX9S62vGCuLtPZvx99A7g0ftyX",
  "crossDomain":true,
  "dataType":"jsonp",
  //Make a call to the Kimono API following the "url" 
  
  'success': function(response){ 
  // If the call request was successful and the data was retrieved, this function will create a list displaying the data

  var collection = response.results.collection1;

  console.log(collection);

    for (var i = 0; i < collection.length; i++){   
    // for (var i = 0; i < collection.length; i++){   
    // Traverses through every element in the entire collection 

      //var photoURL = collection[i].Picture.src;
      var image6 = collection[i].image6.src;
      var price6 = collection[i].price6;
      var bids6 = collection[i].bids6;
      var timeleft6 = collection[i].timeleft6;
      var link6 = collection[i].image6.href;

      $('.image6').append('<a href="' + link6 + '">' + '<img src="' + image6 + '">' + '</a>');
      $('.price6').append( price6 );
      $('.bids6').append( bids6 );
      $('.timeleft6').append( timeleft6 );
        
        // $(".list-group").append('<li class="list-group-item">' + collection[i].property1.text + '</li>');
        // // adds the text and the links from the first property into the list
      }
  
  }

});

//Prada:

$.ajax({
  "url":"https://www.kimonolabs.com/api/3jjnh1rg?apikey=ADgMlSYX9S62vGCuLtPZvx99A7g0ftyX",
  "crossDomain":true,
  "dataType":"jsonp",
  //Make a call to the Kimono API following the "url" 
  
  'success': function(response){ 
  // If the call request was successful and the data was retrieved, this function will create a list displaying the data

  var collection = response.results.collection1;

  console.log(collection);

    for (var i = 0; i < collection.length; i++){   
    // for (var i = 0; i < collection.length; i++){   
    // Traverses through every element in the entire collection 

      //var photoURL = collection[i].Picture.src;
      var image7 = collection[i].image7.src;
      var price7 = collection[i].price7;
      var bids7 = collection[i].bids7;
      var timeleft7 = collection[i].timeleft7;
      var link7 = collection[i].image7.href;

      console.log(link7);

      $('.image7').append('<a href="' + link7 + '">' + '<img src="' + image7 + '">' + '</a>');
      $('.price7').append( price7 );
      $('.bids7').append( bids7 );
      $('.timeleft7').append( timeleft7 );
        
      }
  
  }

});

});

$(document).ready(function() {
    var _intervalId;
    
    function fadeInLastImg()
    {
        var backImg = $('#background_cycler img:first');
        backImg.hide();
        backImg.remove();
        $('#background_cycler' ).append( backImg );
        backImg.fadeIn();
    };
        
    _intervalId = setInterval( function() {
        fadeInLastImg();
    }, 774 );

});

       var soundControl = document.getElementById("GucciGucci"); 

      $(document).ready(function() {
        $("#GucciGucci").get(0).play();

      });

$.ajax({
  "url":"https://www.kimonolabs.com/api/2hehqjua?apikey=ADgMlSYX9S62vGCuLtPZvx99A7g0ftyX",
  "crossDomain":true,
  "dataType":"jsonp",
  //Make a call to the Kimono API following the "url" 
  
  'success': function(response){ 
  // If the call request was successful and the data was retrieved, this function will create a list displaying the data

  var collection = response.results.collection1;

  console.log(collection);

    for (var i = 0; i < collection.length; i++){   
    // for (var i = 0; i < collection.length; i++){   
    // Traverses through every element in the entire collection 

      //var photoURL = collection[i].Picture.src;
      var image1 = collection[i].image1.src;
      var price1 = collection[i].price1;
      var bids1 = collection[i].bids1;
      var timeleft1 = collection[i].timeleft1;
      var link1 = collection[i].image1.href;

      $('.image1').append('<a href="' + link1 + '">' + '<img src="' + image1 + '">' + '</a>');
      $('.price1').append( price1 );
      $('.bids1').append( bids1 );
      $('.timeleft1').append( timeleft1 );
        
      }
  
  }

});

//Gucci-2:

$.ajax({
  "url":"https://www.kimonolabs.com/api/cpw94aqm?apikey=ADgMlSYX9S62vGCuLtPZvx99A7g0ftyX",
  "crossDomain":true,
  "dataType":"jsonp",
  //Make a call to the Kimono API following the "url" 
  
  'success': function(response){ 
  // If the call request was successful and the data was retrieved, this function will create a list displaying the data

  var collection = response.results.collection1;

  console.log(collection);

    for (var i = 0; i < collection.length; i++){   
    // for (var i = 0; i < collection.length; i++){   
    // Traverses through every element in the entire collection 

      //var photoURL = collection[i].Picture.src;
      var image2 = collection[i].image2.src;
      var price2 = collection[i].price2;
      var bids2 = collection[i].bids2;
      var timeleft2 = collection[i].timeleft2;
      var link2 = collection[i].image2.href;

      $('.image2').append('<a href="' + link2 + '">' + '<img src="' + image2 + '">' + '</a>');
      $('.price2').append( price2 );
      $('.bids2').append( bids2 );
      $('.timeleft2').append( timeleft2 );
        
        // $(".list-group").append('<li class="list-group-item">' + collection[i].property1.text + '</li>');
        // // adds the text and the links from the first property into the list
      }
  
  }

});

//Louis-1:

$.ajax({
  "url":"https://www.kimonolabs.com/api/b0ulildg?apikey=ADgMlSYX9S62vGCuLtPZvx99A7g0ftyX",
  "crossDomain":true,
  "dataType":"jsonp",
  //Make a call to the Kimono API following the "url" 
  
  'success': function(response){ 
  // If the call request was successful and the data was retrieved, this function will create a list displaying the data

  var collection = response.results.collection1;

  console.log(collection);

    for (var i = 0; i < collection.length; i++){   
    // for (var i = 0; i < collection.length; i++){   
    // Traverses through every element in the entire collection 

      //var photoURL = collection[i].Picture.src;
      var image3 = collection[i].image3.src;
      var price3 = collection[i].price3;
      var bids3 = collection[i].bids3;
      var timeleft3 = collection[i].timeleft3;
      var link3 = collection[i].image3.href;

      $('.image3').append('<a href="' + link3 + '">' + '<img src="' + image3 + '">' + '</a>');
      $('.price3').append( price3 );
      $('.bids3').append( bids3 );
      $('.timeleft3').append( timeleft3 );
        
        // $(".list-group").append('<li class="list-group-item">' + collection[i].property1.text + '</li>');
        // // adds the text and the links from the first property into the list
      }
  
  }

});

//Louis-2:

$.ajax({
  "url":"https://www.kimonolabs.com/api/9s7q544m?apikey=ADgMlSYX9S62vGCuLtPZvx99A7g0ftyX",
  "crossDomain":true,
  "dataType":"jsonp",
  //Make a call to the Kimono API following the "url" 
  
  'success': function(response){ 
  // If the call request was successful and the data was retrieved, this function will create a list displaying the data

  var collection = response.results.collection1;

  console.log(collection);

    for (var i = 0; i < collection.length; i++){   
    // for (var i = 0; i < collection.length; i++){   
    // Traverses through every element in the entire collection 

      //var photoURL = collection[i].Picture.src;
      var image4 = collection[i].image4.src;
      var price4 = collection[i].price4;
      var bids4 = collection[i].bids4;
      var timeleft4 = collection[i].timeleft4;
      var link4 = collection[i].image4.href;

      $('.image4').append('<a href="' + link4 + '">' + '<img src="' + image4 + '">' + '</a>');
      $('.price4').append( price4 );
      $('.bids4').append( bids4 );
      $('.timeleft4').append( timeleft4 );
        
        // $(".list-group").append('<li class="list-group-item">' + collection[i].property1.text + '</li>');
        // // adds the text and the links from the first property into the list
      }
  
  }

});

       

