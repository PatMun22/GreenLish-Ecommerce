import { useEffect, useState } from "react";

const App = () => {
  const loadActivity = () => {
    setIsLoading(true);
    fetch("https://www.boredapi.com/api/activity")
      .then((response) => response.json())
      .then((data) => {
        setActivities([...activities, data.activity]);
        setIsLoading(false);
      });
  };

  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadActivity();
  }, []);

  if (activities.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ul>
        {activities.map((activity) => {
          <li key={activity.id}>{activity}</li>;
        })}
      </ul>
      <button disabled={isLoading} onClick={loadActivity}>
        Load Another
      </button>
    </>
  );
};
