import { create } from "zustand";

interface AuthState {
  isLogged: boolean;
  setLogged: (logged: boolean) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isLogged: false,
  setLogged: (logged: boolean) => set({ isLogged: logged }),
}));

export default useAuthStore;
