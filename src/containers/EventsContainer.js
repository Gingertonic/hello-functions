import React, { Component } from 'react'
import Event from '../components/Event'

export default class EventsContainer extends Component {
    state = { events: [{header: 'The Big One'}, {header: 'Gathering of 2 People'}] }

    componentDidMount() {
        fetch('https://hello-event-api-functions.netlify.com/.netlify/functions/fetchEvents')
            .then(r => r.json())
            .then(events => this.setState({events}))
    }

    render() {
        const renderEvents = this.state.events.map(e => <Event event={e}/>)
        return (
            <div>
                {renderEvents}
            </div>
        )
    }
}
