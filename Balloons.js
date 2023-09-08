$(function(){

// 1.Randomize the attention seeker in balloons.html. Choose a random animate.css attention seeker and apply when the page loads using JavaScript.

//make array of animations
let animations = ["animate__animated animate__bounce","animate__animated animate__jello","animate__animated animate__tada","animate__animated animate__handshake","animate__animated animate__flash"]
// randon gen number within array size
let randomAnimation = Math.floor(Math.random() * 5);
// array elemet based on ran
$('#happyB').addClass(animations[randomAnimation]);


//2.Create a toast when the submit button is clicked only if there are no balloons selected.
$('#submit').on('click',function(e){
   


let $checks = $('.form-check-input').length ;

let count = 0 ;

    $('.form-check-input').each(function () {
      

    if(!$(this).is(':checked')){

      count += 1;
}
     
     })
       

      if (count == $checks){
        $('#liveToast').toast({ autohide: true }).toast('show');


     }
     
   

})

//3. Add ability to check / uncheck all balloons with a single click (using a button, checkbox, link, etc…)
$('#Uncheck').on('change',function(e){
   if($(this).is(':checked')){
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
        $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') 
        $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });
   }

})
$('#checkAll').on('change',function(e){

    if($(this).is(':checked')){
     $('.form-check-input').each(function () {
       
         $(this).prop('checked', true)?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
     });
    }
 
 })

 //4.Hovering the mouse over a checkbox label should change the color of the h1 element (Happy Birthday!) to the balloon color indicated in the label. Moving the mouse out of the label should reset the color.

$('.form-check-label').on('mouseover',function() {
    console.log(this)

   
    $('#happyB').css('color', $(this).data('color'))

})
$('.form-check-label').on('mouseout',function() {
    console.log(this)

   
    $('#happyB').css('color', '')

})



 

 
    $('#birthday').pickadate({ format: 'mmmm, d' });
        // uncheck all checkboxes (FireFox)
        $('.form-check-input').each(function () {
            $(this).prop('checked', false);
        });
           // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
      
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });
});