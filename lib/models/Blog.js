import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;
const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
});
const Blog = mongoose.models.blogs || mongoose.model('blogs', BlogSchema);
export default Blog;