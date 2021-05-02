import { writeData, readData } from "../data-helpers";
import { Karyawan } from "../data-model";

/**
 * PUT request handler
 * @param {import("next").NextApiRequest} request
 * @param {import("next").NextApiResponse} response 
 */
export function putHandler(request, response) {
    if (request.headers["content-type"] !== "application/json") {
        response.status(415);
        response.end();
        return;
    }

    if (!request.query || !request.query.empId) {
        response.status(400).end();
        return;
    }

    const { nama, posisi } = request.body;
    if (!nama || !posisi) {
        response.status(400).end();
        return;
    }

    const existingData = readData();
    const newData = existingData.filter((x) => x.id_karyawan !== request.query.empId);
    newData.push({
        id_karyawan: request.query.empId,
        nama,
        posisi
    });
    writeData(newData);
    response.status(200).end();
}