var mongoose = require('mongoose');
require('../models/models.js');


var Pet = mongoose.model('Pet'); //Any name is okay


module.exports={
    all_pets: function(req,res){
        Pet.find({}, function(err, pets){
         
            if(err){
                console.log("Error:", err);
            } else{
                return res.json({message: "Here are all the Pets!", pets:pets})
            }
        }).sort({"type":1});
    },

    add_pets: function(req,res){
        thename = req.body.name
        thetype = req.body.type
        thedescription = req.body.description
        theskill1 = req.body.skill1
        theskill2 = req.body.skill2
        theskill3 = req.body.skill3

        // console.log('HERE IS CONTROLLER')
        
        var new_pet = new Pet ({
            name: thename,
            type: thetype,
            description: thedescription,
            skill1: theskill1,
            skill2: theskill2,
            skill3: theskill3,
        });
       
        new_pet.save(function(err, pet){
            if(err){
                res.json({message: "Could not save new task", errors:err})
            } else{
                res.json({message: 'succes!!!!!', data: pet})
                // res.redirect('/')
            }
        });
    },

    find_pet: function(req,res){
        Pet.findOne({_id:req.params._id}, function(err, pet){
            if(err){
                res.json({message: "Error", error:err});
            } else {
                res.json({message: "Success", pet: pet})
            }
        });
    },

    delete_pet: function(req,res) {
        Pet.findOneAndDelete({_id:req.params._id}, function(err, pet){
            if(err){
                res.json({message: "error", error:err})
            } else{
                res.json({message: "removed pet!", data: pet});
            }
        })
    },

    update_pet: function(req,res){
        Pet.findOne({_id:req.params._id}, function(err, pet){

            pet.name = req.body.name;
            pet.type = req.body.type;
            pet.description = req.body.description;
            pet.skill1 = req.body.skill1;
            pet.skill2 = req.body.skill2;
            pet.skill3 = req.body.skill3;

            pet.save(function(err, pet){
                if(err){
                    res.json({message: "Could not edit this pet", error:err})
                } else{
                    res.json({message: 'success!!!!!', data: pet})
                    // res.redirect('/')
                }
            });
        });
    },

    update_like: function(req,res){
        Pet.findOne({_id:req.params._id}, function(err, thispet){
            console.log('HERE IS CONROLLER.JS')
            var countlike = thispet.like_count;
            countlike++;
            thispet.like_count = countlike;

            thispet.save(function(err, author){
                if(err){
                    res.json({message: "Could not update like", error:err})
                } else{
                    res.json({message: 'liked one!', data: author})
                    // res.redirect('/')
                }
            });
        });
    },
}