import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

export default async function UploadFormPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("authToken")?.value;

  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    redirect("/login");
  }

  return (
    <div className="py-16 mx-auto container">
      <h1 className="text-2xl mb-4">Upload Form</h1>
      <form className="space-y-4">
        <input type="file" className="border p-2 rounded w-full" />
        <button className="bg-primary text-white px-4 py-2 rounded">
          Upload
        </button>
      </form>
    </div>
  );
}
