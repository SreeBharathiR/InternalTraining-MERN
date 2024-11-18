const errorController = (req, res) => {
  console.log(req);
  res.status(404).json({
    message: "Page not found",
  });
};
export default errorController;
