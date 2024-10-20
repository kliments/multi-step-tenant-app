import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Profile {
  fullName: string;
  email: string;
  phoneNumber: string;
  salary: string;
}

interface ProfileStore {
  profile: Profile;
  updateProfile: (newData: Partial<Profile>) => void;
}

const useProfileStore = create<ProfileStore>()(
  persist(
    (set) => ({
      profile: {
        fullName: "",
        email: "",
        phoneNumber: "",
        salary: "",
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
