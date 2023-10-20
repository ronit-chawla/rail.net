// Require Statements
const express = require('express');
const mongoose = require('mongoose');

const ticketRoutes = require('./routes/ticket');
const travelRoutes = require('./routes/travel');

// JSSON Parser and Headers
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE'
  );
  next();
});

// ROUTES
app.use('/tickets', ticketRoutes);
app.use('/travel', travelRoutes);

// DB Setup
mongoose.Promise = Promise;
mongoose
  .connect(mongoURL, {
    keepAlive          : true,
    useNewUrlParser    : true,
    useUnifiedTopology : true,
  })
  .then(() =>
    app.listen(3000, () =>
      console.log(
        `connect to DB and started server at port 3000`
      )
    )
  )
  .catch(e => console.log(e));
