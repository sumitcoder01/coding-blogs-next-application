import { connect } from 'mongoose';
const mongoURI = process.env.MONGO;
const connectToMongo = async () => {
    await connect(mongoURI);
}
export default connectToMongo;