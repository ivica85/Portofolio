import React from "react";
import { Drawer, List, ListItem } from "@material-ui/core";
import { scroller } from 'react-scroll'

const SideDrawer = ({ open, onClose }) => {



  const scrollToElement = (element) => {

    scroller.scrollTo(element,{
      duration:1500,
      delay:100,
      smooth: true,
      offset: -88
    })

    onClose(false)

  }


  return (
    <Drawer anchor="right" open={open} onClose={() => onClose(false)}>
      <List>
        <ListItem button onClick={()=> scrollToElement('start')}>
          Start
        </ListItem>

        <ListItem button onClick={()=> scrollToElement('tech')}>
        Technologies
        </ListItem>

        <ListItem button onClick={()=> scrollToElement('desc')} >
        Short description
        </ListItem>

        <ListItem button onClick={()=> scrollToElement('myprojects')}>
        My Projects
        </ListItem>

        <ListItem button onClick={()=> scrollToElement('location')}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
