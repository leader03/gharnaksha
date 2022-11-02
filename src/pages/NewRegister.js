import { useState } from 'react'



import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


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

const theme = createTheme();

const NewRegister = () => {

  const [target, setTarget] = useState([])

  const handleChange = (e) => {
    setTarget({
      ...target,
      [e.target.name]: e.target.value
    })
  }


  return (
    <div className='newregister'>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs"  sx={{margin:0}}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box component="form" sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    size='small'
                    required
                    fullWidth
                    name="date"
                    label="फारम पेश मिति"
                    type="text"
                    id="date"
                    value='२०७९-६-१३'
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    size='small'
                    fullWidth
                    name="roadname"
                    label="सडक नाम/ चाैडाई"
                    type="text"
                    id="roadname"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <FormGroup sx={{marginTop:'5rem'}}>
      <FormControlLabel control={<Checkbox defaultChecked />} label="१। जग्गा धनी प्रमाणपत्र प्रतिलिपि" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="२। चालु आर्थिक बर्षको मालपोत तिरेको रसिदको प्रतिलिपि" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="३। नागरिकता प्रमाणपत्रको प्रतिलिपि" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="४। कि.नं.स्पष्ट भएको नापी प्रमाणित नक्शा (ब्लु प्रिन्ट)" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="५। डिजाईनरको अनुमतिपत्रको नबिकरण सहितको फोटोकपी (सरोकारवालाबाट प्रमाणित)" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="६। मञ्जुरी लिई बनाउने भएमा नक्शा वालाले कानुन शाखाको रोहवरमा भएको मञ्जुरीनामा" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="७। वारेश राखि नक्शा पास गर्ने भए वारिसको प्रमाणितको प्रतिलिपि" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="८। नक्सा बनाउने वा भवन डिजाईन गर्ने प्राविधिकद्धारा मन्जुरी पत्र" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="९। भवनको नक्सा" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="१०। घरधनिको फोटो" />
    </FormGroup>
    </div>
  )
}

export default NewRegister