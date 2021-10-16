import mongoose from "mongoose";

mongoose.Promise = global.Promise;

//Funcion para conectar a la base de datos
    //@param {string} url
const connet = async (url) => {
    mongoose.connet(url, {
        useNewUrlParser: true,
    });
};

export default Connect;