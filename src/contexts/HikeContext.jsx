/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useReducer } from "react";

const HikeContext = createContext();

const initialState = {
  hikes: [], // { id, name, length, difficulty, completed }
  status: "idle", // 'loading', 'error', 'ready'
};

function reducer(state, action) {
  switch (action.type) {
    case "hike/added": //Új túra felvétele.
      return { ...state, hikes: [...state, action.payload] };

    case "hike/deleted": //Törlés.
      return {
        ...state,
        hikes: state.hikes.filter((hike) => hike.id !== action.payload),
      };

    case "hike/toggled": //Teljesítettség váltása (checkbox).
      return {
        ...state,
        hikes: state.hikes.map((hike) =>
          hike.id === action.payload
            ? { ...hike, completed: !hike.completed }
            : hike
        ),
      };

    case "hike/reset": //Összes törlése.
      return { ...state, hikes: [] };

    default:
      throw new Error("Ismeretlen action típus");
  }
}

function HikeProvider({ children }) {
  const [{ hikes, status }, dispatch] = useReducer(reducer, initialState);

  return (
    <HikeContext.Provider value={{ hikes, status, dispatch }}>
      {children}
    </HikeContext.Provider>
  );
}

function useHikes() {
  const context = useContext(HikeContext);
  if (context === undefined)
    throw new Error("A useHikes a HikeProvider-en kívül lett használva");
  return context;
}

export { HikeProvider, useHikes };
