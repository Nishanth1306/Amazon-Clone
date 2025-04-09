import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  resetPasswordOTP: String,
resetPasswordExpires: Date,


  email: {
    type: String,
    required: true,
    unique: true,
    minlength:6,
    validate: {
      validator: function (email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
      },
      message: "Please enter a valid email address",
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    validate: {
      validator: function (password) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password);
      },
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, and one number and one special character",  
    },
  },
  verified: {
    type: Boolean,
    default: false,
  },
  verificationToken: String,
  addresses: [
    {
      name: String,
      mobileNo: String,
      houseNo: String,
      street: String,
      landmark: String,
      city: String,
      country: String,
      postalCode: String,
    },
  ],
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const User = mongoose.model("User", userSchema);

export default User;