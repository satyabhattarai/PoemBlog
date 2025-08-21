import client from "./config";

export default async function fetchDataFromSheet(sheetName, limit) {
  try {
    const data = await client.read({ sheet: sheetName, limit: limit });
    // console.log(JSON.parse(data));
    return JSON.parse(data);
  } catch (err) {
    console.error("Error fetching sheet data:", err);
    throw err;
  }
}
