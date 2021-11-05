import React from 'react'
import { Header } from '../../components'
import { UserScreens } from '../../routes'
import { ButtonA } from '../../shared'
import './main.css'
import { routes } from './routes'
function Main({ history, ...props }) {
    console.log(props)
    return (
        <div className='main-screen-container flex-col'>
            <div>

                <Header />
            </div>

            <div className='content-container row-to-col-mob flex1 flex-row'>
                <div className="flex1 main-container">
                    <div className='flex-row justify-end menu-buttons-container'>

                        {
                            routes.map((item) => {

                                return <div className="menu-button-wrapper">
                                    <ButtonA style={{ backgroundColor: props.location.pathname == item.link ? '#9CE2C5' : '' }} onClick={() => { history.push(item.link) }}>
                                        {item.name}

                                    </ButtonA>


                                </div>
                            })
                        }

                    </div>
                    <div className='flex1'>
                        <UserScreens />
                    </div>


                </div>

                <div>

                    {
                        props.location.pathname !== '/mybets' &&

                        <div className="match-threads">

                            <div>
                                <h2>
                                    Live Match Threads
                                </h2>

                            </div>
                            {[1, 2, 3].map((item, i) => {
                                return (

                                    <div key={i} className='threadteam'>
                                        <p className='thread-team-heading'>
                                            EPL
                                        </p>
                                        <div>
                                            <p>Man Utd vs Liverpool
                                            </p>

                                        </div>

                                    </div>

                                )
                            })}


                        </div>
                    }


                </div>
            </div>






        </div>
    )
}

export { Main }
