const data = { showContent: 0 };

export default function (state = data, action) {
    switch (action.type) {
        case 'showDetails':
            return action.payload;
            break;
    }
    return state;
}
