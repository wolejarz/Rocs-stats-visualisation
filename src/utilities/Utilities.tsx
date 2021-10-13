import Papa from "papaparse";

export const dataFromCSV = async url => {
  const response = await fetch(url);
  const body = await response.text();
  const values = await Papa.parse(body);
  const typedData: any[] = [];
  values.data.forEach((dataRow, index) => {
    if (dataRow.length <= 1) return;
    if (index === 0) {
      const columnsDefs = dataRow.map(column => {
        if (!isNaN(Date.parse(column))) {
          return { type: "date", label: "Time" };
        }
        if (!isNaN(Number(column))) {
          return { type: "number", label: `${column}` };
        }
        return column;
      });
      dataRow[0] = { type: "date", label: "Time" };
      typedData.push(columnsDefs);
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
  return typedData;
};
