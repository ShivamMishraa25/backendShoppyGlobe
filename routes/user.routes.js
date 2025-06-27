import { userLogin, userRegister } from "../controllers/user.controller.js"; // import all user controller logics

// define all the user paths and their respective controller logics
export function userRoutes(app) {
    app.post("/register", userRegister);
    app.post("/login", userLogin);
}