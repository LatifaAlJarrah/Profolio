// import { getSession } from "next-auth/react";

// // Base API URL - your existing backend
// const API_BASE_URL = "http://localhost:3001/api";

// // Interface for API response
// interface ApiResponse<T = any> {
//   success: boolean;
//   data?: T;
//   error?: string;
//   message?: string;
// }

// // Interface for user template
// export interface UserTemplate {
//   id: string;
//   name: string;
//   templateType: string;
//   description?: string;
//   thumbnail?: string;
//   createdAt: string;
//   updatedAt: string;
//   templateData?: any;
// }

// // Function to get authentication headers
// export async function getAuthHeaders(): Promise<Record<string, string>> {
//   const headers: Record<string, string> = {
//     "Content-Type": "application/json",
//   };

//   try {
//     // Try to get session
//     const session = await getSession();

//     // Check different possible locations for the token
//     const token =
//       (session as any)?.apiAccessToken ||
//       (session as any)?.accessToken ||
//       (session as any)?.user?.accessToken;

//     if (token) {
//       headers["Authorization"] = `Bearer ${token}`;
//     }

//     // Fallback: try to get token from localStorage
//     if (typeof window !== "undefined") {
//       const localToken =
//         localStorage.getItem("userToken") || localStorage.getItem("authToken");
//       if (localToken && !headers["Authorization"]) {
//         headers["Authorization"] = `Bearer ${localToken}`;
//       }
//     }
//   } catch (error) {
//     console.warn("Failed to get authentication headers:", error);
//   }

//   return headers;
// }

// // Generic API call function
// export async function apiCall<T = any>(
//   endpoint: string,
//   options: RequestInit = {}
// ): Promise<ApiResponse<T>> {
//   try {
//     const url = endpoint.startsWith("http")
//       ? endpoint
//       : `${API_BASE_URL}${endpoint}`;
//     const headers = await getAuthHeaders();

//     const response = await fetch(url, {
//       ...options,
//       headers: {
//         ...headers,
//         ...options.headers,
//       },
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       return {
//         success: false,
//         error:
//           data.message ||
//           data.error ||
//           `HTTP ${response.status}: ${response.statusText}`,
//       };
//     }

//     return {
//       success: true,
//       data,
//     };
//   } catch (error) {
//     console.error("API call failed:", error);
//     return {
//       success: false,
//       error: error instanceof Error ? error.message : "Unknown error occurred",
//     };
//   }
// }

// // Function to fetch user templates from your backend
// export async function fetchUserTemplates(
//   userId: string
// ): Promise<ApiResponse<UserTemplate[]>> {
//   try {
//     console.log('جاري جلب التمبليتات للمستخدم:', userId);
    
//     // استدعاء API
//     const response = await fetch(
//       `http://localhost:3001/api/templates/user/${userId}`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           // يمكن إضافة headers إضافية حسب الحاجة
//           // 'Authorization': 'Bearer your-token'
//         },
//       }
//     );

//     // التحقق من نجاح الاستجابة
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     // تحويل الاستجابة إلى JSON
//     const templates = await response.json();
//     console.log('تم جلب التمبليتات بنجاح:', templates);

//     return {
//       success: true,
//       data: templates,
//     };
//   } catch (error) {
//     console.error("خطأ في استدعاء API:", error);
//     return {
//       success: false,
//       error: error instanceof Error ? error.message : "Unknown error occurred",
//     };
//   }
// }

// // Function to save template data to your backend
// export async function saveTemplateToBackend(templatePayload: {
//   name: string;
//   description: string;
//   templateType: string;
//   isPublic: boolean;
//   templateData: any;
// }): Promise<ApiResponse> {
//   return apiCall("/templates", {
//     method: "POST",
//     body: JSON.stringify(templatePayload),
//   });
// }

// // Function to update existing template
// export async function updateTemplate(
//   templateId: string,
//   templatePayload: {
//     name?: string;
//     description?: string;
//     templateType?: string;
//     isPublic?: boolean;
//     templateData?: any;
//   }
// ): Promise<ApiResponse> {
//   return apiCall(`/templates/${templateId}`, {
//     method: "PUT",
//     body: JSON.stringify(templatePayload),
//   });
// }

// // Function to delete a template
// export async function deleteTemplate(templateId: string): Promise<ApiResponse> {
//   return apiCall(`/templates/${templateId}`, {
//     method: "DELETE",
//   });
// }

// // Function to get a specific template by ID
// export async function getTemplateById(
//   templateId: string
// ): Promise<ApiResponse<UserTemplate>> {
//   return apiCall(`/templates/${templateId}`, {
//     method: "GET",
//   });
// }

// // Function to get user info from session
// export async function getUserInfo() {
//   try {
//     const session = await getSession();

//     if (!session) {
//       return { user: null, token: null, session: null };
//     }

//     const token =
//       (session as any)?.apiAccessToken ||
//       (session as any)?.accessToken ||
//       (session as any)?.user?.accessToken;

//     return {
//       user: {
//         id: (session as any)?.user?.id,
//         email: (session as any)?.user?.email,
//         name: (session as any)?.user?.name,
//         role: (session as any)?.user?.role,
//       },
//       token: token,
//       session: session,
//     };
//   } catch (error) {
//     console.error("Error getting user info:", error);
//     return { user: null, token: null, session: null };
//   }
// }
