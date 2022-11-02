import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Tabcomponent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="basic tabs example">
          <Tab label="कागजात जाँच तथा दर्ता" {...a11yProps(0)} sx={{fontSize:'1.1 rem',fontWeight:600}} />
          <Tab label="१५ दिने सूचना (सर्जमिन)" {...a11yProps(1)} sx={{fontSize:'1.1 rem',fontWeight:600}} />
          <Tab label="प्लिन्थ निर्माण अनुमति" {...a11yProps(2)} sx={{fontSize:'1.1 rem',fontWeight:600}} />
          <Tab label="सुपरस्ट्रक्चर निर्माण अनुमति" {...a11yProps(3)} sx={{fontSize:'1.1 rem',fontWeight:600}} />
          <Tab label="निर्माण सम्पन्न" {...a11yProps(4)} sx={{fontSize:'1.1 rem',fontWeight:600}} />
          <Tab label="आवेदन स्थिति" {...a11yProps(5)} sx={{fontSize:'1.1 rem',fontWeight:600}} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
