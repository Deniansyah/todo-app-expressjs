const response = require("../helpers/responese");

module.exports = {
    list : async (req, res) => {
        // both ( usaer & admin )
        try {
            const data = [
                {
                    id: "",
                    title: "",
                    description: "",
                },
                {
                    id: "",
                    title: "",
                    description: "",
                }
            ];
            return response(res, 200, data)
        } catch (error) {
            return response(res, 500);
        }
    },
    detail : async (req, res) => {
        //only admin
        try {
            const id = req.params.id
            const data = {
                    id: "",
                    title: "",
                    description: "",
                }
            return response(res, 200, data)
        } catch (error) {
            return response(res, 500);
        }
    }
}