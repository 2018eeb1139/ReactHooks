import React, { Component,useContext } from 'react'
import ComponentF from './ComponentF'
import {UserContext,ChannelContext} from '../App'

const ComponentE = () => {
    const user=useContext(UserContext)
    const channel=useContext(ChannelContext)
    return (
        <div>
            User-{user} Channnel-{channel}
        </div>
    )
}

export default ComponentE

