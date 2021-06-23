import React, { useState } from 'react';

export const SiteContext = React.createContext();

function SiteProvider(props) {
  const [user, setUser] = useState();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const state = {
    user,
    setUser,
    trip,
    setTrip,
    loading,
    setLoading,
    isAuthenticated,
    setIsAuthenticated,
    token,
    setToken,
  }
  
  return (
    <SiteContext.Provider value={state}>
      {props.children}
    </SiteContext.Provider>
  )
}

export default SiteProvider;