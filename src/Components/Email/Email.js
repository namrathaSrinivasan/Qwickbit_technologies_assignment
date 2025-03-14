import * as React from "react";
import { Button } from "@mui/material";
// import sendgrid from "@sendgrid/mail";

const Email = ()=>{

//     const sendMailHandler=()=>{
//         sendgrid.setApiKey(process.env.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);



// const options = {
//   from: "namrathasrinivasan1995@gmail.com",
//   to: "pradeep@qwickbit.com",
//   subject: "hello world",
//   html: "Hai Guys",
// };

// sendgrid.send(options);
//     }

  return (
      <Button  variant='contained'>Send Mail</Button>
  );
}

export default Email;