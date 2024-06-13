const db = require('../lib/playlistModel');
const songServices = require('./songsServices');

class Playlist{

    constructor (){}

    static getAll(){
        const playlists = db;
        return playlists;
    }
    static getOne(id){
        const playlistId = 'p'+id;
        const playlist = db[playlistId];
        return {playlistId,playlist};
    }

    static addSongtoPlaylist(id,songId){
        const songToAdd = songServices.getOne(songId);
        const {playlistId} = Playlist.getOne(id);

        const nestedSongLength = Object.keys(db[playlistId].canciones).length;
        const nestedSongId = 'sng'+(nestedSongLength+1);

        db[playlistId].canciones[nestedSongId] = songToAdd;
        
        return true;
    }
    
    static deleteSongFromPlaylist(id,songId){
        const {playListId} = Playlist.getOne(id);
        const newSongId = 'sng'+songId;
        delete db[playListId].canciones[newSongId];
        return true;
    }

    static increasePlaylistFollowers(id){
        const {playlistId,playlist} = Playlist.getOne(id);
        playlist.seguidores += 1;
        return true;
    }

    static createPlaylist(data){
        const playlistLength = Object.keys(db).length;
        const playlistId = 'p'+(playlistLength+1);
        db[playlistId] = data;
        return true;
    }

    static deletePlaylist(id){
        const {playlistId} = Playlist.getOne(id);
        delete db[playlistId];
        return true;
    }

}

module.exports = Playlist;