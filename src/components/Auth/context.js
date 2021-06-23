import React, { useState } from 'react';

export const SiteContext = React.createContext();

function SiteProvider(props) {
  const [user, setUser] = useState();
  // =!==!==!==!==!==!==!==!==!= TODO: dev dummy role:
  // const [role, setRole] = useState('driver');
  const [role, setRole] = useState(null);
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // hardcoding test
  const [origin, setOrigin] = useState('test origin');
  const [destination, setDestination] = useState('test destination');

  const state = {
    user,
    setUser,
    role,
    setRole,
    trip,
    setTrip,
    loading,
    setLoading,
    origin,
    setOrigin,
    destination,
    setDestination,
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