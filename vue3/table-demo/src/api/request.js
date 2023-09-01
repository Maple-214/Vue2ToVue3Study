import https from "../https/https.js";
export function getGoodsList() {
  return https.get("/api/goods");
}
