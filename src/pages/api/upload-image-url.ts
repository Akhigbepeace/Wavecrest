import type { NextApiRequest, NextApiResponse } from "next";
import { generateUploadURL } from "./s3";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { filename, extension } = req.query;

    const url = await generateUploadURL(filename as string, `.${extension}`);
    return res.status(200).json({ url });
  }
}
