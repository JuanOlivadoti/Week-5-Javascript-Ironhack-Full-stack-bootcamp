// ----------------INITIALIZING APP
if (window.SpotyApp === undefined) {
	window.SpotyApp = {};
}

SpotyApp.init = function(){
	// 3rd party setup code here
	console.log("SpotyApp ONLINE!");
};


$(document).on("ready", function(){
	SpotyApp.init();
});

// ------------- Song search

