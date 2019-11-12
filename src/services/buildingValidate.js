import joi from "joi";

export default joi.object().keys({
    city: joi
    .string()
    .required()
    .min(3)
    .max(30),
    concerts: joi.array().max(7).min(1),
    /*coordinates*/
});
