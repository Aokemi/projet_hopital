import mongoose from "mongoose";
import bcrypt from "bcrypt"

// Le modèle pour les utilisateurs

let userSchema = mongoose.Schema(
  {
    login: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "User",
    }
  },
  {
    timestamps: true,
  }
);

// Hachage du mot de passe
// Ce hook va se déclencher avant que la fonction save (User.save()) soit déclenché dans userController.js
userSchema.pre("save", function (next){
  if(!this.isModified("password")){
    return next()
  }
  this.password = bcrypt.hashSync(this.password, 10) // là, je hache mon mot de passe 10 fois pour des questions de sécurité
  next()
})

let User = mongoose.model("User", userSchema);

export default User;