const errorHandler = (err, req, res, next) => {
  if (err.name === "ValidationError") {
    const errorMsg = Object.values(err.errors).map((el) => el.message);
    return res.status(400).json({
      message: "Validation Failed",
      errorMsg,
    });
  }
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "CastError - Invalid Id format",
      error: `Invalid ${err.path} : ${err.value}`,
    });
  }
  if (err.code === 11000) {
    const key = Object.keys(err.keyValue)[0];
    const value = err.keyValue.key;
    return res.status(400).json({
      message: `Duplicate field value ${key}:${value}`,
    });
  }
  res.status(500).json({
    message: "Failed",
    error: err.stack,
  });
};
export default errorHandler;
