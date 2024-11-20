import jwt from "jsonwebtoken";
const protect = async (req, res, next) => {
  let token;
  if (req.cookies.jwt) {
    token = req.cookies.jwt;
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRETKEY);
      req.user = decoded;
      return next();
    } catch (err) {
      return next(err);
    }
  }
  if (!token) {
    return res.status(401).json({
      message: "Not authorized, token not found",
    });
  }
};
export default protect;
