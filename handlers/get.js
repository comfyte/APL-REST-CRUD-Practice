import { writeData, readData } from "../data-helpers";
import { Karyawan } from "../data-model";

/**
 * GET request handler
 * @param {import("next").NextApiRequest} request
 * @param {import("next").NextApiResponse} response 
 */
export function getHandler(request, response) {
    response.status(200).end();
}