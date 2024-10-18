import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { ChakraProvider, Button, Box } from "@chakra-ui/react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]); //tasks that will go into the list
  const addTask = (newTask) => {
    setTasks((prevTask) => [...prevTask, newTask]);
  };

  function deleteTask(id) {
    const newTasks = tasks.filter((tasks) => {
      return tasks.id !== id;
    });
    setTasks(newTasks);
  }

  function editTask(id, newTitle) {
    setTasks((prevTasks) =>
      prevTasks.map((tasks) =>
        tasks.id === id ? { ...tasks, title: newTitle } : tasks
      )
    );
  }

  const deleteAllTasks = () => {
    if (window.confirm("Are you sure you want to delete all tasks?")) {
      setTasks([]); // Clear all tasks
    }
  }

return (
    <ChakraProvider>
      <Box maxW="800px" mx="auto" mt={4}>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />

        {/* Add a button to delete all tasks */}
        {tasks.length > 0 && (
          <Button
            mt={4}
            colorScheme="red"
            onClick={deleteAllTasks} // Call the deleteAllTasks function
          >
            Delete All Tasks
          </Button>
        )}
      </Box>
    </ChakraProvider>
  );
}

export default App;
