const data = [];
export default function (state = data, action) {
    switch (action.type) {
        case 'ADD_FINAL_CART':
            return action.payload;
            break;
    }
    return state;
}