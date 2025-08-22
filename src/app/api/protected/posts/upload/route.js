import { IncomingForm } from "formidable";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
export const config = {
  api: {
    bodyParser: false,
  },
};
export async function POST(request) {
  try {
    const uploadDir = path.join(process.cwd(), "/public/uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    const form = new IncomingForm({ uploadDir, keepExtensions: true });
    return new Promise((resolve, reject) => {
      form.parse(request, (err, fields, files) => {
        if (err) {
          reject(
            new NextResponse.json(
              { error: err.message },
              {
                status: 500,
              }
            )
          );
          return;
        }

        const file = files.image;
        const fileName = path.basename(file.filepath);
        const fileUrl = "/uploads/" + fileName;
        resolve(NextResponse.json(fileUrl, { status: 200 }));
      });
    });
  } catch (err) {
    console.log(err);
  }
}
