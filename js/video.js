var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")



	// get the video element
	video = document.querySelector("video");

	// turn off autoplay and looping
	video.autoplay = false;
	video.loop = false;

	//added event listeners for the play button
	document.querySelector("#play").addEventListener("click", function() {
        console.log("Play Video");
        video.play(); // play the video;

	});

	// added event listener for the volume slider
	document.querySelector("#slider").addEventListener("input", function () {
		let sliderValue = this.value; // slider value (0-100)
		video.volume = sliderValue / 100; // video volume set (0.0-1.0)
		console.log(`Volume set to: ${sliderValue}%`);
		document.querySelector("#volume").textContent = `Volume: ${sliderValue}%`; // updates the volume display
	});

    // added event listener for the pause button
    document.querySelector("#pause").addEventListener("click", function() {
        console.log("Pause Video");
        video.pause(); // Pause the video
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%"; //update volume
	
    });

    // add event listener for the slow down button
    document.querySelector("#slower").addEventListener("click", function() {
        video.playbackRate -= 0.1; // reduce playback speed by 10%
        if (video.playbackRate < 0.1) {
            video.playbackRate = 0.1; // prevent speed from going below 0.1
        }
        console.log(`New playback speed: ${video.playbackRate.toFixed(1)}x`);
    });

    // add event listener for the speed up button
    document.querySelector("#faster").addEventListener("click", function() {
        video.playbackRate += 0.1; // increase playback speed by 10%
        if (video.playbackRate > 2.0) {
            video.playbackRate = 2.0; // prevent speed from exceeding 2.0x
        }
        console.log(`New playback speed: ${video.playbackRate.toFixed(5)}x`);
    });
	// add event listener for the "Skip Ahead" button
	document.querySelector("#skip").addEventListener("click", function() {
		// skip ahead by 10 seconds
		video.currentTime += 10;

		// reset video
		if (video.currentTime >= video.duration) {
			video.currentTime = 0; // reset to the beginning
			console.log("Video restarted");
		} else {
			console.log(`Current video time: ${video.currentTime.toFixed(2)} seconds`);
		}
	});

	// add event listener for the mute button
	document.querySelector("#mute").addEventListener("click", function() {
		console.log("Video Muted");
		if (video.muted) {
			video.muted = false;
			document.querySelector("#mute").innerHTML = "Mute";
		} else {
			video.muted = true;
			document.querySelector("#mute").innerHTML = "Unmute";
		}
	});


	// add event listener for the volume slider
	document.querySelector("#slider").addEventListener("change", function() {
		console.log("Change Volume");
		video.volume = document.querySelector("#slider").value / 100;
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	});

	// added event listener for the "Old School" button
	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool"); // add the oldSchool class to the video
		console.log("Old School style applied");
	});

	// added event listener for the "Original" button
	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool"); // remove the oldSchool class from the video
		console.log("Original style restored");
	});


});
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

