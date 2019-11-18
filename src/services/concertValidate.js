import joi from "joi";

export default joi.object().keys({
  name: joi
    .string()
    .min(1)
    .max(50),
  date: joi
    .date()
    .utc()
    .format(["YYYY/MM/DD", "DD-MM-YYYY"]),
  description: joi
    .string()
    .min(15)
    .max(200),
  price: joi.number()
});
