import { userLogin, userRegister } from "../controllers/user.controller.js";

export function userRoutes(app) {
    app.post("/api/user/register", userRegister);
    app.get("/api/user/login", userLogin);
}