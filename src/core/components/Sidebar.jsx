import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { menus } from "../constants/menu";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ open }) => {
  const navigate = useNavigate()
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleMenuItemClick = (index, route) => {
    setSelectedIndex(index); // Update item yang dipilih
    navigate(route)
  };

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "white",
          color: "#213555",
          width: "15%",
        },
      }}
    >
      <h3 style={{ color: "#213555", margin: "20px 0px 10px 0px" }}>eRTe</h3>
      <List style={{ padding: "10px" }}>
        {menus.map((menu, idx) => {
          return (
            <>
              <ListItem
                key={idx}
                onClick={() => handleMenuItemClick(idx, menu.route)}
                sx={{
                  backgroundColor:
                    selectedIndex === idx ? "#cfdae7" : "transparent",
                  "&:hover": {
                    backgroundColor:
                      selectedIndex === idx ? "#f6f8fb" : "#f6f8fb",
                  },
                  cursor: "pointer",
                  borderRadius: "10px",
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '40px',
                  gap: '10px',
                  // marginBottom: '5px'
                }}
              >
                <img
                  src={menu.icon}
                  alt={`${menu.name} icon`}
                  width={20}
                  height={20}
                />
                <ListItemText>{menu.name}</ListItemText>
              </ListItem>
              {/* <Divider style={{ backgroundColor: "#F5EFE7" }} /> */}
            </>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
