import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
// import { Map } from 'immutable'
import { connect } from 'react-redux'
import styles from 'styles/login.scss'
import { login } from 'actions/user'

class LoginContainer extends Component {
  //   static async getInitialProps ({ store, query }) {
  //     let lang = query.lang || 'javascript'
  //     await store.dispatch(getTopRepos({ lang }))
  //   }
  componentDidMount () {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          console.log('service worker registration successful')
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message)
        })
    }
  }
  onSubmit () {
    let { login } = this.props
    login({ ...this.state })
  }

  state = {
    email: '',
    password: ''
  };

  render () {
    const { email, password } = this.state
    const { user } = this.props
    return (
      <Fragment>
        <div className='wrapper'>
          <div className='left'>
            <div className='textwrapper'>
              <h2>PayNotes</h2>
              <p>A perfect place to keep your notes</p>
            </div>
          </div>
          <div className='right'>
            <div className='inputwrapper'>
              <h2>Login below to get started</h2>
              <input
                type={'email'}
                placeholder='Email Address'
                value={email}
                onChange={e => this.setState({ email: e.target.value })}
              />
              <input
                type={'password'}
                placeholder='Your Password'
                value={password}
                onChange={e => this.setState({ password: e.target.value })}
              />
              <button
                disabled={user.get('isLoadinguser') || (!email || !password)}
                type='submit'
                onClick={() => this.onSubmit()}
              >
                Login
              </button>
              {user.get('message') && <p>{user.get('message')}</p>}
            </div>
          </div>
        </div>
        <style jsx>{styles}</style>
      </Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

LoginContainer.propTypes = {
  user: PropTypes.object,
  login: PropTypes.func.isRequired
}

export { LoginContainer }
export default connect(
  mapStateToProps,
  { login }
)(LoginContainer)
