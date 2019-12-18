import joi from "joi";

export default joi.object().keys({
  firstName: joi
    .string()
    .min(2)
    .max(28),
  lastName: joi
    .string()
    .min(2)
    .max(28),
  hashPassword: joi
    .string()
    .min(8)
    .max(28),
  settings: joi.array(),
  role: joi.string(),
  id: joi.string(),
  email: joi.string()
});
