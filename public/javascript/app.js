//songs app

var songs = [];

var Song = function (title, artist, genre){
  this.title = title;
  this.artist = artist;
  this.genre = genre;
};

var breakfast = new Song("Breakfast", "Mercury Remix", "hungry house");
var heads = new Song("Heads Will Roll", "A-trak", "house");
var yeah = new Song("Yeah!", "Boys Noize", "acid house");

songs.push(breakfast, heads, yeah);

function displaySongs(){
  var elemStrg = "";
  for(var i=0; i<songs.length; i++){
  //pass in the song itself, and the index of the song to to get the elemSring
    elemStrg += getElemStrg(songs[i], i)
  //  "<div class='well container'>" +
  //  "<h3>" + songs[i].title + "</h3>" +
  //  "<p><i>" + songs[i].artist + "</i></p>" +
  //  "<p><i>" + songs[i].genre + "</i></p>" +
  //  "</div>"
}

document.getElementById("songs").innerHTML = elemStrg;
}

displaySongs();

document.getElementById("newSongForm").addEventListener("submit", function(event){
  event.preventDefault();


var title = document.getElementById("songTitle").value;
var artist = document.getElementById("songArtist").value;
var genre = document.getElementById("songGenre").value;

var mySong = new Song(title, artist, genre);

songs.push(mySong);

/*
document.getElementById("songs").innerHTML += "<div class='well container'>" +
"<h3>" + mySong.title + "</h3>" +
"<p><i>" + mySong.artist + "</i></p>" +
"<p><i>" + mySong.genre + "</i></p>" +
"<button id='delBtn' class='btn btn-default'>Delete</button>" +
"</div>";
*/

//displaySongs(); //Use this one

document.getElementById("songs").innerHTML += getElemStrg(mySong, songs.length -1);

document.getElementById("songTitle").value = "";
document.getElementById("songArtist").value = "";
document.getElementById("songGenre").value = "";


/*
Attempt to create delete button

var rem = document.getElementById("mySong");   // Get the <ul> element with id="myList"
rem.removeChild(rem.childNodes[0]);           // Remove <ul>'s first child node (index 0)


delBtn.addEventListener('click', function(rem) {
            deleteSongs(rem, mySong);
        });
*/
});

function getElemStrg(song, z){
  return '<div class="well container">' +
  "<h3>" + song.title + "</h3>" +
  "<p>artist: <i>" + song.artist + "</i></p>" +
  "<p>genre: <i>" + song.genre + "</i></p>" +
  '<div>'
  + '<button class="btn btn-warning" onclick="editSong('+z+')">Edit</button>'
  + '<button class="btn btn-danger" onclick="deleteSong('+z+')">Delete</button></div>'+
    +"</div>";
}
 function editSong(index){
   $('#editTitle').val(songs[index].title);
   $('#editArtist').val(songs[index].artist);
   $('#editGenre').val(songs[index].genre);

//document.getElementById('saveEditButton').innerHTML = 'button string(below)'
   $('#saveEditButton').html('<button onclick="saveChanges('+index+')"type="button" class="btn btn-primary">Save Changes</button>');
   $('#myModal').modal('toggle');
 }

 function saveChanges(index){
   var title=$('#editTitle').val();
   var artist=$('#editArtist').val();
   var genre=$('#editGenre').val();


   //set the selcted song equal to a new Song created from the input field values

   songs[index] = new Song(title,artist,genre);
   //clear out the input
   $('#editTitle').val('');
   $('#editArtist').val('');
   $('#editGenre').val('');
      $('#myModal').modal('toggle');
   displaySongs();
 }
function deleteSong(a){
  songs.splice(a, 1);
  displaySongs();
}

//<button type="button" class="btn btn-primary">Save changes</button>
//function removeSong(postIndex){
//  songs.splice(postIndex, 1)
