/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */
const data=[
    {
        id: 1,
        first: "Karthi",
        last: "Zeus",
        age: 22,
        description: "Karthi is a React developer and YouTuber",
        thumbnail: "https://yt3.ggpht.com/-UMGdHzSnJME/AAAAAAAAAAI/AAAAAAAAAAA/WG0dPHfiksk/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
    },
    {
        id: 2,
        first: "Joby",
        last: "Wasilenko",
        age: 27,
        description: "Joby loves the Packers, cheese, and turtles.",
        thumbnail: "http://i.imgur.com/52xRlm8.png"
    },
    {
        id: 3,
        first: "Madison",
        last: "Williams",
        age: 24,
        description: "Madi likes her dog but it is really annoying.",
        thumbnail: "http://i.imgur.com/4EMtxHB.png"
    }
];
export default function (state=data,action) {
        switch(action.type){
            case "modify":
            return state.map((n)=>{
                if(n.id==action.payload.id)
                {
                    console.log(action.payload);
                  return action.payload;
                }
                return n;
            });   
            case "delete":
            return state.filter(item => { return item.id != action.payload.id })
      console.log(del);
         default: return state;
        }   
}
