import { writeData, readData } from "../data-helpers";
import { Karyawan } from "../data-model";

/**
 * POST request handler
 * @param {import("next").NextApiRequest} request
 * @param {import("next").NextApiResponse} response 
 */
export function postHandler(request, response) {
    response.status(200).end();
}