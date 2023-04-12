import React, {Component} from 'react'
import CardList from './CardList'
import {robots} from './robots'
import SearchBox from './SearchBox'

class App extends Component {
  
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchField: '',
        }        
    }
    
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className='tc bg-navy'>
                <h1 className = 'bg-green yellow'>Robots</h1>
                <SearchBox searchChange = {this.onSearchChange} /> {/*use 'this.' cause we're using App object from its class and not a func.*/}
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;