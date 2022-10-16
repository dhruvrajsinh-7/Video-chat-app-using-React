import React from "react";
import { Typography,AppBar } from "@material-ui/core";
import Videoplayer from "./components/Videoplayer";
import Options from "./componets/Options";
import Notification from "./componets/Notification";

const App = () => {
  return (
    <div>
     <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Video Chat</Typography>   
     </AppBar>
    
    </div>
  )
  }
  export default App;