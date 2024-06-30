import { getDatabase, ref, onValue } from 'firebase/database';
import { useState, useEffect } from 'react';

const useEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const eventsRef = ref(db, 'events');

    onValue(eventsRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      const eventsList = data
        ? Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }))
        : [];
      console.log(eventsList);
      setEvents(eventsList);
    });
  }, []);

  return events;
};

export default useEvents;
