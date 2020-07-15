const notificationReducer = (state = [], action) => {
    switch (action.type) {
        case 'VOTENOTIFICATION': {
            return action.data;
        }

        case 'REMOVE': {
            return ' ';
        }

        default:
            return state;
    }
};

export const setNotification = (message, time) => {
    return dispatch => {
        dispatch({
            type: 'VOTENOTIFICATION',
            data: message,
        })
        setTimeout(() => {
            dispatch(deleteNotification());
        }, time);
    };
};

export const deleteNotification = () => {
    return {
        type: 'REMOVE',
    };
};

export default notificationReducer;