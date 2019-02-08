require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Master from './components/Master';
import CreateStudent from './components/CreateStudent';
import DisplayStudents from './components/DisplayStudents';

render(
    <Router history={browserHistory}>
      <Route path="/" component={Master} >
        <Route path="/add-student" component={CreateStudent} />
        <Route path="/display-students" component={DisplayStudents} />
      </Route>
    </Router>,
document.getElementById('example'));