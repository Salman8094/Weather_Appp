import React, { Component } from 'react'
import drops from './drops.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className='spin'>
                <img src={drops} alt="" id='sp'/>
            </div>
        )
    }
}

export default Spinner
