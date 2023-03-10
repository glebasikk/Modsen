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


const filteredMeetings = joi.object({
        id: joi.number().integer().min(1),    
        topic: joi.string(),
        tag: joi.string(), 
        date: joi.date(), 
        place: joi.string(),     
});
const addGuestValidator = joi.object({
        id: joi.number().required(),
        userId: joi.number().required(),
        meetingId: joi.number().required(),   
});

const registrationAndAuthValidation = joi.object({
        username: joi.string().required(),
        password: joi.string().required()    
});

const refreshTokenValidator = joi.object({
        userId: joi.number().required(),
        username: joi.string().required(),
        type: joi.string().required(),
        role: joi.string().required(),
});
  
module.exports = {
        findOrDelMeetingValidation,
        addMeetingValidation,
        updateMeetingValidation,
        filteredMeetings,
        registrationAndAuthValidation,
        addGuestValidator,
        refreshTokenValidator
}