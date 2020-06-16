$(document).ready(function(){

/*================================================
================Pop up =========================*/ 


    $('.pop-up-container').click(function(){
        $(this).fadeOut(1000)
    });

/*================================================
================Onload Stuff====================*/ 


    //fadeIn content once the page has loaded
    $('#main-content').fadeIn(1000);

    // section-welcome fixed onload
    $("#section-welcome").css({
        "position" : "fixed",
        "top" : "0",
        "width" : "100%"
    });

    //header static onload
    $("header").css({
        "position" : "static",
        "width" : "100%"
    });

    // stock loaded height of section-welcome and offset of header in variables
    var welcomeHeight = $('#section-welcome').height();
    var orgElementPos = $('header').offset();

    // function to update variables when page is resized
    $(window).resize(function (){
        welcomeHeight = $('#section-welcome').height();
        orgElementPos = $('header').offset();
    });

/*================================================
================Welcome Section====================*/         

    var orgElementTop = orgElementPos.top; 

    
    $(window).scroll(function(){

        //when scrollTop is >= welcomeHeight / 3 show first phrase.
        if ($(this).scrollTop() >= welcomeHeight / 3) {
            $("#changeText").html("\"Je suis Développeur</br>Web Junior\"")
        }
        else {
        //otherwise show second phrase    
            $("#changeText").html("\"Bonjour,</br> je m'appelle Matt.\"")
        }
    });

    $(window).scroll(function(){
        
        //when scrollTop is <= welcomeHeight section-welcome is fixed
        if ($(this).scrollTop() <= welcomeHeight) {
            $("#section-welcome").css({
                "position" : "fixed",
                "width" : "100%"
            });
        }
        // otherwise section-welcome is static
        else {
            $("#section-welcome").css({
                "position" : "static",
                "width" : "100%"
            });
        }
    });



/*================================================
================Sticky Header====================*/ 

    var orgElementPos = $('header').offset();
    var orgElementTop = orgElementPos.top; 

    $(window).scroll(function(){
        //when srollTop is >= the header's original offset from top it postion = sticky
        if ($(this).scrollTop() >= orgElementTop * 2) {
            $("header").css({
                "position" : "sticky",
                "top" : "0",
                "width" : "100%"
            });
        }
        //otherwise postion static
        else {
            $("header").css({
                "position" : "static"
            });
        }      
    });
/*================================================
================Anchors====================*/ 

    //links down to responding sections
    //target this href starting with #
    $(`a[href^="#"]`).click(function() {

        //stock offset of attribute
        var myOffset = $(this).attr("href");

        //animate scroll down to section 2500ms
        $("html, body").animate({
            scrollTop:$(myOffset).offset().top}, 600);
        return false;
    })


/*================================================
================section-1 animation==============*/

    $(window).scroll(function(){ // Event listener for window scroll

        var sectionHeight = $("#section-1").height(); // get section-1 on load
        var quarterSectionHeight = sectionHeight / 4; // calculate section-1 height / 4

        var section_Offset = $("#section-1").offset().top; // get section-1 offset from top on load
        var phrase1_Offset = (section_Offset - 3 * (quarterSectionHeight)); // set show point for first phrase as section_Offset - 3/4 of section height.
        var phrase2_Offset = (section_Offset - 1 * (quarterSectionHeight)) ; // set show point for second phrase as section_Offset - 1/4 of section height.
        var phrase3_Offset = (section_Offset); // set show point for third phrase as section_Offset
        var phraseEnd = (section_Offset + 3 * (quarterSectionHeight)); // set hide point for third phrase as section_Offest + 3/4 of section height.

        $(window).resize(function() { // listen for window resize
            sectionHeight = $("#section-1").height(); //if resize, update sectionHeight
            section_Offset = $("#section-1").offset().top; //if resize, update section_Offset
        })


        $(".phrase-1, .phrase-2, .phrase-3").css('opacity', 0).css('transition', '0.5s'); // give all phrases opacity 0
        if ($(this).scrollTop() > phrase1_Offset) { // when scroll top is greater the phrase1_Offset
            $(".phrase-1").css('opacity', 1); // show phrase_1
            if($(this).scrollTop() > phrase2_Offset){ // when scroll top is greater the phrase2_Offset
            $(".phrase-1").css('opacity', 0); // hide phrase-1
                $(".phrase-2").css('opacity', 1); // show phrase_2
                if($(this).scrollTop() > phrase3_Offset){ // when scroll top is greater the phrase3_Offset
                    $(".phrase-2").css('opacity', 0); // hide phrase-2
                    $(".phrase-3").css('opacity', 1); // show phrase_3
                    if($(this).scrollTop() > phraseEnd){ // when scroll top is greater the phraseEnd offset
                        $(".phrase-3").css('opacity', 0); // hide phrase-3
                    }
                }
            }
        } 

    }); 

/*================================================
================section-2 animation==============*/

    $(window).scroll(function(){                 //See comments above ^^^^^ //See comments above ^^^^^ //See comments above ^^^^^

        var sectionHeight2 = $("#section-2").height();
        var quarterSectionHeight2 = sectionHeight2 / 4;

        var section_Offset2 = $("#section-2").offset().top;
        var phrase1_Offset2 = (section_Offset2 - 3 * (quarterSectionHeight2));
        var phrase2_Offset2 = (section_Offset2 - 1.5 * (quarterSectionHeight2)) ;
        var phrase3_Offset2 = (section_Offset2);
        var phraseEnd = (section_Offset2 + 3 * (quarterSectionHeight2));
        
        $(window).resize(function() {
            sectionHeight2 = $("#section-2").height();
            section_Offset2 = $("#section-2").offset().top;
        })


        $(".phrase-1b, .phrase-2b, .phrase-3b").css('opacity', 0).css('transition', '0.5s');
        if ($(this).scrollTop() > phrase1_Offset2) {
            $(".phrase-1b").css('opacity', 1);
            if($(this).scrollTop() > phrase2_Offset2){
            $(".phrase-1b").css('opacity', 0);
                $(".phrase-2b").css('opacity', 1);
                if($(this).scrollTop() > phrase3_Offset2){
                    $(".phrase-2b").css('opacity', 0);
                    $(".phrase-3b").css('opacity', 1);
                    if($(this).scrollTop() > phraseEnd){
                        $(".phrase-3").css('opacity', 0);
                    }
                }
            }
        } 

    }); 


/*================================================
================section-3 animation==============*/



    $(window).scroll(function(){                    //See comments above ^^^^^ //See comments above ^^^^^ //See comments above ^^^^^

        var sectionHeight3 = $("#section-3").height();
        var quarterSectionHeight3 = sectionHeight3 / 4;

        var section_Offset3 = $("#section-3").offset().top;
        var phrase1_Offset3 = (section_Offset3 - 3 * (quarterSectionHeight3));
        var phrase2_Offset3 = (section_Offset3 - 1 * (quarterSectionHeight3)) ;

        $(window).resize(function() {
            sectionHeight3 = $("#section-3").height();
            section_Offset3 = $("#section-3").offset().top;
        })

        $(".phrase-1c, .phrase-2c, .phrase-3c").css('opacity', 0).css('transition', '0.5s');
        if ($(this).scrollTop() > phrase1_Offset3) {
            $(".phrase-1c").css('opacity', 1);
            if($(this).scrollTop() > phrase2_Offset3){
                $(".phrase-1c").css('opacity', 0);
                $(".phrase-2c").css('opacity', 1);
                }
            }
        });

            var mq = window.matchMedia("(max-width: 1200px)");
        if (mq.matches) {
            $(".addRemove").addClass("phrase-1c");
        }

        
/*================================================
================section-3 animation==============*/

        //copy paste to fire Rellax plugin // not my work !! 


        $(document).ready(function(){
            var rellax = new Rellax('.rellax', {
            speed: 3,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });

        var rellax2 = new Rellax('.rellax2', {
            speed: 3,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
    });
});