import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Header = () => {
    const [Currency, setCurrency] = React.useState('');

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Home
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Coins
        </Typography>
        
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={Currency}
          onChange={handleChange}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={10}>USD</MenuItem>
          <MenuItem value={20}>INR</MenuItem>
          <MenuItem value={30}>YEN</MenuItem>
        </Select>
      </FormControl>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </Box>

  )
}

export default Header
