import { AppBar, Toolbar, Typography, Tabs, Tab, useMediaQuery, useTheme, TabIndicatorProps } from '@mui/material';
import React from 'react';
import DrawerComp from './DrawerComp';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
const pages = ['About', 'Skills', 'Experience', 'Projects', 'Contacts'];

const Header = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    return (
        <React.Fragment>
            <AppBar sx={{ background: '#2d3436'}}>
                <Toolbar>
                    <AutoAwesomeIcon></AutoAwesomeIcon>
                    {
                        isMatch ? (
                            <>
                                <Typography sx={{fontSize: "1.5rem", paddingLeft: "3%"}}>IVAN</Typography>
                                <DrawerComp />
                            </>
                        ) : (
                            <>
                                <Tabs 
                                sx={{marginLeft:'auto'}}
                                value={value} 
                                onChange={handleChange} 
                                textColor="white"
                                TabIndicatorProps={{style: {background:'white'}}}
                                >
                                    {
                                        pages.map((page, index) => (
                                            <Tab key={index} label={page} />
                                        ))
                                    }
                                </Tabs>
                            </>
                        )
                    }
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default Header;