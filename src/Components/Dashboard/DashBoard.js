import React,{useState} from 'react';
// import Card from '../Card/Card';
import { Button, TableBody } from '@mui/material';
import * as XLSX from 'xlsx';
import { Link } from 'react-router-dom';
import './DashBoard.css';

const DashBoard=()=>{
  const [data1,setData1]=useState([]);
  const [file,setFile]=useState();


   const [tableData,setTableData]=useState();
  const handleFileInputChange = evt => {
    // (A) NEW FILE READER
    var reader = new FileReader();
   
    // (B) ON FINISH LOADING
    reader.addEventListener("loadend", evt => {
      // (B1) GET THE FIRST WORKSHEET
      var workbook = XLSX.read(evt.target.result, {type: "binary"}),
          worksheet = workbook.Sheets[workbook.SheetNames[0]],
          range = XLSX.utils.decode_range(worksheet["!ref"]);
   
      // (B2) READ CELLS IN ARRAY
      var data = [];
      for (let row=range.s.r; row<=range.e.r; row++) {
        let i = data.length;
        data.push([]);
        for (let col=range.s.c; col<=range.e.c; col++) {
          let cell = worksheet[XLSX.utils.encode_cell({r:row, c:col})];
          data[i].push(cell);
        }
      }
      console.log(data);
      setData1([...data]);

      // var tableContents=""
   
      // for(let i=0;i<data.length;i++){
      //    tableContents+="<tr>"
      //   for(let j=0;j<data[i].length;j++){
      //     if(data[i][j]!==undefined){
      //       tableContents+="<td>"+data[i][j].w+"</td>"
      //     }else{
      //       tableContents+="<td>NULL</td>"
      //     }
      //   }
      //   tableContents+="</tr>"
      // }




  //     console.log(tableContents.replaceAll('"',''))
  //  setTableData(tableContents.replaceAll('"',''))
   
       

      
    });
    // (C) START - READ SELECTED EXCEL FILE
    setFile(evt.target.files[0])
    reader.readAsArrayBuffer(evt.target.files[0]);
  };

   

  const convertToCSV = (objArray) => {
    const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str = '';

    for (let i = 0; i < array.length; i++) {
      let line = '';
      for (let index in array[i]) {
        if (line !== '') line += ',';

        line += array[i][index];
      }
      str += line + '\r\n';
    }
    return str;
  };

  const downloadCSV = () => {
    
    const csvData = new Blob([convertToCSV(data1)], { type: 'text/csv' });
    const csvURL = URL.createObjectURL(csvData);
    const link = document.createElement('a');
    link.href = csvURL;
    link.download = `${file}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  
  return(
   <div style={{margin:'50px 100px'}}>
    <div>
    <form >
    <input type="file" id='file' accept=".xlsx, .xls, .csv" onChange={handleFileInputChange} style={{marginBottom:"20px"}}/>
    <Button  variant='contained' size='small' color='success'>Upoad .xlsx Files</Button>
    </form>
    </div>
    <div>
    <table style={{border:"1px solid black",borderCollapse:'collapse'}}>
  <thead></thead>
  <tbody>
  

{
 data1.map((data) => {
     return (
         <tr>
           {
              data.map((d)=>{
                if(d!==undefined){
                 return <td>{d.w}</td>
                }else{
                 return <td>NULL</td>
                }
              })
           }
         </tr>
     )
 })
}

  
  </tbody>
     </table>
    <p style={{textAlign:'center'}}> <Button variant='contained' style={{width:"200px",height:'40px'}} color='primary' onClick={downloadCSV}>Download CSV</Button>
    <Link to='/mail'><Button variant='contained' style={{width:"200px",height:'40px',marginLeft:'10px'}} color='success'>Navigate to Mail</Button></Link></p>
      </div>
     
   </div>
  )
}


export default DashBoard;