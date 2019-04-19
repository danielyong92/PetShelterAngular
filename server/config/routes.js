var pets = require('../controllers/controllers');
var path = require('path')

module.exports = function(app){
    app.get('/pets', function (req, res) {
        // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
        pets.all_pets(req, res) ;
    })

    // Below is example of post method
    app.post('/create', function (req, res) {
        // console.log("HERE IS ROUTEEEEEE")
        pets.add_pets(req, res);
    })

    app.route('/pet/:_id')
      .get(function(req,res){
          pets.find_pet(req,res);
      })
      .put(function(req,res){
          pets.update_pet(req,res);
      })
      .delete(function(req,res){
          pets.delete_pet(req,res);
      });
    
      app.route('/petlike/:_id')
      .put(function(req,res){
          console.log('HERE IS MY ROUTESSSS')
        pets.update_like(req,res);
      });

}