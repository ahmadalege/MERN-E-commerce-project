const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((error) => {
    if (!res.headersSent) {
      // ✅ Check if a response has already been sent
      res.status(500).json({ message: error.message });
    } else {
      next(error); // Pass the error to the next middleware
    }
  });
};

export default asyncHandler;
