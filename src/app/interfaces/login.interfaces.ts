export interface AuthResponse {
  rol: string;
  user: string;
  permisos: AuthPermiss[];
}

export interface AuthPermiss {
  id_permisos: number;
  id_rol: number;
  url: string;
  create: number;
  read: number;
  update: number;
  delete: number;
}
