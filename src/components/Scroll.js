import React from 'react'
import PropTypes from 'prop-types'

const Scroll = props => {
  return (
    <div style={{overflowY: 'scroll', height: '750px'}}>
        {props.children}
    </div>
  )
}

export default Scroll