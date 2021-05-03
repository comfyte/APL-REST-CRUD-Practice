import { getHandler, putHandler, deleteHandler } from "../../../handlers";

export default function (req, res) {
    switch (req.method) {
        // Read
        case "GET":
            getHandler(req, res);
            break;

        // Update
        case "PUT":
            putHandler(req, res);
            break;

        // Delete
        case "DELETE":
            deleteHandler(req, res);
            break;

        // Handle other unknown methods
        default:
            res.status(405).end();
            break;
    }
}