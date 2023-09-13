import axios from "axios";

/** Setup an API instance */
const instanceApi = axios.create({
    baseURL: "http://localhost:80/cosmetics",
    headers: {
        "Content-Type": "application/json",
    },
});

// requestInterceptor
const requestInterceptor = request => {
    if (localStorage.getItem('access_token')) {
        request.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    }
    return request
};

const errorRequestInterceptor = error => {
    Promise.reject(error);
};

// responseInterceptor
const responseInterceptor = async response => {
    if (
        response?.data?.status_code === 401
    ) {
        try {
            return Promise.resolve(response);
        } catch (error) {
            return Promise.reject(error);
        }
    }
    return Promise.resolve(response);
};

const errorResponseInterceptor = async error => {
    if (error && error.response?.status) {
        switch (error.response?.status) {
            case 401:
                localStorage.clear();
                window.location.assign("/");
                break;
            case 404: // Page not found
                window.location.assign("/404");
                break;
            default:
                break;
        }
    }
    return Promise.reject(error);
};

/** Add interceptor */
instanceApi.interceptors.request.use(
    requestInterceptor,
    errorRequestInterceptor
);
instanceApi.interceptors.response.use(
    responseInterceptor,
    errorResponseInterceptor
);

export function CallApiByBody(endpoint, method = "GET", body) {
    return instanceApi({
        url: `/${endpoint}`,
        method: method,
        data: body
    })
}
export function CallApiByParams(endpoint, method = "GET", body) {
    return instanceApi({
        url: `/${endpoint}`,
        method: method,
        params: body
    })
}
export default instanceApi;