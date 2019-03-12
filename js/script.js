var currentImage = 0;
var images = [
    '../pics/IMG-20181029-WA0012.jpg',
    '../pics/IMG_7988.JPG',
    '../pics/IMG_7284.jpg',
    '../pics/IMG_0957.JPG',
    '../pics/IMG_7815.JPG',
    '../pics/IMG-20170331-WA0033.jpg',
    '../pics/IMG_7648.JPG',
    '../pics/IMG_7511.JPG',
    '../pics/SAM_0183.JPG',

];
function cycleImages(){
      var $active = $('#cycler .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first');
      $next.css('z-index',2);//move the next image up the pile
      $active.fadeOut(1500,function(){//fade out the top image
	  $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
          $next.css('z-index',3).addClass('active');//make the next image the top one
      });
    }

$(document).ready(function(){
// run every 7s
setInterval('cycleImages()', 7000);
})