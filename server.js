const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const passport = require('passport');

const app = express();
const PORT = process.env.PORT || 3001;

require('./config/passport');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));
app.use(passport.initialize());

// Connect to MongoDB
mongoose
	.connect(
		process.env.MONGODB_URI ||
			'mongodb+srv://XavierG13:Finnick2014@cluster0.kqxpg.mongodb.net/fitgifts?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		}
	)
	.then(() => console.log('MongoDB successfully connected'))
	.catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server up and running on port ${PORT} !`));
