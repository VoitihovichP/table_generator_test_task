export const generateUniqueId = (): string => {
  const timestamp: number = new Date().getTime();
  const randomValue: number = Math.floor(Math.random() * 1000000);

  return `${timestamp}-${randomValue}`;
};
