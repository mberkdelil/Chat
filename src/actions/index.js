export const signUp = user => {
    return { type: "SIGN_UP", payload: user }
}

export const login = user => {
    return { type: "LOGIN", payload: user }
}

export const logOut = id => {
    return { type: "LOG_OUT", payload: id }
}

export const addMessage = message => {
    return { type: "ADD_MESSAGE", payload: message }
}

export const deleteMessage = (id) => {
    return { type: "DELETE_MESSAGE", payload: (id) }
};

export const addComment = (comment) => {
    return { type: "ADD_COMMENT", payload: (comment) }
};

export const deleteComment = comment => {
    return { type: "DELETE_COMMENT", payload: comment }
};

export const addChannel = channel => {
    return { type: "ADD_CHANNEL", payload: channel }
};
