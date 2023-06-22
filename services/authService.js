import * as bcrypt from "bcryptjs"


const authServiceFactory =  () =>{  
    
    const validate = async (password, dbPassword) =>{
      return true
      //return await (bcrypt.compare(encPass, encDbPass))
    }

    return {validate}
};

module.exports = {
  authServiceFactory
};