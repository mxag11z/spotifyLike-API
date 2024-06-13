const db = require('../lib/userModel');
//const Playlist = require('./playlistServices');
const playListServices = require('./playlistServices');

class User{

        constructor(){}
        
        static getAll(){
            const users = db;
        return users;
        }

        static getOne(id){
            const userId = 'u'+id;
            const user = db[userId];
            return{userId,user}; 
        }

        static create(data){
            const dbLength = Object.keys(db).length;
            const userId = 'u' + (dbLength + 1);
            db[userId] = data;
            return true;
        }

        static updateName(id,newName)
        {
            const {userId} = User.getOne(id);
            db[userId].name=newName;
            return true;
        }
        
        static followPlaylist(id,playListId){
            const {userId} = User.getOne(id);//obtenemos el id del usuario al que le deseamos añadir la playlist
            const playlistTemp = playListServices.getOne(playListId);//Obtenemos todo el objeto de la playlist que queremos
            //verificamos la longitud las playlist que tiene el usuario para poder agregar las playlist
            const nestedDbLength = Object.keys(db[userId].playlists);
            const nestedPlaylistId = 'plist'+(nestedDbLength+1);
            //para añadir la playlist 
            db[userId].playlists[nestedPlaylistId] = playlistTemp;
            //aumentamos de seguidor la playlist
            playListServices.increasePlaylistFollowers(playListId);
            return true;
        }

        static unFollowPlayList(id,playListId){
            const {userId}=User.getOne(id);
            const newId = 'p'+playListId;
            delete db[userId].playlists[newId];
            return true;


        }

        static deleteUser(id){
            const {userId} = User.getOne(id);
            delete db[userId];
            return true;
        }


}

module.exports = User;