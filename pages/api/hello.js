/**
 *
 * req: HTTP incoming message
 *  res: HTTP server response
 */
export default function handler(req, res) {
    if (req.method !== "POST")
        res.status(405).send({ message: "Only post requests allowed" });
    const { username, email } = JSON.parse(req.body);
    const response = {
        username: username + "_verified",
        email: email + "_verified",
    };
    res.status(200).json(response);
}
