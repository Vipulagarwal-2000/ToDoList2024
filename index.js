//js for todolist

var clicCount = 0;
$("button.add").click(function(e) {
    
    var input = $("#input-field").val();
    var res = allLetter(input);

    if(res){
        if(clicCount < 10){
    
            var list = `<fieldset> ${input} <input class="cbox" type="checkbox"></input>
        </fieldset>`;
            $(".stask").prepend(list);
            
            clicCount++;}else {
            $(".message").html("");

            $(".toggle").addClass("card");
        $(".toggle").html('<p class="mess">You have exceeded the maximum number of clicks!</p>');

       setTimeout(function(e){
            $(".toggle").removeClass("card");
            $(".toggle").html('');

        },1500)
            $(".message").append('<p>You have exceeded the maximum number of clicks!</p>');
        
            }

    }else {
        
        $(".message").html("");
        $(".toggle").addClass("card");
        $(".toggle").html('<p class="mess">Please enter alphabhet only.</p>');

       setTimeout(function(e){
            $(".toggle").removeClass("card");
            $(".toggle").html('');

        },1500)
        
       

        $(".message").append('<p>Please enter alphabhet only</p>');
    }
    
   
  

});

$("button.save").click(function(e){
    $(".cbox").prop("disabled", true);
    $("fieldset").addClass("save");
   

});

$("button.clear").click(function(e){
    $(".stask").html("");
    $(".message").html("");
    clicCount = 0;
    
});

function allLetter(inputtxt)
  {
   var letters = /^[A-Za-z]+$/;
   if(inputtxt.match(letters))
     {
      return true;
     }
   else
     {
     
     return false;
     }
  }