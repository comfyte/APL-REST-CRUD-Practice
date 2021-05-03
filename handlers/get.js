import { readData } from "../data-helpers";

/**
 * GET request handler
 * @param {import("next").NextApiRequest} request
 * @param {import("next").NextApiResponse} response 
 */
export function getHandler(request, response) {
    if (!request.query || !request.query.empId) {
        response.status(400).end();
        return;
    }

    const data = readData().find(emp => emp.id_karyawan === request.query.empId);
    if (!data) {
        response.status(404).end();
        return;
    }
    response.status(200).json(data);
}