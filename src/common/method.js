export const dateType = (timestamp) => {
  try {
    const date = new Date(timestamp);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let today = year + "." + month + "." + day;
    return today;
  } catch (error) {
    return "";
  }
};

export const search = (searchOption) => {};
