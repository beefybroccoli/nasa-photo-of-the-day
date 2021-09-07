export const API_KEY = "SlfHJjvLoBAlf45AFF2pvU1J3uauaDgAh7d4I9y6";
export const API_URL =
  "https://api.nasa.gov/planetary/apod?api_key=SlfHJjvLoBAlf45AFF2pvU1J3uauaDgAh7d4I9y6&date=";
export const sample_date = "2020-01-01"; //YYYY-MM-DD
export const Request_API_URL = API_URL + sample_date;

//example
//https://api.nasa.gov/planetary/apod?api_key=SlfHJjvLoBAlf45AFF2pvU1J3uauaDgAh7d4I9y6&date=2020-01-01

export const cb_get_today_date_string = () => {
  //construct a date object
  const today = new Date(Date.now());
  console.log("today = ", today);

  //get string of date, month, and year
  const date = today.getDate();
  const updateDate = toString(date).length === 1 ? "0" + toString(date) : date;
  const month = today.getMonth() + 1;
  const updateMonth =
    toString(month).length === 1 ? "0" + toString(month) : month;
  const year = today.getFullYear();

  const string_today = year + "-" + updateMonth + "-" + updateDate;
  console.log("updateDate = ", updateDate);
  console.log("updateMonth = ", updateMonth);
  console.log("string_today = ", string_today);
  return string_today;
};
