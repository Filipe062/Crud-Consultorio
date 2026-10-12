import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/consultorio_medico');

        console.log('Conectado ao banco de dados MongoDB');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados MongoDB:', error.message);
        process.exit(1);
    }
};

export default connectDB;