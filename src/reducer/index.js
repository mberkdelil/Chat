const initialState = {
    users: [
        {
            id: 1,
            username: "abc",
            email: "abc@gmail.com",
            password: "123456",
            isLogin: false,
            avatar: "https://cdn.dribbble.com/users/5094018/screenshots/14663135/avatar_4x.jpg"
        }
    ],
    message: [],
    channels: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SIGN_UP":
            return {
                ...state, users: [...state.users, action.payload]
            }

        case "LOGIN":
            return {
                ...state, users: state.users.map(user => user.email === action.payload.email && user.password === action.payload.password
                    ? { ...user, isLogin: true } : user)
            }

        case "LOG_OUT":
            return {
                ...state, users: state.users.map(user => user.id === action.payload ? { ...user, isLogin: false } : user)
            }

        case "ADD_MESSAGE":
            return {
                ...state, message: [...state.message, {
                    id: state.message.length + 1,
                    ...action.payload
                }]
            }

        case "DELETE_MESSAGE":
            return {
                ...state, message: state.message.filter(item => item.id !== action.payload)
            }

        case "ADD_COMMENT":
            return {
                ...state, message: state.message.map(mes => mes.id === action.payload.id ? {
                    ...mes, comment: [...mes.comment, {
                        commentsId: mes.comment.length + 1, ...action.payload
                    }]
                }
                    : mes)
            }

        case "DELETE_COMMENT":
            console.log(action.payload)

        case "ADD_CHANNEL":
            return {
                ...state, channels: [...state.channels, {
                    id: state.channels.length + 1,
                    ...action.payload
                }]
            }

        default:
            return state;

    };
}