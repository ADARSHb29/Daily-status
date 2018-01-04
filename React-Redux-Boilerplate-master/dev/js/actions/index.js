export const selectUser = (user) => {
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
export const deleteUser= (user) => {
    return {
        type: 'delete',
        payload: user
    }
};
 export const modify=(user,a)=>{
     console.log(a);
     console.log(user);
     return{
             type:'modify',
             payload:{
                first:user.first,
                        last: user.last,
                         age:a.age,
                         description: user.description,
                         id:user.id,
                         thumbnail:user.thumbnail

             }
     }
 };
