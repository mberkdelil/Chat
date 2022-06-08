import React, { useEffect, useState } from 'react'
import { Comment, Button, Icon } from 'semantic-ui-react'
import "./message.module.css";
import { deleteMessage, addComment, deleteComment } from '../../actions';
import { connect } from 'react-redux';

const Message = (props) => {

    const date = new Date();
    const time = (date.getDate() + "." + date.getMonth() + "." + date.getFullYear());
    const [comment, setComment] = useState({ id: "", username: "", avatar: "", title: "" });

    const [messageAndComment, setMessageAndComment] = useState({ messageId: "", commentId: "" });

    const deleteFromComments = (message_id, comment_id) => {
        setMessageAndComment({ ...messageAndComment, messageId: message_id, commentId: comment_id });
    };

    return (
        <>
            {
                props.message?.map((user) => (
                    <Comment key={user.id}>
                        <Comment>
                            <Comment.Avatar src={user.avatar} />
                            <Comment.Content >
                                <Comment.Author as="a">{user.username}</Comment.Author>
                                <Comment.Metadata>{time}</Comment.Metadata>

                                <Button onClick={() => props.deleteMessage(user.id)} style={{ float: "right" }} basic color='red' icon >
                                    <Icon name="delete" />
                                    Delete Message
                                </Button>
                                <Comment.Text style={{ fontSize: "18px" }}><b>{user.title}</b></Comment.Text>
                                {user.comment?.length > 0 ? <p style={{ textDecoration: "underline", fontWeight: "bold" }}>Comments</p> : ""}
                                {
                                    user.comment?.map(com => (
                                        <div key={com.commentsId}>
                                            <img src={com.avatar} alt={com.username} style={{ borderRadius: "50%", width: "13px", height: "13px" }} />
                                            <span style={{ fontSize: "16px" }}><b><strong>{com.username}</strong></b></span>&nbsp;&nbsp;
                                            <span style={{ fontSize: "16px" }}><i>{com.title}</i></span>
                                            &nbsp;
                                        </div>
                                    ))
                                }

                                <form onSubmit={e => {
                                    e.preventDefault();
                                    comment.title === "" ? alert("You cannot send blank comment.") : props.addComment(comment);
                                    document.getElementById("comment").value = ""
                                }} style={{ marginLeft: "2%" }}>
                                    <input onChange={e => {
                                        setComment({
                                            ...comment, id: user.id,
                                            username: user.username,
                                            avatar: user.avatar,
                                            title: e.target.value
                                        })
                                    }} id="comment" type="text" style={{ borderRadius: "10px" }}
                                        placeholder="Your Comment" />
                                </form>

                                <hr />
                            </Comment.Content>
                        </Comment>
                    </Comment>
                ))
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        message: state.message,
        users: state.users
    }
}

export default connect(mapStateToProps, { deleteMessage, addComment, deleteComment })(Message)