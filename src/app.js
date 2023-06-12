const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

//routes
const authRouter = require('./routes/auth.routes');
const userRouter = require('./routes/users.routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users',userRouter);

module.exports = app;