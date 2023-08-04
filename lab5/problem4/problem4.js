
function Song(title, artist) {
    this.title = title;
    this.artist = artist;
  }
  
  Song.prototype.play = function () {
    console.log("Playing: " + this.title + " by " + this.artist);
  };

  const song1 = new Song(" 7 rings", "Ariana Grande");
  const song2 = new Song("จังหวะจะรัก", " วี วิโอเลต วอเทียร์ ");
  
  song1.play(); 
  song2.play(); 
  