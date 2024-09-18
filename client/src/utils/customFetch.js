import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://jobimy-backend.vercel.app/api/v1",
});

const JobCustomFetch = axios.create({
  baseURL: "https://jobicy.com/api/v2",
});

export default customFetch;
export { JobCustomFetch };
