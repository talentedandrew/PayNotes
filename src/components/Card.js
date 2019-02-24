import React, { Fragment } from 'react'
// import { Map } from 'immutable'
// import PropTypes from 'prop-types'
import styles from 'styles/Card.scss'

const Card = ({ note, onEdit }) => {
  return (
    <Fragment>
      <div className='card'>
        <h2 className='title'>{note.get('subject')}</h2>
        <h2 className='sub_title'>{note.get('author')}</h2>
        <p className='description'>{`${note.get('note').length > 150 ? note.get('note').substring(0, 150) + '...' : note.get('note')}`}</p>
        <div className='card-meta'>
          <span className='timestamp'>{note.get('time')}</span>
          <a className='' onClick={() => onEdit(note)}>Edit</a>
        </div>
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}

Card.propTypes = {
  //   repos: PropTypes.instanceOf(Map).isRequired
}

export default Card
