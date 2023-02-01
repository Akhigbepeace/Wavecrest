import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

const DEFAULT_UI_DATA_FILENAME = "default_ui_data.json";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const currentUIData = JSON.parse(
    fs.readFileSync(DEFAULT_UI_DATA_FILENAME, "utf-8")
  );

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

    fs.writeFileSync(DEFAULT_UI_DATA_FILENAME, JSON.stringify(newUIData));

    return res.status(200).json({ message: "success" });
  }
}
