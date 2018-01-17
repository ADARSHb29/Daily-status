export const selectUser = (user) => {
    console.log(user);
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
export const modifyUser = (user) => {
    return {
        type: 'modify',
        payload: user
        }
    };
export const addUser=(user)=>{
    console.log(user);
    return{
        type:'add',
        payload:user
    }
};
export const showDetails = (value) => {
    return {
        type: 'showDetails',
        payload: {showContent:value}
    }
};

export const deleteUser= (user) => {
    return {
    type: 'DELETE',
    payload: user
    }
    };