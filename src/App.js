import React from "react";
import { Typography,AppBar } from "@material-ui/core";
import Videoplayer from "./componets/Videoplayer";
import Options from "./componets/Options";
import Notification from "./componets/Notification";

const App = () => {
  return (
    <div>
     <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Video Chat</Typography>   
     </AppBar>
    <Videoplayer/>
    <Options>
        <Notification/>
    </Options>
    </div>
  );
  }
  export default App;