import { writeData, readData } from "../data-helpers";

/**
 * DELETE request handler
 * @param {import("next").NextApiRequest} request
 * @param {import("next").NextApiResponse} response 
 */
export function deleteHandler(request, response) {
    if (!request.query || !request.query.empId) {
        response.status(400).end();
        return;
    }
    
    const existingData = readData();

    if (existingData.filter(x => x.id_karyawan === request.query.empId).length === 0) {
        response.status(404).end();
        return;
    }
 
    const newData = existingData.filter(x => x.id_karyawan !== request.query.empId);
    writeData(newData);
    response.status(200).end();
}