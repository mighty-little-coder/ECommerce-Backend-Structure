const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3010;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => console.log(`App running at http://localhost:${PORT}. Hold 'CTRL' and click the link to check it out! 🚀`));
});
