import React, { useState } from 'react';

export const SiteContext = React.createContext();

function SiteProvider(props) {
  const [user, setUser] = useState();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(false);

  // hardcoding test
  const [origin, setOrigin] = useState('test origin');
  const [destination, setDestination] = useState('test destination');

  const state = {
    user,
    setUser,
    trip,
    setTrip,
    loading,
    setLoading,
    origin,
    setOrigin,
    destination,
    setDestination,
  }
  
  return (
    <SiteContext.Provider value={state}>
      {props.children}
    </SiteContext.Provider>
  )
}

export default SiteProvider;