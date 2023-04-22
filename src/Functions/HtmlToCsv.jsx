import downloadCSVFile from "./DownloadCsvFile";

export default function htmlToCSV(filename) {
  let data = [];
  let rows = document.querySelectorAll(".results-table tr");

  if (rows.length > 1) {
    for (let i = 0; i < rows.length; i++) {
      let row = [],
        cols = rows[i].querySelectorAll("tr, td");

      for (let j = 0; j < cols.length - 1; j++) {
        row.push(cols[j].innerText);
      }

      data.push(row.join(","));
    }
    downloadCSVFile(data.join("\n"), filename);
  }
}
