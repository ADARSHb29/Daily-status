import { combineReducers } from 'redux';
import UserDetails from './reducer-Login';
import itemsReducer from './reducer-cart-item';
import items from './reducer-items';
 import finalOrder from './reducer-final-order';
 import OrderReducer from './reducer-order';
 import OrderDetailReducer from './reducer-order-list';
 import itemReducer from './ItemReducer';
 import ActiveItemReducer from './activeItemReducer';


/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    adminItem: OrderReducer,
    orderItem: OrderDetailReducer,
    items: items,
    users: UserDetails,
     itemsSelected: itemsReducer,
     finalOrder:finalOrder,
     activeItem: ActiveItemReducer ,
     adminAdd: itemReducer,
});

export default allReducers
