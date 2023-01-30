const joi = require('joi');

const findOrDelMeetingValidation = joi.object({
        id: joi.number().integer().min(1).required()    
});

const addMeetingValidation = joi.object({
        topic: joi.string().required(),
        tag: joi.string().required(), 
        date: joi.date().required(), 
        place: joi.string().required(),     
});

const updateMeetingValidation = joi.object({
        id: joi.number().integer().min(1).required(),    
        topic: joi.string().required(),
        tag: joi.string().required(), 
        date: joi.date().required(), 
        place: joi.string().required(),     
});


  
module.exports = {
        findOrDelMeetingValidation,
        addMeetingValidation,
        updateMeetingValidation
}