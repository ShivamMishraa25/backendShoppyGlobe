import { userLogin, userRegister } from "../controllers/user.controller.js"; // import all user controller logics

// define all the user paths and their respective controller logics
export function userRoutes(app) {
    app.post("/register", userRegister); // to register the user
    app.post("/login", userLogin); // for user to login and get a jwt token
}