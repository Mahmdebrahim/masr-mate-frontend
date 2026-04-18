import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      role: null,
      loading: false,
      error: null,
      setLoading: (value) => set({ loading: value }),
      login: (credentials) => {
        const user = {
          id: "user-" + Date.now(),
          name: credentials.email.split("@")[0],
          role: credentials.role || "tourist",
        };
        set({
          user,
          token: "mock-token-" + Date.now(),
          role: user.role,
          error: null,
          loading: false,
        });
      },
      register: (credentials) => {
        const user = {
          id: "user-" + Date.now(),
          name: credentials.name,
          role: credentials.role || "tourist",
        };
        set({
          user,
          token: "mock-token-" + Date.now(),
          role: user.role,
          error: null,
          loading: false,
        });
      },
      logout: () => set({ user: null, token: null, role: null, error: null }),
      isAuthenticated: () => Boolean(get().token),
    }),
    {
      name: "masr-mate-auth",
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        role: state.role,
      }),
    },
  ),
);
