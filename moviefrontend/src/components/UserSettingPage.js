import React, { Component } from 'react';

export class UserSettingPage extends Component {
    render() {
        return (
            <div>
                <p>{ this.props.userSettingInfo.username }</p>
            </div>
        );
    }
}

export default UserSettingPage;
