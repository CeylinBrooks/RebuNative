import React, { useState } from 'react';

export const SiteContext = React.createContext();

function SiteProvider(props) {
  const [user, setUser] = useState();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(false);

  const state = {
    user,
    setUser,
    trip,
    setTrip,
    loading,
    setLoading
  }
  
  return (
    <SiteContext.Provider value={state}>
      {props.children}
    </SiteContext.Provider>
  )
}

export default SiteProvider;