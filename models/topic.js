import mongoose from 'mongoose';

const TopicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    descriptions: {
        type: String,
        required: true,
    },
}, { timestamps: true });

// Avoid model overwrite error in Next.js
const Topic = mongoose.models.Topic || mongoose.model('Topic', TopicSchema);

export default Topic;
