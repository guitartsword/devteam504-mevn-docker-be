import mongoose from 'mongoose';

export const connectToDb = (uri: string) => {
  if (process.env.NODE_ENV !== 'test') {
    console.log('Connecting to: ', uri);
  }
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
}

export const disconnectFromDb = () => {
  return mongoose.disconnect();
}
