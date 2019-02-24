import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
// import { Map } from 'immutable'
import { connect } from 'react-redux'
import styles from 'styles/notes.scss'
import Card from 'components/Card'
import CardEdit from 'components/CardEdit'
import { getAllNotes, addNewNote, editNote } from 'actions/notes'

class NotesContainer extends Component {
  static async getInitialProps ({ store, query }) {
    await store.dispatch(getAllNotes())
  }

  state = {
    subject: '',
    note: '',
    openEditor: false,
    id: '',
    toAddNew: false
  };

  render () {
    const { notes, addNewNote, editNote } = this.props
    const { subject, note, id, openEditor, toAddNew } = this.state
    return (
      <Fragment>
        <div className='wrapper'>
          {openEditor && (
            <CardEdit
              subject={subject}
              note={note}
              onNoteEdit={v => this.setState({ note: v })}
              onSubjectEdit={v => this.setState({ subject: v })}
              onDone={() => {
                if (toAddNew) {
                  addNewNote({ subject, note })
                } else {
                  editNote({ subject, note, id })
                }
                this.setState({
                  note: '',
                  subject: '',
                  id: '',
                  openEditor: false,
                  toAddNew: false
                })
              }}
              onCancel={() =>
                this.setState({
                  note: '',
                  subject: '',
                  id: '',
                  openEditor: false,
                  toAddNew: false
                })
              }
            />
          )}
          {!openEditor &&
            notes.get('notes').map(note => (
              <Card
                key={note.get('id')}
                note={note}
                onEdit={note =>
                  this.setState({
                    note: note.get('note'),
                    subject: note.get('subject'),
                    id: note.get('id'),
                    openEditor: true,
                    toAddNew: false
                  })
                }
              />
            ))}
        </div>
        {!openEditor && (
          <a
            onClick={() =>
              this.setState({
                note: '',
                subject: '',
                id: '',
                openEditor: true,
                toAddNew: true
              })
            }
            className='float'
          >
            +
          </a>
        )}
        <style jsx>{styles}</style>
      </Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
    notes: state.notes
  }
}

NotesContainer.propTypes = {
  user: PropTypes.object
}

export { NotesContainer }
export default connect(
  mapStateToProps,
  { getAllNotes, addNewNote, editNote }
)(NotesContainer)
