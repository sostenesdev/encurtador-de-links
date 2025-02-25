import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import {getMenuItems} from './menuItems'
import { Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

import loginService from '../../services/authService';

const drawerWidth = 240;

export default function Sidebar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
  
    const handleDrawerClose = () => {
      setIsClosing(true);
      setMobileOpen(false);
    };
  
    const handleDrawerTransitionEnd = () => {
      setIsClosing(false);
    };
  
    const handleDrawerToggle = () => {
      if (!isClosing) {
        setMobileOpen(!mobileOpen);
      }
    };
    const navigate = useNavigate()
    const menuItems = getMenuItems()

    const handleLogout = () => {
      const {handleLogout} = loginService()
      handleLogout()
      navigate('/login')
    }

    const drawer =(
        <><Toolbar >
        <Stack>
        <Typography variant="h6" noWrap component="div">
            Teste
        </Typography>
        <Typography variant="p" noWrap component="div">
            Aplicativo Teste
        </Typography>
        </Stack>
    </Toolbar>
    <Divider />
    <List>
        {menuItems.map((item)=>(
             <ListItem
             key={item?.texto}
             disablePadding
             onClick={item?.acao}
         >
             <ListItemButton>
                 <ListItemIcon>
                     {item?.icone}
                 </ListItemIcon>
                 <ListItemText primary={item?.texto} />
             </ListItemButton>
         </ListItem>
        ))}
    </List>
        </>
    )
      // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;
    return (
            <Box sx={{ display: 'flex' }}>
              <CssBaseline />
              <AppBar
                position="fixed"
                sx={{
                  width: { sm: `calc(100% - ${drawerWidth}px)` },
                  ml: { sm: `${drawerWidth}px` },
                }}
              >
                <Toolbar>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" noWrap component="div">
                    App Teste
                  </Typography>
                  <Box sx={{ ml: 'auto' }}>
                  <IconButton color="inherit">
                    <LogoutIcon onClick={handleLogout} />
                  </IconButton>
                </Box>
                </Toolbar>
              </AppBar>
              <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
              >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                  container={container}
                  variant="temporary"
                  open={mobileOpen}
                  onTransitionEnd={handleDrawerTransitionEnd}
                  onClose={handleDrawerClose}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                  sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                  }}
                >
                  {drawer}
                </Drawer>
                <Drawer
                  variant="permanent"
                  sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                  }}
                  open
                >
                  {drawer}
                </Drawer>
              </Box>
              <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
              >
                <Toolbar />
                {props.children}
              </Box>
            </Box>
          );
}
