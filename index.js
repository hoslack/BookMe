const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
require('./routes/authRoutes')(app);

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
