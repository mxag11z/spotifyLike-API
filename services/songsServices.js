const db = require('../lib/songsModel');

class Song{
    constructor(){

    }


    static getAll(){
        const songs = db;
        return songs;
    }

    static getOne(id){
        const songId = `s${id}`;
        const song = db[songId];
        return {songId,song};
    }

    static create(data){
        const dbLength = Object.keys(db).length;
        const songId = 's'+(dbLength+1);
        db[songId]=data;
        return true;
    } 

    static updateSongName(id,newName){
        const {songId} = Song.getOne(id);
        db[songId].name = newName;
        return true;
    }

    static delete(id){
        const {songId} = Song.getOne(id);
        delete db[songId];
        return true;
    }

}

module.exports=Song;