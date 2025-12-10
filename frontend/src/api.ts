const API_BASE_URL = 'http://localhost:8000';

export async function pingBackend(): Promise<{ message: string }> {
  const response = await fetch(`${API_BASE_URL}/ping`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}



