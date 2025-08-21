import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
  title: { type: String },
  subtitle: { type: String },
  content: { type: String, required: true },
  meaning: { type: String },
  image: { type: String },
});
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;
