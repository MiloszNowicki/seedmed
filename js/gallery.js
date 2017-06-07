$(document).ready(function(){
console.log('galeria!')
var photos            = $('.gallery').children();
var modal                          = $('.modal');
var content = $('.modal').find('.modal-content');
var right                          = $('.modal').find('.right');
var left                            = $('.left');
console.log(modal);
//$(left).on('click',function(){modal.toggle()});

console.log(content);
var slide = function(i){
  var length = photos.length;
  right.on('click', function()
  {
    var erase = $('modal').find('img');
    erase.fadeOut();
    content.empty();
    if(i == length-1)
    {
      i=0;
      var newImg = photos.slice(i,i+1);
    }
    else
    {
      i++;
      var newImg = photos.slice(i,i+1);
    }
    //.clone();//.appendTo(content);
    newImg = newImg.clone();
    newImg.hide();
    content.append(newImg);
    newImg.fadeIn();



  });

  left.on('click', function()
  {
    var erase = $('modal').find('img');
    erase.fadeOut();
    content.empty();
    if(i == 0)
    {
      i = length-1 ;
      var newImg = photos.slice(i,i+1);
    }
    else
    {
      i--;
      var newImg = photos.slice(i,i+1);
    }
    //.clone();//.appendTo(content);
    newImg = newImg.clone();
    newImg.hide();
    content.append(newImg);
    newImg.fadeIn();



  });
}
$(window).on('click',function(e)
{
  if(e.target.className == 'modal-center')
  {
    modal.toggle();
  }
});
photos.each(function(index){
  $(this).on('click', function()
  {
    var getIndex = index;
    content.empty();
    $(this).clone().appendTo(content);
    slide(index);
    //content.append(img);
    modal.toggle();
  });
});


});
