import joi from "joi";

export default joi.object().keys({
  rooms: joi
    .array()
    .required()
    .min(1)
    .max(5),
  concerts: joi
    .array()
    .max(7)
    .min(1),
  additionalId: joi.array()
});
