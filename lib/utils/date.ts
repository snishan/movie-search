export const formatYear = (dateString: string): string => {
  return new Date(dateString).getFullYear().toString();
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString();
};