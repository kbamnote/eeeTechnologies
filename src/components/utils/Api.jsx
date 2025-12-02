import axios from "axios";

const Api = axios.create({
    baseURL:'https://elite-backend-production.up.railway.app/'
})

export const addDetail = (detail) => {
    return Api.post("form/create-form", detail);
}

// Enrollment API
export const createEnrollment = (enrollmentData) => {
    return Api.post("enrollment/create", enrollmentData);
}

export const getEnrollments = () => {
    return Api.get("enrollment/get-all");
}