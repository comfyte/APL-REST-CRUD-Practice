/**
 * Entry point if no empId is specified in the URL
 * @param {import("next").NextApiRequest} request
 * @param {import("next").NextApiResponse} response 
 */
export default function (request, response) {
    response.status(200).end();
}