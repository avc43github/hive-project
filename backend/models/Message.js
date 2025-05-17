
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  cluster: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cluster'
  },
  content: {
    type: String,
    required: true
  },
  media: {
    type: String,
    default: null
  },
  mediaType: {
    type: String,
    enum: ['image', 'video', 'audio', null],
    default: null
  },
  read: {
    type: Boolean,
    default: false
  },
  room: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// Create indexes for efficient querying
messageSchema.index({ sender: 1, recipient: 1, createdAt: -1 });
messageSchema.index({ cluster: 1, createdAt: -1 });
messageSchema.index({ room: 1, createdAt: -1 });

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
