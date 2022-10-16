import React from "react";
import { Typography,AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Videoplayer from "./componets/Videoplayer";
import Options from "./componets/Options";
import Notification from "./componets/Notification";
const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',
        [theme.breakpoints.down('xs')]: {
            width: '90%',
        },
    },
    image: {
        marginLeft: '15px',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },

}));
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