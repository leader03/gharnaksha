import * as React from 'react';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button'

export default function Message() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    position: 'absolute',
    top: 70,
    width:'50vw',
    height:'20rem',
    color:'black',
    right: 0,
    left: '-32vw',
    zIndex: 1,
    boxShadow:'0 2px 4px -1px rgb(0 0 0 / 30%)',
    borderRadius:'5px',
    p: 1,
    bgcolor: 'background.paper',
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative' }}>
      <Button onClick={handleClick}><MailIcon sx={{color:'white',fontSize:'30px'}} /></Button>
        {open ? (
          <Box sx={styles}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quaerat porro. Mollitia explicabo illo unde neque harum, ad amet veniam dolorem facilis! Incidunt optio quisquam illo temporibus voluptatibus dolorum vero sequi, doloribus minus quod quae maxime ratione unde aliquid voluptatem illum facilis, tempore error animi? Soluta praesentium laudantium, eligendi delectus eaque vero libero beatae quae aliquid vitae fuga numquam mollitia animi vel veritatis ducimus dignissimos maiores id dolorem eum. Accusamus asperiores atque repellat numquam, officiis beatae laudantium porro tempore vitae maiores deleniti cum labore expedita consequatur laboriosam quae optio quaerat nulla magni? Laudantium nemo at perferendis provident in repellendus minus?
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}




    // <Button><MailIcon sx={{color:'white',fontSize:'30px'}} /></Button>