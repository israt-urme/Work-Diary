import React from 'react'
import {Route} from 'react-router-dom'

import DiaryList from './containers/FormContainer'
import PlaceDetail from './containers/DetailView'
const BaseRouter = () => (
    <div>
        <Route exact path='/' component={DiaryList} />
        <Route exact path='/:placeID' component={PlaceDetail} />
    </div>
)

export default BaseRouter