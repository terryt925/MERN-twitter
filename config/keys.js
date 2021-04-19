// module.exports = {
//   mongoURI: "mongodb+srv://dev:yXaufCpyOURYR6aB@cluster0.sydmt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//   secretOrKey: "jdjc7duj"
// }

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}