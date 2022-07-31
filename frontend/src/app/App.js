import React from 'react';
import SideMenu from '../components/SideMenu';
import Client from '../Pages/Client';
import { CssBaseline, makeStyles} from '@material-ui/core';
import Header from '../components/Header';



const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})


function App() {
  const classes = useStyles();
  return (
    <>
      <SideMenu/>
      <div className={classes.appMain}>
        <Header/>
        
        <Client/>
      </div>
      <CssBaseline/>
    </>
      
    
  );
}

export default App;
