const loggerMiddleware = (req, res, next) => {
  const start = new Date();

  res.on("finish", () => {
    const duration = new Date() - start;
    console.log(
      `${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`
    );
  });

  next();
};

module.exports = { loggerMiddleware };
