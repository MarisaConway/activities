const Activities = require('../controllers/activities'),
        Reviews = require('../controllers/reviews');

module.exports = function(app) {
    //activities are here

    app.get("/activities", Activities.getAll);
    app.post("/activities", Activities.create);
    app.get('/activities/:_id', Activities.getOne); //or findOne
    app.put('/activities/:_id', Activities.update);
    app.delete('/activities/:_id', Activities.delete);

    //reviews are here

    app.post("/activities/:_id/review", Reviews.create); //not neccessary when only using one controller and model

}