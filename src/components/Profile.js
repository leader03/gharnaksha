import * as React from 'react';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';

export default function Profile() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    position: 'absolute',
    top: 60,
    width:'30vw',
    height:'20rem',
    color:'black',
    right: 0,
    left: '-27vw',
    zIndex: 1,
    boxShadow:'0 2px 4px -1px rgb(0 0 0 / 30%)',
    borderRadius:'5px',
    p: 1,
    bgcolor: 'background.paper',
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative' }}>
      <Button onClick={handleClick}> <div className='consultancyProfile'></div> </Button>
        {open ? (
          <Box sx={styles}>
            It is profile component.
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}








