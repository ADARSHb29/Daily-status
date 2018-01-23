export const AdminselectItem = (items) => {
    console.log("You clicked on item: ", items.first);
    return {
        type: 'ITEM_SELECTED',
        payload: items
    }
};
export const AdminmodifyItem = (items) => {
    return fetch('http://localhost:3001/items/' + items.id,
        {
            method: 'PUT',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(items)
        }).then(
        data =>
            ({
                type: "MODIFY_ITEM",
                payload: data.json()
            }),
        error => console.log(error)
        );
};
export const AdmindeleteItem = (items) => {
    console.log("adfdsaf",items);
    return fetch('http://localhost:3001/items/' + items.id,
        {
            method: 'DELETE',
        }).then(
        data =>
            ({
                type: 'DELETE_ITEM',
                payload: items
            }),

        error => console.log(error)
        );
};
export const AdminaddItems = (items) => {
    console.log("adfdsaf",items);
    return fetch('http://localhost:3001/items/',
        {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(items)
        }).then(
        data =>
            ({
                type: "ADD_ITEM",
                payload: data.json()
            }),
        error => console.log(error)
        );
};


export const modifyItem = (Item) => {
console.log(Item);
    return {
        type: 'MODIFY_CART_ITEM',
        payload: Item
    }
};
export const cartItems = (items) => {
    return {
        type: "ADD_CART_ITEM",
        payload: items

    }
};

export const deleteItem = (Item) => {
    return {
        type: 'DELETE_CART_ITEM',
        payload: Item
    }
};
export const finalCart = (data) => {
    return fetch('http://localhost:3001/Orders/',
        {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(
        data =>
            ({
                type: "ADD_FINAL_CART",
                payload: data.json()
            }),
        error => console.log(error)
        );

};
export const userLogging= (user) => {
    console.log("hello", user);
    return {
        type: "USER_LOGIN",
        payload: user
    };
};

