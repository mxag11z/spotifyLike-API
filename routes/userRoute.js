const express = require('express');
const router = express.Router();
const Services = require('../services/userServices');


//Obtiene todos los usuarios
router.get('/',(req,res)=>{
    const users = Services.getAll();
    res.status(200).json({
        message:'here are your users',
        users
    });
});
//query
router.get('/', 
    (req, res) => {
        const clients = Services.getAll();
        res.status(200).json({
            message: 'Here are your clients',
            clients
        });
    }
);

//Obtiene solo un user en especifico

router.get('/:id',(req,res)=>{
    const {id} = req.params;
    const user = Services.getOne(id);
    res.status(200).json({
        message: 'This is your user',
        user
    })
})

//Crea un usuario 

router.post('/',(req,res)=>{
    const data = req.body;
    const confirmation = Services.create(data);
    res.status(201).json({
        confirmation
    })
})

//Sigue una playlist

router.post('/follow-playlist/:userId/:playListId',(req,res)=>{
   const userId = req.params.userId;
  const playListId = req.params.playListId;
  const confirmation = Services.followPlaylist(userId,playListId);
  res.status(201).json({
    message:'Started following playlist!',
    confirmation
  });
});

//cambiar nombre de usuario

router.patch('/update-name/:id', 
    (req, res) => {
        const { newName } = req.body;
        const { userId} = req.params;
        const confirmation = Services.updateName(userId, newName);
        res.status(200).json({
            confirmation
        });
    }
);

//Dejar de seguir playList

router.delete('/unfollow-playlist/:userId/:playListId', 
    (req, res) => {
        const userId = req.params.userId;
        const playlistId = req.params.playListId;
        const confirmation = Services.unFollowPlayList(userId,playlistId);
        res.status(200).json({
            meesage:'Stopped following playlist!',
            confirmation
        });
    }
);

//Eliminar usuario
router.delete('/:id', 
    (req, res) => {
        const { id } = req.params;
        const confirmation = Services.deleteUser(id);
        res.status(200).json({
            confirmation
        });
    }
);

module.exports = router;