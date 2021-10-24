import React from 'react'
import { Link } from 'react-router-dom';

export const Landing = () => {
    return (
        <div>
             <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Users Connector</h1>
          <p className="lead">
            Enjoy the user's management
          </p>
          <div className="buttons">
            <Link to="/users" className="btn btn-primary">Users</Link>
            <Link to="/adduser" className="btn btn-light">Add User</Link>
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}
