const UserSignupDetails  = require('../models/schema');

module.exports = {
    userSignupData : ()=>{
        return new Promise(async(resolve,reject)=>{
            const isUserExist = await UserSignupDetails.findOne({$or:[{email:data.email},{firstnme:data.firstname}]});
            if(isUserExist){
                console.log("already exist");
            }else{
                const userData = new UserSignupDetails({...data});
                userData.save().then((result)=>{
                    resolve(result);
                }).catch(err=>{
                    reject(err);
                })
            }
        })
    }
}