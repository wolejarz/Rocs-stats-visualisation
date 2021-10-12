import Papa from "papaparse";

export const dataFromCSV = async url => {
  const response = await fetch("http://localhost/vilje.hpc.ntnu.no.cost.csv");
  const body = await response.text();
  const values = await Papa.parse(body);
  const typedData: any[] = [];
  values.data.forEach((dataRow, index) => {
    if (dataRow.length <= 1) return;
    if (index === 0) {
      dataRow[0] = { type: "date", label: "Time" };
      typedData.push(dataRow);
      return;
    }
    typedData.push(
      dataRow.map(value => {
        if (!isNaN(Number(value))) {
          return Number(value);
        }
        return new Date(value);
      })
    );
  });
  console.log("Data and other values", values.data, typedData[0], typedData[1]);

  return typedData;
};
