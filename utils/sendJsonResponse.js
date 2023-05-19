export default sendJsonResponse = (res, status, obj) =>
  res.status(status).json(obj);
