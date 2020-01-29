import joi from "joi";

export default joi.object().keys({
  name: joi
    .string()
    .min(1)
    .max(50),
  placeSchema: joi.array()
});
