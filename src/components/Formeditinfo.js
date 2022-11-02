import {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem'


const currencies = [
    {
      value: 'USD',
      label: '२०७९-८०',
    },
    {
      value: 'EUR',
      label: '२०७८-७९',
    },
    {
      value: 'BTC',
      label: '२०७७-७८',
    },
    {
      value: 'JPY',
      label: '२०७६-७७',
    },
  ];
  
  const nirman = [
    {
      value: 'USD',
      label: 'नयाँ भवन निर्माण',
    },
    {
      value: 'EUR',
      label: 'पुरानो भत्काइ नयाँ निर्माण',
    },
    {
      value: 'BTC',
      label: 'पुरानो भवनमा थप क्षेक्रफल सहित निर्माण',
    },
    {
      value: 'JPY',
      label: 'पर्खाल निर्माण',
    },
  ];

export default function Formeditinfo() {
    const [target, setTarget] = useState([])

    const handleChange = (e) => {
      setTarget({
        ...target,
        [e.target.name]: e.target.value
      })
    }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      autoComplete="off"
    >
      <div>
                    <TextField
                    size='small'
                    required
                    fullWidth
                    id="outlined-select-currency"
                    select
                    label="आर्थिक बर्ष"
                    onChange={handleChange}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    size='small'
                    required
                    fullWidth
                    id="outlined-select-currency"
                    select
                    label="निर्माणको विवरण"
                    onChange={handleChange}
                  >
                    {nirman.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
        </div>
        <div>
        <TextField
                    size='small'
                    required
                    fullWidth
                    name="ghardhani"
                    label="घरधनीको नाम"
                    type="text"
                    id="ghardhani"
                    onChange={handleChange}
                  />
        <TextField
                    size='small'
                    required
                    fullWidth
                    name="date"
                    label="Houseowner name"
                    type="text"
                    id="name"
                    onChange={handleChange}
                  />
        </div>
        <div>
        <TextField
                    size='small'
                    required
                    fullWidth
                    name="ooda"
                    label="वडा नं"
                    type="text"
                    id="ooda"
                    onChange={handleChange}
                  />
        <TextField
                    size='small'
                    fullWidth
                    required
                    name="kitta"
                    label="जग्गा कित्ता न"
                    type="text"
                    id="kitta"
                    onChange={handleChange}
                  />
      </div>
      <div>
      <TextField
                    size='small'
                    required
                    fullWidth
                    name="phone"
                    label="सम्पर्क नं"
                    type="text"
                    id="phone"
                    onChange={handleChange}
                  />
        <TextField
                    size='small'
                    required
                    fullWidth
                    name="address"
                    label="ठेगाना"
                    type="text"
                    id="address"
                    onChange={handleChange}
                  />
      </div>
      <div>
      <TextField
                    size='small'
                    fullWidth
                    name="roadname"
                    label="सडक नाम/ चाैडाई"
                    type="text"
                    id="roadname"
                    onChange={handleChange}
                  />
        <TextField
                    size='small'
                    fullWidth
                    required
                    name="kardata"
                    label="करदाता संकेत न"
                    type="text"
                    id="kardata"
                    onChange={handleChange}
                  />
      </div>
      <div>
      <TextField
                    size='small'
                    fullWidth
                    required
                    name="Longitude "
                    label="Longitude "
                    type="text"
                    id="Longitude "
                    onChange={handleChange}
                  />
        <TextField
                    size='small'
                    fullWidth
                    required
                    name="Latitude  "
                    label="Latitude  "
                    type="text"
                    id="Latitude  "
                    onChange={handleChange}
                  />
      </div>
    </Box>
  );
}
