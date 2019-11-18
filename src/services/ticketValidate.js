import joi from "joi";

export default joi.object().keys({
  userId: joi
    .string()
    .required()
    .min(8)
    .max(12),

  buildingId: joi
    .string()
    .required()
    .min(8)
    .max(12),

  concertId: joi
    .string()
    .required()
    .min(8)
    .max(12),

  placeId: joi
    .string()
    .required()
    .min(8)
    .max(12),

  additionalIds: joi.array().unique()
});
