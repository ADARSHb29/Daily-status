
export default function (state = [], action) {
    switch (action.type) {
        case "ADD_CART_ITEM":
                    return [...state,action.payload];
                    break;
        case "MODIFY_CART_ITEM":
            const data = state.map((iterator) => {
                if (iterator.id === action.payload.id) {
                    return action.payload;
                }
                return iterator;
            });
            return data;
            break;
        case "DELETE_CART_ITEM":
            return state.filter(eachstatevalue => { return eachstatevalue.id != action.payload.id });
            break;
    }
    return state;
}