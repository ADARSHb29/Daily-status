export const selectUser = (user) => {
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
export const deleteUser= (user) => {
    return {
        type: 'DELETE',
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
export const modifyUser = (user) => {
    return {
        type: 'modify',
        payload: user
        }
    };
//  export const modify=(user)=>{
//      return{
//              type:'MODIFY',
//              payload:user
//             //     first:user.first,
//             //             last: user.last,
//             //              age:a.age,
//             //              description: user.description,
//             //              id:user.id,
//             //              thumbnail:user.thumbnail

//             //  }
//      }
//  };
