import mongoose from 'mongoose';

export default (db: string) => {
    const connect = () => {
        mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
            .then(() => {
                return console.log('Successfully connected to the database');
            })
            .catch(error => {
                console.log("Error connection to database: ", error);
                return process.exit(1);
            });
    };
    connect();

    mongoose.connection.on("disconnected", connect);
};
