import app from './app';
import { connectToDb } from './databaseConnection';


const port = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/test';

(async() => {
  if (!DATABASE_URL) {
    console.log('MONGO_URI not provided');
    return
  }
  await connectToDb(DATABASE_URL);
  app.listen(process.env.PORT || 3000, function () {
    console.log(`App is listening on port ${port}!`);
  });
})()
