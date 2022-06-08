import React from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { logOut } from '../../actions';

const UserPanel = (props) => {

    const navigator = useNavigate();

    const userName = window.location.pathname.split("/")[2].replace(/,/g, '');
    const profileName = props.users?.find(user => user.username === userName ? user : null)

    return (
        <div style={{ padding: "2px", display: "flex", justifyContent: "space-between" }} >
            <p>{profileName.username}</p>
            <div onClick={e => {
                e.preventDefault();
                props.logOut(Number(profileName.id))
                alert("You logged out. You are redirected to the login page.");
                navigator("/");
            }} >
                LogOut  <Icon name='sign out' />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { logOut })(UserPanel)