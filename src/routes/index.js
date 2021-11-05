import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Mybets from '../containers/bets'
import { Feeds } from '../containers/feeds'
import { Main } from '../containers/Main'
import MyWallet from '../containers/my-wallet'
import { MyFeeds } from '../containers/myfeeds'
import { Profile } from '../containers/Profile'


function ProfileScreens() {
    return (


        <Switch>
            <Route path='/mywallet' component={MyWallet} />

            <Route path='/' component={Feeds} />

        </Switch>



    )
}


function UserScreens() {
    return (


        <Switch>
            <Route path='/mybets' component={Mybets} />

            <Route path='/myfeeds' component={MyFeeds} />


            <Route path='/' component={Profile} />

        </Switch>



    )
}

function AppNavigation() {
    return (

        <BrowserRouter>
            <Switch>

                <Route path='/' component={Main} />

            </Switch>


        </BrowserRouter>
    )
}

export { AppNavigation, UserScreens, ProfileScreens }
