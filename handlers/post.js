import { writeData, readData } from "../data-helpers";
import { Karyawan } from "../data-model";

/**
 * POST request handler
 * @param {import("next").NextApiRequest} request
 * @param {import("next").NextApiResponse} response 
 */
export function postHandler(request, response) {
    if (request.headers["content-type"] !== "application/json") {
        response.status(415).end();
        return;
    }

    const { id_karyawan, nama, posisi } = request.body;
    if (!id_karyawan || !nama || !posisi) {
        response.status(400).end();
        return;
    }

    const existingData = readData();

    if(existingData.filter(emp => emp.id_karyawan === id_karyawan).length > 0) {
        response.status(400).end();
        return; 
    }

    existingData.push(new Karyawan(id_karyawan, nama, posisi));
    writeData(existingData);
    response.status(201).end();
}