import React, { Component } from 'react'
import Event from '../components/Event'

export default class EventsContainer extends Component {
    state = { 
        events: [{header: 'The Big One'}, {header: 'Gathering of 2 People'}],
        message: ''     
    }

    componentDidMount() {
        fetch('https://hello-event-api-functions.netlify.com/.netlify/functions/fetchEvents')
            .then(r => r.json())
            .then(events => this.setState({events}))
    }

    handleInputChange = e => {
        this.setState({ message: e.target.value })
    }

    handleSubmit = () => {
        const options = {
            method: 'POST',
            body: JSON.stringify(this.state.message)
        }

        fetch('https://hello-event-api-functions.netlify.com/.netlify/functions/sendMessage', options)
            .then(r => r.json())
            .then(console.log)
    }

    render() {
        const renderEvents = this.state.events.map(e => <Event event={e}/>)
        return (
            <div>
                <form onSubmit={this.handleSubmit}><input type="text" onChange={this.handleInputChange} value={this.state.message}/></form>
                {renderEvents}
            </div>
        )
    }
}
