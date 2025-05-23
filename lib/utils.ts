export const validateString = (value: unknown, maxLength: number): value is string => 
  Boolean(value && typeof value === "string" && value.length <= maxLength);

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) return error.message;
  if (error && typeof error === "object" && "message" in error) return String(error.message);
  if (typeof error === "string") return error;
  return "An unexpected error occurred";
};
