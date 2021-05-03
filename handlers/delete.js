import { writeData, readData } from "../data-helpers";

/**
 * DELETE request handler
 * @param {import("next").NextApiRequest} request
 * @param {import("next").NextApiResponse} response 
 */
export function deleteHandler(request, response) {
    if (request.headers["content-type"] !== "application/json") {
        response.status(415).end();
        return;
    }

    if (!request.query || !request.query.empId) {
        response.status(400).end();
        return;
    }
    
    const existingData = readData();
 
    const newData = existingData.filter(x => x.id_karyawan !== request.query.empId);
    writeData(newData);
    response.status(200).end();
}