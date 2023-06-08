const response = require("../helpers/responese");
const jwt= require("jsonwebtoken")
const { JWT_SECRET } = require("../helpers/env")

module.exports = {
    login: async (req, res) => {
        try {
            const { email, password } = req.body 
            if (email === "admin@mail.com" && password === "123") {
                const data = {
                    email,
                    password,
                    role: 1,   // 1=admin
                };
                const token = await jwt.sign(data, JWT_SECRET); 
                return response(res, 200, { data: token, message: "Login success" })
            }else if ( email === "user@mail.com" && password === "123" ) {
                const data = {
                    email,
                    password,
                    role: 2, // 2-user
                }
                const token = await jwt.sign(data, JWT_SECRET); 
                return response( res, 200, { data: token, message: "Login success" } );
            }else {
                return response(res, 404, { message: "Email or Password wrong" })
                }
            } catch (error) {
            return response(res, 500);
            }
        },
}