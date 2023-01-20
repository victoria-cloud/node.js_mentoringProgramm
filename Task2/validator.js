import Joi from 'joi'

const userSchema = Joi.object({
    login : Joi.string().email().required(),
    password : Joi.string().regex(/^[a-zA-Z0-9]*$/).required(),
    age : Joi.number().min(4).max(130).required(),
    isDeleted : Joi.boolean().required()
})

function validateSchema (schema){
  return (req,res,next) =>{
    const {error}=schema.validate(req.body,{
      abortEarly:false,
      allowUnknown:false
    });
    if(error && error.isJoi){
      res.status(400).json(error.details.map(el=> el.message))
    }else{
      next()
    }
  }
}

 const validateUser = validateSchema(userSchema)
 export default validateUser
