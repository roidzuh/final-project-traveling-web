import axios from "axios";

export const BASE_URL = "https://travel-journal-api-bootcamp.do.dibimbing.id/";
export const API_KEY = "24405e01-fbc1-45a5-9f5a-be13afcd757c";

const apiRequest = async (
  url,
  method = "get",
  data = null,
  token = null,
  headers = {}
) => {
  headers = {
    ...headers,
    apiKey: API_KEY,
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  const config = {
    method: method,
    url: `${BASE_URL}${url}`,
    headers: headers,
  };
  if (data) {
    config.data = data;
  }
  try {
    const response = await axios(config);
    return response.data || [];
  } catch (error) {
    return { error: true, message: error.response?.data?.message || "Error" };
  }
};

// BANNER
export const fetchBanners = () => apiRequest("api/v1/banners");
export const fetchBannerById = (bannerId) =>
  apiRequest(`api/v1/banner/${bannerId}`);
export const deleteBanner = (bannerId, token) =>
  apiRequest(`api/v1/delete-banner/${bannerId}`, "delete", null, token);
export const updateBanner = (bannerId, data, token) =>
  apiRequest(`api/v1/update-banner/${bannerId}`, "post", data, token);
export const createBanner = (data, token) =>
  apiRequest("api/v1/create-banner", "post", data, token);

// PROMO
export const fetchPromo = () => apiRequest("api/v1/promos");
export const fetchPromoById = (promoId) =>
  apiRequest(`api/v1/promo/${promoId}`);
export const deletePromo = (promoId, token) =>
  apiRequest(`api/v1/delete-promo/${promoId}`, "delete", null, token);
export const updatePromo = (promoId, data, token) =>
  apiRequest(`api/v1/update-promo/${promoId}`, "post", data, token);
export const createPromo = (data, token) =>
  apiRequest("api/v1/create-promo", "post", data, token);

// CATEGORY
export const fetchCategory = () => apiRequest("api/v1/categories");
export const fetchCategoryById = (categoryId) =>
  apiRequest(`api/v1/category/${categoryId}`);
export const deleteCategory = (categoryId, token) =>
  apiRequest(`api/v1/delete-category/${categoryId}`, "delete", null, token);
export const updateCategory = (categoryId, data, token) =>
  apiRequest(`api/v1/update-category/${categoryId}`, "post", data, token);
export const createCategory = (data, token) =>
  apiRequest("api/v1/create-category", "post", data, token);

// ACTIVITY
export const fetchActivity = () => apiRequest("api/v1/activities");
export const fetchActivityById = (activityId) =>
  apiRequest(`api/v1/activity/${activityId}`);
export const fetchActivityByCategoryId = (categoryId) =>
  apiRequest(`api/v1/activities-by-category/${categoryId}`);
export const deleteActivity = (activityId, token) =>
  apiRequest(`api/v1/delete-activity/${activityId}`, "delete", null, token);
export const updateActivity = (activityId, data, token) =>
  apiRequest(`api/v1/update-activity/${activityId}`, "post", data, token);
export const createActivity = (data, token) =>
  apiRequest("api/v1/create-activity", "post", data, token);

// USER
export const fetchUser = (token) =>
  apiRequest("api/v1/user", "get", null, token);
export const fetchAllUser = (token) =>
  apiRequest("api/v1/all-user", "get", null, token);
export const updateUserRole = (userId, role, token) =>
  apiRequest(`api/v1/update-user-role/${userId}`, "post", { role }, token);
export const updateProfile = (data, token) =>
  apiRequest("api/v1/update-profile", "post", data, token);

// AUTH
export const handleLogin = async (email, password) => {
  try {
    const response = await apiRequest("api/v1/login", "post", {
      email,
      password,
    });
    return response;
  } catch (error) {
    error;
  }
};

export const handleLogout = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await apiRequest("api/v1/logout", "get", null, token);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return response;
  } catch (error) {
    return {
      error: true,
      message: error.response?.data?.message || "Logout failed",
    };
  }
};

export const registerUser = (data) =>
  apiRequest("api/v1/register", "post", data);

// IMAGE
export const uploadImage = (file, token) => {
  const formData = new FormData();
  formData.append("image", file);
  return apiRequest("api/v1/upload-image", "post", formData, token, {
    "Content-Type": "multipart/form-data",
  });
};
