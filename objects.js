var playlist = {
  artistName: 'song title'
};

function updatePlaylist(playlistt, artistname, songtitle) {
  
  playlistt[artistname] = songtitle;
 
  return playlistt;
  
}

function removeFromPlaylist(playlistt, artistname) {
  
  delete playlistt.artistname;
  
}