import S3 from "aws-sdk/clients/s3";
import crypto from "crypto";

const bucketName = process.env.AWS_BUCKET_NAME || "";
const region = process.env.AWS_REGION_NAME || "";
const accessKeyId = process.env.AWS_ACCESS_ID || "";
const secretAccessKey = process.env.AWS_SECRET_ID || "";
export const FILE_COPY_NAME_ON_S3 = process.env.FILE_COPY_NAME_ON_S3;

export const environment = process.env.ENV || "staging";

const s3 = new S3({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export const uploadToS3 = async (currentUIData: object) => {
  console.log("Uploading to S3...");

  const buf = Buffer.from(JSON.stringify(currentUIData));
  const data = {
    Bucket: bucketName,
    Key: `${environment}/${FILE_COPY_NAME_ON_S3}`,
    Body: buf,
    ContentEncoding: "base64",
    ContentType: "application/json",
    ACL: "public-read",
  };

  s3.upload(data).promise();
};

export async function getAppConfigFromS3() {
  console.log("Retrieving website copy from S3...");

  const response = await s3
    .getObject({
      Key: `${environment}/${FILE_COPY_NAME_ON_S3}`,
      ResponseContentType: "application/json",
      ResponseContentEncoding: "base64",
      Bucket: bucketName,
    })
    .promise();

  return JSON.parse(response.Body?.toString() || "{}");
}

export async function generateUploadURL(imagename: string) {
  const filename = imagename + crypto.randomBytes(16).toString("hex");
  const params = {
    Bucket: bucketName,
    Key: `${environment}/images/${filename}`,
    Expires: 2 * 60, // 2 minutes
  };

  const uploadURL = await s3.getSignedUrlPromise("putObject", params);

  return uploadURL;
}
