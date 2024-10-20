import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Profile } from "../types/profile";
import { ApiService } from "../services/apiService";

interface ProfileStore {
  profile: Profile;
  loading: boolean;
  error: string;
  updateProfile: (newData: Partial<Profile>) => void;
  submitProfile: () => Promise<void>;
}
const apiService = new ApiService();

const useProfileStore = create<ProfileStore>()(
  persist(
    (set, get) => ({
      profile: {
        name: "",
        email: "",
        phone: "",
        income: "",
      },
      loading: false,
      error: "",
      updateProfile: (newData) =>
        set((state) => ({
          profile: { ...state.profile, ...newData },
        })),
      submitProfile: async () => {
        set({ loading: true });
        try {
          const profile = get().profile;
          // Call the API service to submit the profile
          await apiService.submitProfileData(profile);
        } catch (error) {
          set({
            error:
              "There was an issue submitting your profile. Please try again.",
          });
        } finally {
          set({ loading: false });
        }
      },
    }),
    {
      name: "profile-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
export default useProfileStore;
