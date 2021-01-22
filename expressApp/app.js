const express = require('express');
const eventsRouter = require('./routers/eventRouter');
const membersRouter = require('./routers/memberRouter');
const attendanceRouter = require('./routers/attendanceRouter');
const dotenv = require('dotenv');
const dbConnect = require('./db/dbConnect');

dotenv.config({
  path: './config/config.env'
});

dbConnect();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/api/events/', eventsRouter);
app.use('/api/members/', membersRouter);
app.use('/api/attendance/', attendanceRouter);

app.use((err, req, res, next) => {
  const { statusCode, errorMessage } = err;

  res.status(statusCode).send({
    errorMessage
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
