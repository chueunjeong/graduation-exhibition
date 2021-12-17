export const dateType = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let today = year + "." + month + "." + day;
  return today;
};
