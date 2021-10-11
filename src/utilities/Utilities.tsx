import Papa from "papaparse";
export const dataFromCSV = async url => {
  const results: any[] = [];

  const response = await fetch("http://localhost/vilje.hpc.ntnu.no.cost.csv");
  const body = await response.text();
  const values = await Papa.parse(body);
  console.log("body", body, values);
};
