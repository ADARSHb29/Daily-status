const userData = [];
export default function (state = userData, action) {
    switch (action.type) {
        case 'MODIFY_ITEM':
            return state.map((n) => {
                if (n.id == action.payload.id) {
                    return action.payload;
                }
                return n;
            });
        case "ADD_ITEM":
            return [...state, action.payload];
        case 'DELETE_ITEM':
            return state.filter(item => { return item.id != action.payload.id })
            console.log(del);
        case 'LOAD_ITEM':
            return action.payload;
        default:
            return state;
    }
}