import type { NextApiRequest, NextApiResponse } from "next";
import { retrieveAppConfig, updateAppConfig } from "./s3";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const currentUIData = await retrieveAppConfig();
  if (req.method === "GET") {
    return res.status(200).json(currentUIData);
  }
  if (req.method === "POST") {
    const { parentKey, newData } = JSON.parse(req.body);
    const newUIData = {
      ...currentUIData,
      [parentKey]: {
        ...currentUIData[parentKey],
        ...newData,
      },
    };

    try {
      await updateAppConfig(newUIData as object);
      return res.status(200).json({ message: "success" });
    } catch (error) {
      return res.status(400).json({ message: "error" });
    }
  }
}
