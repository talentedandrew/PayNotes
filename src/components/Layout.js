import React, { Component, Fragment } from 'react'
// import Link from 'next/link'
import styles from 'styles/Layout.scss'
import { connect } from 'react-redux'
import { logout } from 'actions/user'
class Layout extends Component {
  render () {
    const { user, children, logout } = this.props
    console.log('user', user.get('islogin'))
    return (
      <Fragment>
        <div className='layout'>
          {user.get('islogin') && (
            <div className='header'>
              <div className='logo'>
                <p>PayNotes</p>
              </div>
              <div className='profile'>
                <a onClick={() => logout()} className='logout'>
                  Logout
                </a>
                <a className='name'>{`${user.getIn([
                  'userInfo',
                  'firstName'
                ])} ${user.getIn(['userInfo', 'lastName'])}`}</a>
              </div>
            </div>
          )}
          <div className={`body ${!user.get('islogin') ? 'no-padding' : ''}`}>
            {children}
          </div>
        </div>
        <style jsx>{styles}</style>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  { logout }
)(Layout)
