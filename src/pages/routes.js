import { Switch, Route } from 'react-router-dom';
import Profile from './profile';

const DashRouter = ()=>{
    return(
        <Switch>
            <Route path="profile" strict component={Profile} />
        </Switch>
    )
}

export default DashRouter