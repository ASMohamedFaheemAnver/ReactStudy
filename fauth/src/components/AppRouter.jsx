import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'
import Homepage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import NotfoundPage from '../pages/NotfoundPage'
import ProfilePage from '../pages/ProfilePage'
import ProtectedPage from '../pages/ProtectedPage'
import RegisterPage from '../pages/RegisterPage'
import ResetPasswordPage from '../pages/ResetPasswordPage'

export default function AppRouter(props) {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/register' component={RegisterPage} />
          <Route exact path='/profile' component={ProfilePage} />
          <Route exact path='/protected-page' component={ProtectedPage} />
          <Route exact path='/forgot-password' component={ForgotPasswordPage} />
          <Route exact path='/reset-password' component={ResetPasswordPage} />
          <Route exact path='*' component={NotfoundPage} />
        </Switch>
      </Router>
    </>
  )
}
