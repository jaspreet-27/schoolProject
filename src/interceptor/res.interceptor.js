
const responseInterceptor = (req, res, next) => {
    res.interceptSuccess = (status, message, data) => {
      const response = {
        status,
        message,
        data,
      };
      return res.send(response);
    };
  
    res.interceptError = (status, message) => {
      const response = {
        status,
        error: message,
      };
      return res.send(response);
    };
  
    next();
  };
  
  module.exports = responseInterceptor;
  
  