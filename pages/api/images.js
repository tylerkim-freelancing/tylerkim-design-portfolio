import { readFile } from "../../modules/fileServices"

export default async function handler(req, res) {
    const { title } = req.query
    const image = await readFile(`/public/images/${title}`)
    console.log(image)

    res.status(200).send(image)
}