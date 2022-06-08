import { connect } from 'react-redux';
import React from 'react'

const ChannelsList = (props) => {
console.log(props.channels);
    return (
        <div>
            {
                props.channels?.map(channel => (
                    <p>{channel}</p>
                ))
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        channels: state.channels
    }
}

export default connect(mapStateToProps)(ChannelsList)