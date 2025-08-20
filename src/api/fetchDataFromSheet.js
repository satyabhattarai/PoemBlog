import client from "./config";

export default async function fetchDataFromSheet(sheetName, limit ) {
  try {
    const data = await client.read({ sheet: sheetName, limit: limit });
    return JSON.parse(data);
  } catch (err) {
    console.error("Error fetching sheet data:", err);
    throw err;
  }
}
