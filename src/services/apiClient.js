// src/services/apiClient.js
import API_BASE_URL from '../config/api';

const apiClient = {
  async request(endpoint, options = {}) {
    const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;
    
    // Default headers
    const headers = {
      ...options.headers,
    };

    // Only set Content-Type to JSON if it's not FormData
    if (!(options.body instanceof FormData) && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json';
    }

    // Add Auth header if available in localStorage
    const storedAdmin = localStorage.getItem('admin');
    if (storedAdmin && !headers['Authorization']) {
      try {
        const admin = JSON.parse(storedAdmin);
        if (admin.email && admin.password) {
          const credentials = btoa(`${admin.email}:${admin.password}`);
          headers['Authorization'] = `Basic ${credentials}`;
        }
      } catch (e) {
        console.error('Error parsing admin info from localStorage', e);
      }
    }

    const config = {
      ...options,
      headers,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      if (!response.ok) {
        return {
          success: false,
          message: data.message || `Request failed with status ${response.status}`,
          status: response.status
        };
      }

      return {
        success: true,
        data: data.data || data, // Handle both wrapped and unwrapped data
        message: data.message,
        pagination: data.pagination
      };
    } catch (error) {
      console.error('API Request Error:', error);
      return {
        success: false,
        message: 'Unable to connect to server. Please try again.',
        error: error.message
      };
    }
  },

  get(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'GET' });
  },

  post(endpoint, body, options = {}) {
    const isFormData = body instanceof FormData;
    const config = { 
      ...options, 
      method: 'POST', 
      body: isFormData ? body : JSON.stringify(body) 
    };
    
    // If it's FormData, let the browser set the Content-Type header with the correct boundary
    if (isFormData && config.headers) {
      delete config.headers['Content-Type'];
    }

    return this.request(endpoint, config);
  },

  put(endpoint, body, options = {}) {
    return this.request(endpoint, { 
      ...options, 
      method: 'PUT', 
      body: JSON.stringify(body) 
    });
  },

  delete(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'DELETE' });
  }
};

export default apiClient;
