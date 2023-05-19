import express from "express";
import cors from "cors";
import corsOptions from "./config/coreOption";
import router from "./routes";
import {
  errorLogger,
  errorHandler,
  invalidPathHandler,
} from "./middleware/errorHandler";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use(cors(corsOptions));

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Logging errors before sending response
app.use(errorLogger);

// Handle error
app.use(errorHandler);
// Handle if invalid path request
app.use(invalidPathHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
