import React from "react";
import { navigationMenu } from "./SideBarNavigation";
import { Avatar, Card, Divider } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

const SideBar = () => {

  const { auth } = useSelector(store => store)
  const navigate = useNavigate()

  const handelNavigate = (item) => {
    if (item.title === "Profile") {
      navigate(`/profile/${auth.user?.id}`)
    } else {
      navigate(item.path)
    }
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Card className="card h-screen flex flex-col justify-between py-5">
      <div className="space-y-8 pl-5">
        <div className="">
          <span className="logo font-bold text-xl">Social Sphere </span>
        </div>

        <div className="space-y-8">
          {navigationMenu.map((item) => (
            <div onClick={() => handelNavigate(item)} className="cursor-pointer flex space-x-3 items">
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Divider />

        <div className="pl-5 flex items-centre justify-between pt-5">

          <div className="flex items-center space-x-3">
            <Avatar src=""></Avatar>
            <div>
              <p className="font-bold text-lg">{auth.user?.firstName + " " + auth.user?.lastName}</p>
              <p className="opacity-70">@{auth.user?.firstName.toLowerCase() + "_" + auth.user?.lastName.toLowerCase()}</p>
            </div>
          </div>

          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MoreVertIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>

        </div>

      </div>
    </Card>
  );
};

export default SideBar;
