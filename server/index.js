const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Routes
const projectsRoute = require('./Routes/project');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/projects', projectsRoute);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Database Online");
    app.listen(PORT, () => {
        console.log(`Server online at ${PORT}`)
    });
});

