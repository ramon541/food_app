import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useStore = create(
  persist(
    (set, get) => ({
      isSignedIn: false,
      setSignedIn: (value) => set({ isSignedIn: value }),
      bears: 0,
      addABear: () => set({ bears: get().bears + 1 }),
    }),
    {
      name: "food-storage", // unique name
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
