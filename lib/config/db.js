import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://Kubilay:YdhTouCOUkYwEIKQ@cluster0.gk3lmtj.mongodb.net/blogapp?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("DB Connected");
};
