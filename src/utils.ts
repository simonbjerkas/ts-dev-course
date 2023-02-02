export const dateStringToDate = (dateString: string): Date => {
  // 24/12/2022
  const dateParts = dateString.split('/').map((value: string) => {
    return parseInt(value);
  });
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
