export default function (state = data, action) {
    switch (action.type) {
        case "modify":
            return state.map((n) => {
                if (n.id == action.payload.id) {
                    return action.payload;
                }
                return n;
            });
        case "add":
            return [...state, action.payload];     
case "DELETE":
return state.filter(eachstatevalue => { return eachstatevalue.id != action.payload.id })
case "LOAD":
return action.payload;        
default: 
            return state;
    }
}


const data = [
];
