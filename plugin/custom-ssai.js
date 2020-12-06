videojs.registerPlugin('customSSAI', function() {
    // get a reference to the player and replace the value below with your ad config id
    var myPlayer = this,
        adConfigId = "d6190656-2095-4ff3-8afe-1a0b60d67ed2";
        
    // initialize the SSAI plugin
		myPlayer.ssai();

    // use the catalog object to retrieve a video from your Video Cloud library. Replace the video id below with your own value. Notice that the ad config id is passed as a parameter for the getVideo() call.
		myPlayer.catalog.getVideo("5165694790001", function(error, video) {
			if (error) {
        // if there was an error retrieving the video, then set the error.
				myPlayer.error(error);
			} else {
        // load the video object in the player
				myPlayer.catalog.load(video);
        // uncomment the next line to autoplay the video
				//myPlayer.play();
			}
		}, adConfigId);

});
