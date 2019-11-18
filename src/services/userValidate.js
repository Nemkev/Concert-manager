import joi from "joi";

export default joi.object().keys({
  firstName: joi
    .string()
    .alphanum()
    .pattern(/^[0-9]+$/)
    .min(1),
  lastName: joi
    .string()
    .alphanum()
    .pattern(/^[0-9]+$/)
    .min(1),
  hashPassword: joi
    .string()
    .min(8)
    .max(16),
  settings: joi.array(),
  role: joi.string()
});
