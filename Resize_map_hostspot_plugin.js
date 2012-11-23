//This is a Javascript plugin for scalling map areas 
//along with the orginal image
//originally made so that my map links continued to work 
//within a responsive web framework

<script>

(function($) {

//This function is expecting an image to be the selector.  Ideally the image will have an id
$.fn.myPlugin = function(defCoords) {
  $(window).bind("load resize", function(){

//def coords are the default coords passed in i.e.  
//var defcoords; = ["7,7,98,44", "109,7,259,44", "265,7,392,44"],    

var new_x1, new_x2, new_y1, new_y2,
theImage = new Image(),
screenImage = this,
newmap;
theImage.src = screenImage.attr("src");
var original_image_width=theImage.width,
original_image_height=theImage.height,
new_image_width = screenImage.width(),
new_image_height = screenImage.height(),
hotspots = defCoords.length,
newcoords; 

if(this.attr('id')){
  newmap=this.attr('id');
  $('<#'+newmap+'>').appendTo(this.parent());
}
else{
  newmap="imgmap";
  $('<#'+newmap+'>').appendTo(this.parent());
}

for(var i=0;i<hotspots;i++) {

  coords=defcoords[i].split(",");
  new_x1 = (new_image_width/original_image_width)*coords[0];
  new_y1 = (new_image_height/original_image_height)*coords[1];
  new_x2 = (new_image_width/original_image_width)*coords[2];
  new_y2 = (new_image_height/original_image_height)*coords[3];
  newcoords = new_x1+","+new_y1+","+new_x2+","+new_y2;


  $('<#'+newmap+' area>')[i].coords=newcoords;
}
};
});

})(jQuery);

</script>