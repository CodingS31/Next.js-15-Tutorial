export type Role = "admin" | "moderator";

declare global {
  interface CustomJWTSessionClaims {
    metadata?: {
      role?: Role;
    };
  }
}

export {};
