/* @refresh reload */
import { render } from 'solid-js/web';

import App from './App';
import { Route, Router } from '@solidjs/router';
import Home from './pages/Home/Home';
import Page404 from './pages/404/404';
import DetailsPage from './pages/Details/Details';
import DemosPage from './pages/Demos/Demos';
import ToolsPage from './pages/Tools/Tools';

const root = document.getElementById('root');

render(
    () => (
        <Router root={App}>
            <Route path="/" component={Home} />
            <Route path="/details" component={DetailsPage} />
            <Route path="/tools" component={ToolsPage} />
            <Route path="/demos" component={DemosPage} />
            <Route path="*:404" component={Home} />
        </Router>
    ),
    root!
);
