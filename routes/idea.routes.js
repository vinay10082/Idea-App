const ideaController = require("../controllers/idea.controller");

/**
 * Define foure for the calls like
 * 
 * GET 127.0.0.1:8000/ideaApp/v1/ideas
 */

module.exports = (app) => {
    //GET call
    app.get("/ideaApp/v1/ideas" , ideaController.fetchAllIdeas);

    //POST call
    app.post("/ideaApp/v1/ideas", ideaController.createIdea);

    //PUT call
    app.put("/ideaApp/v1/ideas/:id", ideaController.updateIdea);

    //DELETE call
    app.delete("/ideaApp/v1/ideas/:id", ideaController.deleteIdea);
}