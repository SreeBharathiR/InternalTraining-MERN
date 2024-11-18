import User from "../Models/User.js";
export async function getAllStudentUser(req, res, next) {
  try {
    const { sort, fields, page, limit, ...filterFields } = req.query;
    //filtering
    console.log(typeof filterFields);
    let queryUser = User.find(filterFields);
    //sorting
    console.log(typeof sort);
    if (sort) {
      const sortBy = sort.split(",").join(" ");
      queryUser = queryUser.sort(sortBy);
      console.log(queryUser);
    }
    // limiting fields
    if (fields) {
      const fieldStr = fields.split(",").join(" ");
      queryUser = queryUser.select(fieldStr);
    }
    //pagenation
    const PageNum = page * 1;
    const limitNum = limit * 1;
    const skipNum = (PageNum - 1) * limitNum;
    queryUser = queryUser.skip(skipNum).limit(limitNum);
    const users = await queryUser;
    res.status(200).json({
      message: "Success",
      users,
    });
  } catch (err) {
    next(err);
  }
}
export async function getStudentById(req, res, next) {
  console.log(req.params.id);
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      return res.status(200).json({
        message: "Success",
        user,
      });
    }
    return res.status(404).json({
      message: "User not found",
    });
  } catch (err) {
    next(err);
  }
}
export async function getStudentByEmail(req, res, next) {
  console.log(req.body.email);
  try {
    const user = await User.findOne({ email: req.body.email });

    res.status(200).json({
      message: "Success",
      user,
    });
  } catch (err) {
    next(err);
  }
}
export async function createStudentUser(req, res, next) {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      message: "Success",
      user,
    });
  } catch (err) {
    next(err);
  }
}
export async function UpdateStudentUser(req, res, next) {
  const { name, email, password } = req.body;
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      name,
      email,
      password,
    });

    res.status(200).json({
      message: "Success",
      user,
    });
  } catch (err) {
    next(err);
  }
}
