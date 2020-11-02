import axios from "axios";

axios.defaults.withCredentials = true;

export const serverDomain = process.env.NODE_ENV === "development" ? "http://localhost:8080" : ""; // TODO: add deployed server's domain