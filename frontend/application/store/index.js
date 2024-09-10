import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useStore = create(
  persist(
    (set, get) => ({
      isSignedIn: false,
      user: {},
      restaurante: {},
      userOtp: {},
    }),
    {
      name: "food-storage", // unique name
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
