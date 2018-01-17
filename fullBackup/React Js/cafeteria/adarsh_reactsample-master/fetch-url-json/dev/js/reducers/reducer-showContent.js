const data = { showContent: 0 };

export default function (state = data, action) {
    switch (action.type) {
        case 'SHOW_DETAILS':
            return action.payload;
            break;
    }
    return state;
}
