import { getAllHandler, postHandler } from "../../../handlers";

export default function (req, res) {
    switch (req.method) {
        // Get all entries
        case "GET":
            getAllHandler(req, res);
            break;

        // Create
        case "POST":
            postHandler(req, res);
            break;

        // Handle other unknown methods
        default:
            res.status(405).end();
            break;
    }
}