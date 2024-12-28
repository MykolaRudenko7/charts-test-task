export const addDelay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
