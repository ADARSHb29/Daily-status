export default function (state = data, action) {
    switch (action.type) {

        case "LOAD":
            return action.payload;

        default:
            return state;
    }
}

const data = [];