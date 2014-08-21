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
	// Add the "Main" or "Home" link to the nav bar
	.append($("<li/>", {
		class:	"navLink"
	}).append($("<a/>", {
		href:	"#mainPageDiv",
		text:	"Home"
	}))
	
	)));
	
	//TODO: Add a link for each topic
	$(".topicDiv").each(function(index){
		
		$("<li/>", {
			class:	"navLink"
		} )
		.append($("<a/>", {
			href:	"#"+$(this).attr("id"),
			text:	$(this).data("link-name")
		}))
		.appendTo(navBar.find(".navLinksList"));
	});
	// add the nav bar to the top of the page
	$("body").prepend(navBar);
});
