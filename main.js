$(document).ready(function(){
	var navBar = $("<div/>", {
		id:	"navBarDiv",
		class:	"navBar"
	})
	// create the nav bar container
	.append($("<div/>", {
		class:	"container"
	})
	//TODO: Create the list for the nav bar
	.append($("<ul/>", {
		class:	"navLinksList"
	})
	.append($("<li/>", {
		class:	"navLink",
		text:	"Home"
	})
	//TODO: Add the "Main" or "Home" link to the nav bar
	)));
	
	//TODO: Add a link for each topic
	$(".topicDiv").each(function(index){
		
		$("<li/>", {
			class:	"navLink",
			text:	$(this).data("link-name")
		} ).appendTo(navBar.find(".navLinksList"));
	});
	// add the nav bar to the top of the page
	$("body").prepend(navBar);
});