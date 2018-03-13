(function($){

	'use strick';

  
   function customGoogleMap(){

    if($("#google-mapID").length >0) {


      
       var map;
       var mapDiv = document.getElementById("google-mapID");
       var gLatLng = new google.maps.LatLng(47.751074,-120.740139);
       map = new google.maps.Map(mapDiv,{

       	    center                 : gLatLng,
       	    zoom                   : 8,
       	    zoomControl            : true,
       	    streetViewControl      : true,
       	    scrollwheel            : false,
       	    draggable              : true,
       	    disableDoubleClickZoom : true
       });

       marker = new google.maps.Marker({

       	      position : gLatLng,
       	      map      : map,
       	      title    : "Custom Google Map Title",
       	      icon     : "images/google-map-ion/law.png",
       	      animation:google.maps.Animation.BOUNCE
       });


     }
   }


customGoogleMap();
}(jQuery));