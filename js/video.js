var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML= video.volume *100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up video");
	video.playbackRate /= .95;
	console.log("New speed is" + video.playbackRate);
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down video");
	video.playbackRate *= .95;
	console.log("New speed is" + video.playbackRate);
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing volume");
	console.log(this.value);
	video.volume = this.value / 100
	document.querySelector("#volume").innerHTML=video.volume * 100 + "%"
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Video muted");
	if (video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML="Unmute";
	}
	else {
		video.muted = false;
		document.querySelector("#mute").innerHTML="Mute";
	}
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	console.log(video.currentTime);
	video.currentTime += 15
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
		video.play()
	}
	console.log(video.currentTime);
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing CSS");
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Changing CSS");
	video.classList.remove("oldSchool")
});
