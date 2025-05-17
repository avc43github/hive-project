
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    maxlength: 500
  },
  media: [{
    type: String,
    url: String,
    mediaType: {
      type: String,
      enum: ['image', 'video', 'audio']
    }
  }],
  filter: {
    type: String,
    default: 'none'
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  collaborators: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  cluster: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cluster',
    default: null
  },
  visibility: {
    type: String,
    enum: ['public', 'cluster-only', 'private'],
    default: 'public'
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  comments: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    text: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  isCollaborative: {
    type: Boolean,
    default: false
  },
  versions: [{
    content: String,
    media: [{
      url: String,
      mediaType: String
    }],
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
});

// Create indexes for efficient querying
postSchema.index({ creator: 1, createdAt: -1 });
postSchema.index({ cluster: 1, createdAt: -1 });
postSchema.index({ createdAt: -1 });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
