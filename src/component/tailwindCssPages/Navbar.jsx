import CommonButton from "./common-components/CommonButtonComponent"
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';


import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Navbar = () => {

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <div className='flex md:hidden' >
                <List>
                    {['About', 'Company', 'Prising', 'Contact', 'Projects'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </div>
            <Divider />
            <div className='flex md:hidden' >
                <List>
                    {['Login', 'SignUp', 'Settings', 'Sign out'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {text === "Login" && <LoginIcon />}
                                    {text === "SignUp" && <PersonAddIcon />}
                                    {text === "Settings" && <SettingsIcon />}
                                    {text === "Sign out" && <ExitToAppIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </div>
            <Divider />
            <div className='hidden md:flex xl:hidden ' >
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <div>
                                <div className="flex items-center gap-5">
                                    <LoginIcon />
                                    <CommonButton title={"Log in"} classStyle={`border p-2 gap-2 px-5 rounded-xl font-semibold`} />
                                </div>
                                <div className="flex my-5 items-center gap-5" >
                                    <PersonAddIcon />
                                    <CommonButton title={"Sign Up"} icon={true} classStyle={`border p-2 gap-2 text-[#083D44] bg-[#0CE4BF] px-5 rounded-xl font-semibold`} />
                                </div>
                            </div>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItemButton>
                </List>
            </div>
            <Divider />
            <div>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </List>
            </div>
        </Box>
    );

    return (
        <div className="flex text-center items-center p-5 px-10 md:px-20 xl:px-30" >
            <div className="flex items-center w-full" >
                <img className="h-10" src="https://static.vecteezy.com/system/resources/thumbnails/019/136/319/small_2x/amazon-logo-amazon-icon-free-free-vector.jpg" />
            </div>
            <div className="mx-5 xl:mx-10 hidden md:flex justify-center w-full " >
                <ul className="flex gap-4 xl:gap-10 text-white text-sm" >
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Changelog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="xl:flex gap-2 xl:gap-5 hidden text-sm justify-end w-full" >
                <CommonButton title={"Log in"} classStyle={`border p-2 gap-2 text-white px-5 rounded-xl font-semibold`} />
                <CommonButton title={"Sign Up"} icon={true} classStyle={`border p-2 gap-2 text-[#083D44] bg-[#0CE4BF] px-5 rounded-xl font-semibold`} />
            </div>
            {/* <div className="md:hidden flex items-center justify-end text-white" >
                <MenuIcon />
            </div> */}

            <div className='flex xl:hidden' >
                <div className="text-white" >
                    <Button className='flex md:hidden text-white' onClick={toggleDrawer(true)}><MenuIcon /></Button>
                </div>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
            </div>
        </div>
    )
}
export default Navbar