require('dotenv').config();
const app = require("./app");

app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});

