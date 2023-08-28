import { http } from "./interceptor";


export class HttpClient {
	static async get<T>(url: string, params?: unknown) {
		const response = await http.get<T>(url, { params });
		return response.data;
	}

	static async post<T>(url: string, data: unknown, options?: any) {
		const response = await http.post<T>(url, data, options);
		return response.data;
	}

	static async put<T>(url: string, data: unknown) {
		const response = await http.put<T>(url, data);
		return response.data;
	}
	static async patch<T>(url: string, data: unknown) {
		const response = await http.patch<T>(url, data);
		return response.data;
	}

	static async delete<T>(url: string) {
		const response = await http.delete<T>(url);
		return response.data;
	}
}
