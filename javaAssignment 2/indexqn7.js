$(document).ready(function(){
    $(".seat").mouseover(function(){
        if ($(this).hasClass("unavailable")){
            $(".my-3").text("Status: Taken");
        }
        else {
            $(".my-3").text("Status: Available"); 
        }
    });
    $(".seat").mouseout(function(){
        $(".my-3").text("Status: -");
    });
  });


$(document).ready(function(){
    $(".unavailable").click(function(){
        $(".alert").removeAttr("style")
        $(".alert").text("Seat has already been taken")
        $(".alert").fadeOut(3000);
    });
});

$(document).ready(function(){
    $(".avail").click(function(){
        $("#confirmBooking").removeAttr("id")
        $(this).addClass("selected")
    });
});

$(document).ready(function(){
    $(".btn").click(function(){
        $(".selected").addClass("unavailable")
        $(".selected").removeClass("avail")
        $(".selected").removeClass("selected")
        $(".btn").attr("id", "confirmBooking")
    });
});
