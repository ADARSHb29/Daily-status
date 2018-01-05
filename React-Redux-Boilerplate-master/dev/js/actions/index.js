export const selectUser = (user) => {
    return {
        type: 'VIEW',
        payload: user
    }
};
export const deleteUser= (user) => {
    return {
        type: 'DELETE',
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
