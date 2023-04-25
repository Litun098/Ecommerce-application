import axios from "axios";

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzY1NDQ3YzU5MDhhZDY0ZDY0YTZhZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjE1MzU0OSwiZXhwIjoxNjkwNzkzNTQ5fQ.w3Q47jf1Mo-lgj2Yub5jKeEpYU_BQu1CVMUxr9SIeYM"

export const publicRequest = axios.create({
    baseURL:BASE_URL
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
});