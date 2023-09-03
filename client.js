$(function(){
    // preload audio
    var toast = new Audio('toast.wav');
    $('.code').on('click', function(e) {
        $("#product").text($(this).data("name"));
        $("#code").text($(this).data("code"));
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();
        $('#liveToast').toast({ autohide: false }).toast('show');

       
    });
    
    $(document).keydown(function(e){
        console.log("down")
       
        if (e.key == "Escape"){
            console.log(e.key)
           $("#liveToast").toast('hide');
        }
     })

});