const BASE_URL = 'https://localhost:7201/api';

const apiRequest = async (endpoint, method = 'GET', data = null) => {
    const headers = {};
    const config = { method, headers };

    if (data) {
        headers['Content-Type'] = 'application/json';
        config.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, config);

        if (!response.ok) {
            const errorResponse = await response.json().catch(() => null);
            throw new Error(
                `Error in ${method} ${endpoint}: ${response.statusText}. Details: ${errorResponse?.message || 'No details available'}`
            );
        }

        return await response.json();
    } catch (error) {
        console.error('API request failed:', error.message);
        throw error;
    }
};

// Classification
export const postClassification = (data) => apiRequest('/Classification', 'POST', data);
export const putClassification = (id, data) => apiRequest(`/Classification/${id}`, 'PUT', data);
export const deleteClassification = (id) => apiRequest(`/Classification/${id}`, 'DELETE');

// Design Pattern
export const postDesignPattern = (data) => apiRequest('/DesignPattern', 'POST', data);
export const putDesignPattern = (id, data) => apiRequest(`/DesignPattern/${id}`, 'PUT', data);
export const deleteDesignPattern = (id) => apiRequest(`/DesignPattern/${id}`, 'DELETE');
