import React from 'react'

const Event = ({event}) => {
    return (
        <div className="event-card">
            <h5>{event.header}</h5>
        </div>
    )
}

export default Event
