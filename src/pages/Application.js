import React from 'react'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import Editinfomodel from '../components/Editinfomodel'
import Tabcomponent from '../components/application/Tabcomponent';

const Application = () => {
  return (
    <div className='application'>
        <div className='cardcontianer'>
        <Card sx={{ width:'63vw',height:'240px',display:'flex', justifyContent:'center',alignItems:'center' }}>          
          <Card sx={{ width:'95%',height:'95%',boxShadow:'none' }}>
            <div className='classheader'>

            </div>
            <TableContainer >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
               <TableBody>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                  <TableCell component="th" scope="row">आर्थिक बर्ष: २०७९-८०</TableCell>
                  <TableCell align="left">सम्पर्क नं: ९८०४२५५०७८</TableCell>
                  <TableCell align="left">घरधनीको नाम : मोहन शर्मा</TableCell>
                  <TableCell align="left">सडक न : ६ मि.</TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                  <TableCell component="th" scope="row">करदाता संकेत न: ०४-२७-०२१३</TableCell>
                  <TableCell align="left">जग्गा कित्ता न: १६८७,१७०९,१७४०</TableCell>
                  <TableCell align="left">आन्तरिक संकेत न: -</TableCell>
                  <TableCell align="left">वडा नं: ३</TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                  <TableCell component="th" scope="row">फारमको दर्ता मिति: २०७९-४-८</TableCell>
                  <TableCell align="left"><Editinfomodel /></TableCell>
                </TableRow>
               </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Card>

        <Card sx={{ width: "32vw",height:'240px',display:'flex', justifyContent:'center',alignItems:'center'  }}>
          <Card sx={{ width:'92%',height:'90%',borderRadius:'5px'}}>
            <div className='classheader'>

            </div>
          </Card>
        </Card>  
        </div>
        <Card sx={{ width:'96vw',height:'240px',margin:'10px auto'}}>
            <Tabcomponent />
        </Card>
        
        
    </div>
  )
}

export default Application