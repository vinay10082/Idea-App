const ideas = require("../models/idea.model");

/**
 * Search all idea
 */

exports.fetchAllIdeas = (req, res) => {
    res.status(200).send(ideas);
}


let idCount = 1;
/**
 * Create all idea
 */

exports.createIdea = (req, res) => {
    // res.status(200).send(ideas);

    //read the request body
    const idea = req.body;

    //Need to generate the next idea id
    idea.id = ++idCount;

    //Save it in the list of existing idea
    ideas[idCount] = idea;

    //return the response
    res.status(201).send(ideas[idCount]);
}

/**
 * Update all idea
 */

exports.updateIdea = (req, res) => {

    //I need 
    const ideaId = req.params.id;

    //if the idea is present, modify else return error
    if(ideas[ideaId]){
        
        ideas[ideaId] = req.body;
        res.status(200).send(ideas[ideaId]);
    }
    else{
        res.status(400).send({
            message: 'idea Id passed was nod correct'
        })
    }
}


/**
 * Delete all idea
 */
exports.deleteIdea = (req, res) => {

    //Check if present - yes delete, no return error message

    if(ideas[req.params.id]){
        delete ideas[req.params.id];
        res.status(200).send({
            message : "Successfully deleted"
        })
    }
    else{
        res.status(400).send({
            message : " wrong idea id"
        })
    }
}

