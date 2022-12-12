import './SearchPanel.css'
import React from 'react'


export default class SearchPanel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onUpdateSeaarch = this.onUpdateSeaarch.bind(this)
  }

  onUpdateSeaarch(e) {
    const term = e.target.value;
    this.setState({term})
    this.props.onUpdateSeaarch(term)
  }

  render() {
    return(
      <input
       type="text" 
       className='form-control search-input'
       placeholder='Search by posts'
       onChange={this.onUpdateSeaarch}
       />
    )
  }
}
