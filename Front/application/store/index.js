import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useBearStore = create(
  persist(
    (set, get) => ({
      isSignedIn: false,
      bears: 0,
      addABear: () => set({ bears: get().bears + 1 }),
    }),
    {
      name: "food-storage", // unique name
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
