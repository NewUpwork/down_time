import { create } from 'zustand';

const useJobStore = create((set) => ({
  selectedJobId: null,
  setJobId: (jobId) => set({ selectedJobId: jobId }),
}));

export default useJobStore;
