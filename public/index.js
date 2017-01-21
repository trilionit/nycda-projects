$(function(){
	$.get("/", function(response, status) {
		console.log(status + " : " + response.title);
		 $("#main-title").text(response.title);
		 $("#main-story").text(response.story);
	});
});