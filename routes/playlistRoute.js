const express = require('express');
const router = express.Router();
const Services = require('../services/playlistServices');

//Obten todos las playlists

router.get('/',(req,res)=>{

    const playlists = Services.getAll();
    res.status(200).json({
        message:'Here are your playlist',
        playlists
    })
});

//Obten una playlist en especifico

router.get('/:id',(req,res)=>{
    const {id} = req.params;
    const playlist = Services.getOne(id);
    res.status(200).json({
        message: 'This is your playlist',
        playlist
    })
});

//Crea una nueva playlist

router.post('/',(req,res)=>{
    const data = req.body;
    const confirmation = Services.createPlaylist(data);
    res.status(201).json({
        confirmation
    })
});

//Añade una cancion a la playlist

router.post('/add-song/:playlistId/:SongId',(req,res)=>{
    const songId=req.params.SongId;
    const playlistId=req.params.playlistId;
    const confirmation = Services.addSongtoPlaylist(playlistId,songId);
    res.status(201).json({
        confirmation
    })
});

//Elimina cacnion de la playlist
router.delete('/delete-song/:playlistId/:songId', 
    (req, res) => {
    const songId=req.params.songId;
    const playlistId=req.params.playlistId;
        const confirmation = Services.deleteSongFromPlaylist(playlistId,songId);
        res.status(200).json({
            confirmation
        });
    }
);
//Elimina playlist
router.delete('/:id', 
    (req, res) => {
        const { id } = req.params;
        const confirmation = Services.deletePlaylist(id);
        res.status(200).json({
            confirmation
        });
    }
);

module.exports = router;
