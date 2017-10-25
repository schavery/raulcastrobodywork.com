var r_text = new Array ();
	r_text[0] = "&ldquo;I've been a massage therapist for over 23 years and I've received many massages over the years and Raul is the best massage therapist...hands down.&rdquo; - Dina M.";
	r_text[1] = "&ldquo;He's professional and kind and I give him my highest recommendation.&rdquo; - TC C.";
	r_text[2] = "&ldquo;Raul's healing touch, patience, and compassionate spirit led me through a journey of years of emotions stored within my flesh and bones.&rdquo; - Alyson J.";
	
var s_text = new Array ();
	s_text[0] = "&ldquo;I am a chiropractor here in Alameda, and find massage to be very important complimentary treatment to chiropractic care.  I have added Raul to my short list of recommended massage therapists.  Body workers like Raul are hard to come by, and deserve special recognition.&rdquo; - C B.";
	s_text[1] = "&ldquo;While I had some tender spots to work out, he listened and worked on me with care - paying attention to my breath and the tension in my body to know when to dig deeper or ease up. The overall sensation after - simply heaven.&rdquo; - Nancy L.";
	s_text[2] = "&ldquo;As massage therapist I am very picky and extremely hard to please. Raul is definitely by far the best massage therapist ever!&rdquo; - Cindy P.";
	
var t_text = new Array ();	
	t_text[0] = "&ldquo;He is incredibly intuitive, kind, and sensitive.  He seems to know where my body is holding stress and where past traumas have occurred without me even having to tell him.  He truly is a master of his craft and has taken massage to the next level.  I refer him to everyone I know and everyone has thanked me profusely!&rdquo; - Beth H.";
	t_text[1] = "&ldquo;He addressed every knot, tight area and issue that I had. He is hands-down the best massage therapist I have ever had and I do not say that lightly.&rdquo; - Sharisse H.";
	t_text[2] = "&ldquo;As a therapist that refers people often for massage and bodywork, I can say that Raul has a gift for healing. He creates a very safe space and tunes into each client to provide a massage that is wonderfully restorative and profoundly relaxing.&rdquo; - Mark M.";
	t_text[3] = "&ldquo;When Raul works on you, it's as if he waves his hand over you and listens to some silent frequency, and then he zeroes in on the places where you're holding tension. It's impossible to overstate how good he is at this.&rdquo; - Rachael H.";

(function($){
  $.fn.list_ticker = function(options){
    
    var defaults = {
      speed:60000,
	  effect:'fade'
    };
    
    var options = $.extend(defaults, options);
    
    return this.each(function(){
      
      var obj = $(this);
      var list = obj.children();
      list.not(':first').hide();
      
      setInterval(function(){
        
        list = obj.children();
        list.not(':first').hide();
        
        var first_li = list.eq(0)
        var second_li = list.eq(1)
		
			first_li.fadeOut(function(){
				second_li.fadeIn();
				first_li.remove().appendTo(obj);
			});
      }, options.speed)
    });
  };
})(jQuery);