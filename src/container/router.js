import {Route, Switch, Redirect} from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Home from '../pages/home';
import { Box } from '@chakra-ui/react';
import Settings from '../pages/settings';
import Timeline from '../pages/timeline';
import Profile from '../pages/profile';
import Purchase from '../pages/purchase';


const RouterMain = ()=>{
  
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/dashboard" strict render={
                (props)=> (
                    <Box p="1rem">
                        <Dashboard username="Jefferson" {...props}>
                            <>
                                <Route path={`${props?.match?.url}/profile`} exact render={()=> <Profile title="Profile" />}  />
                                <Route path={`${props?.match?.url}/timeline`} exact render={()=> <Timeline title="Timeline" />}  />
                                <Route path={`${props?.match?.url}/purchase`} exact render={()=> <Purchase title="Purchase" />}  />
                                <Route path={`${props?.match?.url}/settings`} exact render={()=> <Settings title="Settings" />}  />
                                <Redirect from='/dashboard' to="/dashboard/profile" render={()=> <Profile title="Profile" />}  />
                            </>    
                        </Dashboard> 
                    </Box>
                )
            }/>
            <Redirect to="/" />
        </Switch>
    )
}

export default RouterMain