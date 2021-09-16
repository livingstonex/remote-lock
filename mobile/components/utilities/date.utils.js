// export const formatDateTime = (date) =>
//   `${new Date(date).toLocaleDateString("en-GB")} ${new Date(
//     date
//   ).toLocaleTimeString("en-GB")}`;

export const formatDateTime = (date) =>
  new Date(date).toLocaleDateString("en-GB");
