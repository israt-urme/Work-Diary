import React from 'react'
import {Route} from 'react-router-dom'

import DiaryList from './containers/FormContainer'
import PlaceDetail from './containers/DetailView'
import Login from './containers/Login'

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={DiaryList} />
        <Route exact path='/place/:placeID' component={PlaceDetail} />
        <Route exact path='/login' component={Login} />
    </div>
)

export default BaseRouter