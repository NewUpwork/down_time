import { create } from 'zustand';

const useFreelancerStore = create((set) => ({
    selectedFreelancerId: null,
  setFreelancerId: (freelancerId) => set({ selectedFreelancerId: freelancerId }),
}));

export default useFreelancerStore;
