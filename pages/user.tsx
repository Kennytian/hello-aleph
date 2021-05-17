import React from "react";
import {withRouter} from "framework/react"

class User extends React.Component {
    render() {
        return (
          <div>
              <p>{this.props.router.pathname}</p>
            <div>你好，用户!</div>
          </div>
        );
    }
}

export default withRouter(User)