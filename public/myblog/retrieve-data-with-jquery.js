$(function(){				
    $('#submit').click(function(e){
    	e.preventDefault();

    	$.ajax({
    		type: 'POST',
						data: JSON.stringify(data),
				        contentType: 'application/json',
                        url: 'http://localhost:3000/send',			
    	});
    	};
    	
    });
    $.get("/blog/send", function(response){
    	$(".content").html(response);
    	$(".content").toggle();
   }
// $(function(){
// 	$(".content").on("")
// });
// $(function(){
// 	$.get("/retrieve", function(response){
// 		//console.log(response);
// 	 	$(".content").html(response);
// 	});
	

// });