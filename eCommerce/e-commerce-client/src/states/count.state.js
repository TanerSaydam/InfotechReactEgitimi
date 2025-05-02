import axios from 'axios';
import { create } from 'zustand'

export const useCountStore = create((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
  fetch: async () => {
    try {
        const response = await axios.get("https://localhost:7159/carts/get-count", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
      set({ count: response.data.data });
    } catch (error) {
      console.error('Failed to fetch count:', error);
    }
  }
}));