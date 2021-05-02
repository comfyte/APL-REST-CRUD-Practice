import { putHandler } from "../../../handlers/put";

 export default function employeeApiHandler(request, response) {
    switch (request.method) {
        // Create
        case "POST":
            break;

        // Read
        case "GET":
            break;

        // Update
        case "PUT":
            putHandler(request, response);
            break;

        // Delete
        case "DELETE":
            break;

        default:
            response.status(405);
            response.end();
            break;
    }
}