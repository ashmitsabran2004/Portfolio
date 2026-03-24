export const API_URL: string = import.meta.env.VITE_API_URL ?? 'http://localhost:5000'

export async function fetchJson<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`)
  if (!res.ok) throw new Error(`Request failed: ${res.status}`)
  return (await res.json()) as T
}

