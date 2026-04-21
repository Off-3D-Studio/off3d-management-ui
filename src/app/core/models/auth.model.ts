export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  // adicione outros campos que seu Java retorna (ex: nome, role)
}