const express = require('express');
const router = express.Router();
const Services = require('../services/songsServices');

//Obten todos las canciones

router.get('/',(req,res)=>{

    const users = Services.getAll();
    res.status(200).json({
        message:'Here are your users',
        users
    })
});

//Obten una cancion en especifico

router.get('/:id',(req,res)=>{
    const {id} = req.params;
    const user = Services.getOne(id);
    res.status(200).json({
        message: 'This is your user',
        user
    })
});

//Crea una cacnion nueva

router.post('/',(req,res)=>{
    const data = req.body;
    const confirmation = Services.create(data);
    res.status(201).json({
        confirmation
    })
});

//Actualiza el nombre de la cancion

router.patch('/update-song-name/:id', 
    (req, res) => {
        const {name} = req.body;
        const {userId} = req.params;
        const confirmation = Services.updateSongName(userId, name);
        res.status(200).json({
            confirmation
        });
    }
);

//Elimina cancion 

router.delete('/:id', 
    (req, res) => {
        const { id } = req.params;
        const confirmation = Services.delete(id);
        res.status(200).json({
            confirmation
        });
    }
);


module.exports=router;