import { readData } from "../data-helpers";

/**
 * GET request handler (for all employees)
 * @param {import("next").NextApiRequest} request
 * @param {import("next").NextApiResponse} response 
 */
export function getAllHandler(request, response) {
    const data = readData();
    response.status(200).json(data);
}