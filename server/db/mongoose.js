var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://mbell:cookies@ds147599.mlab.com:47599/todo-app-api');

module.exports = {mongoose};
