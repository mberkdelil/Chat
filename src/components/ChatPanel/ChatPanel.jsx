import React from 'react'
import { useState } from 'react'
import { Comment, Form, Header, Icon, Input, Segment, Button } from 'semantic-ui-react'
import Message from './Message'
import { connect } from 'react-redux'
import { addMessage } from '../../actions'
import { v4 as uuidv4 } from 'uuid';

const ChatPanel = (props) => {

    const userName = window.location.pathname.split("/")[2].replace(",", "");
    const profileName = props.users?.find(user => user.username === userName ? user : null)

    const [message, setMessage] = useState({
        username: profileName?.username, email: profileName?.email, avatar: profileName.avatar,
        title: "Write a Message Here...", comment: []
    });

    return (
        <>
            <Segment clearing style={{ marginRight: "23%", left: "23%" }} >
                <Header as="h3" floated='left'>
                    <span>
                        <Icon name="hashtag" />
                        channel name
                    </span>
                </Header>
                <Header as="h3" floated='right'>
                    <Input className='input' size="mini" icon="search"
                        name="searchTerm" placeholder="Currently inactive. :)" />
                </Header>
            </Segment>
            <Segment style={{
                position: "fixed", top: 71, bottom: 70, width: "77%", right: "0"
            }}>
                <Comment.Group style={{ height: "70vh", overflowY: "auto", maxWidth: "100%" }} >
                    <Message />
                </Comment.Group>
            </Segment>

            <Segment style={{
                position: "fixed", bottom: 0, width: "77%", display: "flex", right: 0, border: "1px solid black",
                backgroundColor: "brown"
            }}>
                {/* <Button icon >
                    <Icon name="add" />
                    <input type="file" name="file" />
                </Button> */}
                <Form style={{ flex: 1, border: "1px solid black" }} onSubmit={e => {
                    e.preventDefault();
                    message.title === "" ? alert("You cannot send blank messages.") : props.addMessage(message);
                    setMessage({ ...message, title: "" });

                }}>
                    <Input style={{ border: "1px solid black", fontSize: "16px" }} fluid name="message" value={message.title} labelPosition='left'
                        onChange={e => setMessage({ ...message, title: e.target.value })} placeholder="Send message to channel..." />

                </Form>
            </Segment>
        </>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users,
        message: state.message
    }
}

export default connect(mapStateToProps, { addMessage, })(ChatPanel);
