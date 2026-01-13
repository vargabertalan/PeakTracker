
const initialState = {
  hikes: [], // { id, name, length, difficulty, completed }
  status: "idle", // 'loading', 'error', 'ready'
};

function reducer(state, action) {
    switch (action.type) {
        case "hike/added": //Új túra felvétele.
            
            return{ ...state, hikes: [...state, action.payload]}
            
        case "hike/deleted": //Törlés.
            
            return{}
        case "hike/toggled": //Teljesítettség váltása (checkbox).
            
            return{}
        case "hike/reset": //Összes törlése.
            
            return{}
    
        default:
            return{}
    }
}