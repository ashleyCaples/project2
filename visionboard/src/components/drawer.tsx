import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddAPhotoTwoToneIcon from "@mui/icons-material/AddAPhotoTwoTone";
import FileDownloadTwoToneIcon from "@mui/icons-material/FileDownloadTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import SpaTwoToneIcon from "@mui/icons-material/SpaTwoTone";
import WorkTwoToneIcon from "@mui/icons-material/WorkTwoTone";
import BookmarkAddedTwoToneIcon from "@mui/icons-material/BookmarkAddedTwoTone";
import FlightTwoToneIcon from "@mui/icons-material/FlightTwoTone";
import AutoAwesomeTwoToneIcon from "@mui/icons-material/AutoAwesomeTwoTone";
import AttachMoneyTwoToneIcon from "@mui/icons-material/AttachMoneyTwoTone";
import FitnessCenterTwoToneIcon from "@mui/icons-material/FitnessCenterTwoTone";

type Anchor = "left";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      //   sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton href="./home">
            <ListItemIcon>
              <HomeTwoToneIcon />
            </ListItemIcon>
            <ListItemText>home</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="./locs">
            <ListItemIcon>
              <SpaTwoToneIcon />
            </ListItemIcon>
            <ListItemText>locs</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="./career">
            <ListItemIcon>
              <WorkTwoToneIcon />
            </ListItemIcon>
            <ListItemText>career</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="./skillhabit">
            <ListItemIcon>
              <BookmarkAddedTwoToneIcon />
            </ListItemIcon>
            <ListItemText>skills & habits</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="./travel">
            <ListItemIcon>
              <FlightTwoToneIcon />
            </ListItemIcon>
            <ListItemText>travel</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="./aesthetics">
            <ListItemIcon>
              <AutoAwesomeTwoToneIcon />
            </ListItemIcon>
            <ListItemText>aesthetics</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="./finances">
            <ListItemIcon>
              <AttachMoneyTwoToneIcon />
            </ListItemIcon>
            <ListItemText>finances</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="./fitnesshealth">
            <ListItemIcon>
              <FitnessCenterTwoToneIcon />
            </ListItemIcon>
            <ListItemText>fitness & health</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />
      <List>
      <ListItem disablePadding>
          <ListItemButton href="/upload">
            <ListItemIcon>
            <AddAPhotoTwoToneIcon />
            </ListItemIcon>
            <ListItemText>photos</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="./rickmorty">
            <ListItemIcon>
            <FileDownloadTwoToneIcon />
            </ListItemIcon>
            <ListItemText>rick & morty</ListItemText>
          </ListItemButton>
        </ListItem>
        {/* {["page", "page"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <AddAPhotoTwoToneIcon />
                ) : (
                  <FileDownloadTwoToneIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
    </Box>
  );

  return (
    <div className="homemenu">
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>menuu</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      
    </div>
  );
}
