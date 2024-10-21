import { Profile } from "../types/profile";

export class ApiService {
  async submitProfileData(profile: Profile): Promise<void> {
    try {
      const response = await fetch('http://localhost:3001/api/tenants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      console.log('Submission successful:', result);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  }
}
