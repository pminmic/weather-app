import { useState, useEffect } from "react";
import Papa from "papaparse";

// Hook that given a route of a CSV returns an array of objects
// with the fields specified in the header of the CSV.
export const readCSV = (route) => {

    const [csvData, setCSVData] = useState([]);

    useEffect(() => {
        fetch(route).then((response) => response.text())
        .then((text) => {
            Papa.parse(text, {
                header: true,
                skipEmptyLines: true,
                complete: (result) => {
                    setCSVData(result.data);
                },
            });
        });
    }, []);


    return csvData;
}