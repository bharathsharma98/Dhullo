export  const addEvent = (status) => {
    return {
      type: "PUSHEVENT",
      payload:status
    };
};
export  const getprevEvent = (eventsArray) => {
  return {
    type: "GETPREVEVENT",
    payload: eventsArray
  };
};

 
 