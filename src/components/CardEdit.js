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
  onDone,
  readMode
}) => {
  return (
    <Fragment>
      <div className='card'>
        {readMode && <h2 className='title'>{subject}</h2>}
        {!readMode && (
          <input
            type={'text'}
            placeholder='Enter the subject here...'
            value={subject}
            onChange={e => onSubjectEdit(e.target.value)}
          />
        )}
        {!readMode && (
          <textarea
            cols='10'
            rows='15'
            charswidth='23'
            value={note}
            onChange={e => onNoteEdit(e.target.value)}
          />
        )}
        {/* {readMode && <h2 className="sub_title">{note.get("author")}</h2>} */}
        {readMode && <p className='description'>{`${note}`}</p>}
        <div className='card-meta'>
          {/* {readMode && <span className="timestamp">{note.get("time")}</span>} */}
          <a className='' onClick={() => onCancel()}>
            {readMode ? 'Back' : 'Cancel'}
          </a>
          {!readMode && (
            <a className='' onClick={() => onDone()}>
              Submit
            </a>
          )}
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
