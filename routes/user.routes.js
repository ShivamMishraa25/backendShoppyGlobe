import { userRegister } from "../controllers/user.controller.js";

export function userRoutes(app) {
    app.post("/api/user/register", userRegister);
}