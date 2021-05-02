import { writeData, readData } from "../data-helpers";
import { Karyawan } from "../data-model";

/**
 * DELETE request handler
 * @param {import("next").NextApiRequest} request
 * @param {import("next").NextApiResponse} response 
 */
export function deleteHandler(request, response) {
    response.status(200).end();
}