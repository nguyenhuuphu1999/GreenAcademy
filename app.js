var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var Booking_test_driving = require('./routes/Booking_test_driving/Booking_test_driving')
var app = express();
var Category = require('./routes/Category/Category')
var Color = require('./routes/Color/Color')
var Customer = require('./routes/Customer/Customer')
var Detail_each_product = require('./routes/Detail_each_product/Detail_each_product')
var News = require('./routes/News/News')
var Order_bill = require('./routes/Order_bill/Order_bill')
var Product = require('./routes/Product/Product')
var Promotion = require('./routes/Promotion/Promotion')
var Theme_banner = require('./routes/Theme_banner/Theme_banner')
var Nguoi_dung = require('./routes/Nguoi_dung/Nguoi_dung')


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/booking_test_driving',Booking_test_driving)
app.use('/category',Category)
app.use('/color',Color)
app.use('/customer',Customer)
app.use('/detail_each_product',Detail_each_product)
app.use('/news',News)
app.use('/order_bill',Order_bill)
app.use('/product',Product)
app.use('/promotion',Promotion)
app.use('/theme_banner',Theme_banner)
app.use('/nguoi_dung',Nguoi_dung)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
