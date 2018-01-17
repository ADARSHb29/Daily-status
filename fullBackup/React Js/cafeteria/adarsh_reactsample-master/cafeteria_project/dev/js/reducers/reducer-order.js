export default function (state = data, action) {
      switch (action.type) {
          case "LOAD_ADMIN_ORDER":
              return action.payload;
          default:
              return state;
      }
  }
  
  const data = [
      
  ];
  
  
  