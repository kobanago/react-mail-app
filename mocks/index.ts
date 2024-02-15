export const initMocks = async () => {
  if (typeof window !== 'undefined' && import.meta.env.DEV) {
    const { worker } = await import('./browser');
    worker.start();
  }
};
