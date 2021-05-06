import csv from "csv/lib/sync";
import fs from "fs";
import path from "path";

import { Karyawan } from "./data-model.js";

const filePath = path.join(process.cwd(), "data.csv");

/**
 * Fungsi terabstraksi untuk menulis data ke file (csv)
 * @param {Karyawan} newData 
 * @returns {void}
 */
export function writeData(newData) {
    const csvString = csv.stringify(newData, {
        columns: Object.keys(new Karyawan()),
        header: true
    });

    fs.writeFileSync(filePath, csvString, { encoding: "utf8" });
}

/**
 * Fungsi terabstraksi untuk membaca data dari file (csv)
 * @returns {Karyawan[]}
 */
export function readData() {
    const file = fs.readFileSync(filePath, { encoding: "utf8" });
    return csv.parse(file, { columns: true });
}