import csv from "csv-parser";

export const dataFromCSV = async url => {
  const results: any[] = [];
  const response = await fetch(url);
  const body = await response.text();
  console.log("body", body, response);
};
