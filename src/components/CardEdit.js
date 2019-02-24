import React, { Fragment } from 'react'
// import { Map } from 'immutable'
// import PropTypes from 'prop-types'
import styles from 'styles/Card.scss'

const CardEdit = ({
  note,
  subject,
  onSubjectEdit,
  onNoteEdit,
  onCancel,
  onDone
}) => {
  return (
    <Fragment>
      <div className='card'>
        {/* <h2 className="title">{note.get("subject")}</h2> */}
        <input
          type={'text'}
          placeholder='Enter the subject here...'
          value={subject}
          onChange={e => onSubjectEdit(e.target.value)}
        />
        <textarea
          cols='10'
          rows='15'
          charswidth='23'
          value={note}
          onChange={e => onNoteEdit(e.target.value)}
        />
        {/* <h2 className="sub_title">{note.get("author")}</h2> */}
        {/* <p className="description">{`${note.get("note").length > 150 ? note.get("note").substring(0, 150) + '...' : note.get("note")}`}</p> */}
        <div className='card-meta'>
          {/* <span className="timestamp">{note.get("time")}</span> */}
          <a className='' onClick={() => onCancel()}>
            Cancel
          </a>
          <a className='' onClick={() => onDone()}>
            Submit
          </a>
        </div>
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
}

CardEdit.propTypes = {
  //   repos: PropTypes.instanceOf(Map).isRequired
}

export default CardEdit
