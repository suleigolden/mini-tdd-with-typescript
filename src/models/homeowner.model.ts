import mongoose from "mongoose";
import bcrypt from "bcrypt";

export interface HomeownerInput {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  mobile: string;
  isActive?: boolean;
  password: string;
}

export interface HomeownerDocument extends HomeownerInput, mongoose.Document {
  fullName: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const HomeownerSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true},
  firstName: { type: String, required: true},
  lastName: { type: String, required: true},
  address: { type: String, required: true},
  mobile: { type: String, required: true},
  password: { type: String, required: true},
});

HomeownerSchema.index({ email: 1 });

HomeownerSchema.virtual("fullName").get(function (this: HomeownerDocument) {
  return `${this.firstName} ${this.lastName}`;
});

HomeownerSchema.pre(
  "save",
  async function (this: HomeownerDocument, next: mongoose.HookNextFunction) {
    
    if (!this.isModified("password")) return next();

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hashSync(this.password, salt);

    this.password = hash;

    return next();
  }
);

// Compare a Homeowner password with the hash
HomeownerSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  
  const homeOwner = this as HomeownerDocument;

  return bcrypt.compare(candidatePassword, homeOwner.password).catch((e) => false);
};

const HomeownerModel = mongoose.model<HomeownerDocument>("Homeowner", HomeownerSchema);
export default HomeownerModel;