import { writeData, readData } from "../data-helpers";
import { Karyawan } from "../data-model";

/**
 * GET request handler (for all employees)
 * @param {import("next").NextApiRequest} request
 * @param {import("next").NextApiResponse} response 
 */
export function getAllHandler(request, response) {
    response.status(200).end();
}