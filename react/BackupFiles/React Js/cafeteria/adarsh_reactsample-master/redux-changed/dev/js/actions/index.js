export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
export const modify=(user)=>{

    return {
        type: 'modify',
        payload: user
    }

};