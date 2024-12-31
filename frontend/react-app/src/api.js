import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const fetchTransactions = (params) => axios.get(`${API_BASE_URL}/transactions`, { params });
export const fetchStatistics = (params) => axios.get(`${API_BASE_URL}/statistics`, { params });
export const fetchBarChart = (params) => axios.get(`${API_BASE_URL}/bar-chart`, { params });
export const fetchPieChart = (params) => axios.get(`${API_BASE_URL}/pie-chart`, { params });
