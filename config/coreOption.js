const corsOptions = {
  origin: "https://example.com",
  methods: ["GET", "POST"],
  headers: ["Content-Type", "Authorization", "X-Requested-With"],
  exposedHeaders: ["Authorization"],
  credentials: true,
};

export default corsOptions;
