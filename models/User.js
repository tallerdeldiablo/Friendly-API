const { Schema, model } = require('mongoose');

// Schema to create Thought model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true
      // match: /.+\@.+\..+/,
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts',
      },
    ],
    friends:[
      {
        type: Schema.Types.ObjectId,
        ref: 'Friends',
      }
    ]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('User', userSchema);

module.exports = User;
