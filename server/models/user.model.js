const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'User name is required.'],
        minlength: [2, 'User name must be at least 2 characters.'],
        validate: [userNameCheck, 'User name already exists.'],
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        validate: [emailValidator, 'Please enter a valid email address.'],
        validate: [emailCheck, 'Email already exists.'],
    },
    password: {
        type: String,
        required: [true, 'Password is required.'],
        minlength: [true, 'Password must be at least 6 characters.'],
        validate: [passwordValidator, 'Password must contain at least one uppercase, lowercase and numeric character.']
    },
    rooms: {
        type: Array,
    },
    currentSocket: {
        type: String,
    }
}, { timestamps: true });

userSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

userSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Passwords must match.');
    };
    next();
});

userSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

function emailValidator(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

function passwordValidator(pass) {
    const num = /[0-9]/
    const lowerCase = /[a-z]/
    const upperCase = /[A-Z]/
    if (num.test(String(pass)) && lowerCase.test(String(pass)) && upperCase.test(String(pass))) {
        return true;
    } else {
        return false;
    };
};

async function emailCheck(email) {
    const user = await User.findOne({ email: email });
    if (user === null) {
        return true;
    } else {
        return false;
    };
};

async function userNameCheck(userName) {
    const user = await User.findOne({ userName: userName });
    if (user === null) {
        return true;
    } else {
        return false;
    };
};

const User = mongoose.model('User', userSchema);
module.exports = User;