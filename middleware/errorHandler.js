const errorLogger = (err, req, res, next) => {
  console.log(`error ${err.message}`);
  next(err); // calling next middleware
};

const errorHandler = (err, req, res, next) => {
  if (err.status === 401 && err.message === "Unauthorized") {
    const status = 401;
    const message = "Requires authentication";

    res.status(status).json({ message });

    return;
  }

  if (
    err.status === 401 &&
    err.code === "invalid_token" &&
    err.message === "Permission denied"
  ) {
    const status = 403;
    const { message } = err;

    res.status(status).json({ message });

    return;
  }

  const status = err.status || err.code || 500;
  const message = err.message || "internal err";

  res.status(status).json({ message });
};
const invalidPathHandler = (req, res) => {
  res.status(404);
  res.send("invalid path");
};

export default {
  errorLogger,
  errorHandler,
  invalidPathHandler,
};
