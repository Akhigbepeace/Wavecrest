import { combinedConstant } from "config/constants/editable-copy/combined";
import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import {
  environment,
  uploadToS3,
  getAppConfigFromS3,
  FILE_COPY_NAME_ON_S3,
} from "./s3";

const DEFAULT_UI_DATA_FILENAME = "default_ui_data.json";

fs.writeFileSync(DEFAULT_UI_DATA_FILENAME, JSON.stringify(combinedConstant));
const updateAppConfig = async (newConfig: object) => {
  console.log("Updating app copy...");

  if (environment === "development") {
    fs.writeFileSync(DEFAULT_UI_DATA_FILENAME, JSON.stringify(newConfig));
  } else {
    await uploadToS3(newConfig);
  }
};

const retrieveAppConfig = async () => {
  if (!FILE_COPY_NAME_ON_S3 || environment === "development") {
    const currentUIData = JSON.parse(
      fs.readFileSync(DEFAULT_UI_DATA_FILENAME, "utf-8")
    );
    return currentUIData;
  }

  return await getAppConfigFromS3();
};

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
