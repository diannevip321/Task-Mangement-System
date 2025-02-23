import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listTasks } from "../graphql/queries";

const FetchTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await API.graphql(graphqlOperation(listTasks));
        setTasks(response.data.listTasks.items);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title} - {task.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchTasks;

