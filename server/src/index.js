const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();
// ====================================================================
const userRoute = require('./routes/userRoute')
// ====================================================================

require('dotenv').config();
app.use(cors());
app.use(express.json());

// =========================== conection BD ===========================
connectDB();

// ============================== RUTES ===============================
app.use('/api/users',userRoute)
// ====================================================================


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


// =============================== TEST ===============================
// const axios = require('axios');

// async function crearUsuarioPrueba() {
//   try {
//     const response = await axios.post('http://localhost:3000/api/users/create', {
//       username: 'usuarioApi',
//       email: 'usuarioapi@example.com',
//       password: '123456'
//     });
//     console.log('✅ Usuario creado desde API:', response.data);
//   } catch (error) {
//     console.error('❌ Error al crear usuario desde API:', error.response?.data || error.message);
//   }
// }

// // Espera unos segundos a que el servidor esté listo
// setTimeout(crearUsuarioPrueba, 2000);
