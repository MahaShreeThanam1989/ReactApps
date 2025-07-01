// Using fetch
export async function fetchJSON(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json();
}

// Using axios
import axios from 'axios';
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_USER_API_URL, // we’ll override later
  headers: { 'Content-Type': 'application/json' }
});