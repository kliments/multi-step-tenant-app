import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Profile } from "../types/profile";

interface ProfileStore {
  profile: Profile;
  updateProfile: (newData: Partial<Profile>) => void;
}

const useProfileStore = create<ProfileStore>()(
  persist(
    (set) => ({
      profile: {
        name: "",
        email: "",
        phone: "",
        income: "",
      },
      updateProfile: (newData) =>
        set((state) => ({
          profile: { ...state.profile, ...newData },
        })),
    }),
    {
      name: "profile-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
export default useProfileStore;
