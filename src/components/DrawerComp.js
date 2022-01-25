import React from 'react';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
const pages = ['About', 'Skills', 'Experience', 'Projects', 'Contacts'];

const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return ( 
        <React.Fragment>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>
                    {
                        pages.map((page, index) => (
                            <ListItemButton key={index} onClick={() => setOpenDrawer(false)}>
                            <ListItemIcon>
                            <ListItemText>{page}</ListItemText>
                            </ListItemIcon>
                            </ListItemButton>
                        ))
                    }
                </List>
            </Drawer>
            <IconButton sx={{color:'white', marginLeft:'auto'}} onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon />
            </IconButton>
        </React.Fragment>
     );
}
 
export default DrawerComp;