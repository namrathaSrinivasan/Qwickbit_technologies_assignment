import React, { useState } from "react"
import { Button } from "@mui/material";
import Card from "../Card/Card";
import * as XLSX from "xlsx";


const UploadExcelFile = () => {

    const [data, setData] = useState(null);

    const handleFileUpload = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
  
      reader.onload = (event) => {
        const workbook = XLSX.read(event.target.result, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const sheetData = XLSX.utils.sheet_to_json(sheet);
  
        setData(sheetData);
        const rows = sheet.getRowIterator();
      
const data = [];
while (rows.hasNext()) {
const row = rows.next();
const cells = row.getCellIterator();
const rowData = [];
while (cells.hasNext()) {
const cell = cells.next();
rowData.push(cell.getStringCellValue());
}
data.push(rowData);
console.log(data);
      };
      return data;
      
}

};
  
   


return(
    <Card>
    <div style={{marginBottom:'20px'}}>
    <form onSubmit={handleFileUpload}>
        <label>Upload form that accepts .xlsx files</label>
        <input type="file" id='file'  accept=".xlsx" onChange={handleFileUpload} style={{marginBottom:'20px'}}/><br/>
    <Button type='submit' variant='contained' size='small' color='success'>Upload .xlsx File</Button>
    </form>
   </div>
   <div>
   {data && (
        <div>
          <h2>Imported Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
   </div>

    </Card>
)

}

export default UploadExcelFile;