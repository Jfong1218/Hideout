const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "{PATH} cannot be empty"],
        minlength: [3, "{PATH} must be at least {MINLENGTH} characters long"],
        validate: {
            validator: function(v){
                return /\S+@\S+\.\S+/.test(v);
            },
            message: props => `${props.value} is not a valid email address.`
        }
    },
    
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema)
