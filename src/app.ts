import "reflect-metadata";
import express from "express";
import "express-async-errors";
import userRoutes from "./routes/users.routes";
import sessionRoutes from "./routes/session.routes";
import handleError from "./errors/handleError";
import propertiesRoutes from "./routes/properties.routes";
import categoriesRoutes from "./routes/categories.routes";
import schedulesUsersPropertiesRoutes from "./routes/schedulesUsersProperties.routes";

const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/properties", propertiesRoutes);
app.use("/categories", categoriesRoutes);
app.use("/schedules", schedulesUsersPropertiesRoutes);

app.use(handleError);

export default app;
