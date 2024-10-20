export class ApiService {
  async submitProfileData(profile: any): Promise<void> {
    try {
      // Mock successful API call
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Profile submitted successfully:", profile);
          resolve();
        }, 1000); // Simulate a delay for the API call
      });
    } catch (error) {
      throw new Error("Error submitting profile");
    }
  }
}
