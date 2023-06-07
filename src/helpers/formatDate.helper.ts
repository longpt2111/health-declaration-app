export const formatDate = (dateString: string) => {
  const dateParts = dateString.split("-");
  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];
  const formattedDate = `${month}/${day}/${year}`;
  return formattedDate;
};
