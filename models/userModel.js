const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    
},
email:{
    type: String,
    required: true,
    trim: true

},
password:{
type: String,
required: true,
trim: true
},

role: {
        type: Number,
        default: 0 // 0-normal user, 1- admin ko lagi use,....
    
    },
isVerified: {
    type: Boolean,
    default: false
}
},{timestamps: true})

// createAt, updateAT
//  _id: default by mongodb= 24bit hex hcaracters (type:objectID)

module.exports = mongoose.model('User', userSchema)
