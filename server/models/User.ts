import mongoose from 'mongoose';

const user = new mongoose.Schema({
  id: {
    required: true,
    type: String,
  },
  username: {
    required: true,
    type: String,
  },
});

export default mongoose.model('users', user);
