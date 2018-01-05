/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */
const data=[
    {
        id: 1,
        firstname: "Karthi",
        lastname: "Zeus",
        age: 22,
        description: "Karthi is a React developer and YouTuber",
        thumbnail: "https://yt3.ggpht.com/-UMGdHzSnJME/AAAAAAAAAAI/AAAAAAAAAAA/WG0dPHfiksk/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
    },
    {
        id: 2,
        firstname: "Joby",
        lastname: "Wasilenko",
        age: 27,
        description: "Joby loves the Packers, cheese, and turtles.",
        thumbnail: "http://i.imgur.com/52xRlm8.png"
    },
    {
        id: 3,
        firstname: "Madison",
        lastname: "Williams",
        age: 24,
        description: "Madi likes her dog but it is really annoying.",
        thumbnail: "http://i.imgur.com/4EMtxHB.png"
    }
];
export default function (state=data,action) {
        switch(action.type){
            // case "MODIFY":
            // return state.map((eachstatevalue)=>{
            //     if(eachstatevalue.id==action.payload.id)
            //     {
            //         console.log(action.payload);
            //       return action.payload;
            //     }
            //     return eachstatevalue;
            // });   
            case "DELETE":
            return state.filter(eachstatevalue => { return eachstatevalue.id != action.payload.id })
         default: return state;
        }   
}
