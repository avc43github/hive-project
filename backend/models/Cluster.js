
const mongoose = require('mongoose');

const clusterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    maxlength: 500
  },
  banner: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: 'honey'
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  moderators: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  isPrivate: {
    type: Boolean,
    default: false
  },
  rules: [{
    title: String,
    description: String
  }],
  tags: [{
    type: String,
    trim: true
  }],
  challenges: [{
    title: {
      type: String,
      required: true
    },
    description: String,
    startDate: Date,
    endDate: Date,
    participants: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }]
  }]
}, {
  timestamps: true
});

// Create indexes for efficient querying
clusterSchema.index({ name: 'text', description: 'text', tags: 'text' });

const Cluster = mongoose.model('Cluster', clusterSchema);

module.exports = Cluster;
