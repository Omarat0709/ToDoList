import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IconButton, Box, Input, Heading, HStack, Select } from "@chakra-ui/react";

const TaskForm = ({ addTask }) => {
    //initialise new task state
  const [newTask, setNewTask] = useState({});

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const handleSubmit = (event) => {
    //prevent form from refreshing the page
    event.preventDefault();
    //if something was written in the 'add task' field, pass it onto the task list and reset the field to blank
    if (newTask.title) {
      addTask(newTask);
      setNewTask({});
    }
  };

  return (
    <Box maxW="400px" p={6} bgGradient="linear(to-r, teal.200, blue.200)" shadow="lg" borderRadius="lg" mx="auto" mt={4}>
      <Heading size="md" mb={4} textAlign="center" color="white">
        Add tasks here
      </Heading>

      <form onSubmit={handleSubmit}>
        <HStack mb={3}>
          <Input
            name="title"
            placeholder="New task"
            value={newTask.title || ""}
            onChange={handleInputChange}
            bg="white"
            variant="filled"
            _hover={{ bg: "gray.100" }}
          />

          <IconButton
            icon={<FaPlus size={15} />}
            isSquare
            type="submit"
            colorScheme="green"
            aria-label="Add task"
          />
        </HStack>

        <Select
          name="label"
          placeholder="Select task priority"
          onChange={handleInputChange}
          value={newTask.label || ""}
          bg="white"
          variant="filled"
          _hover={{ bg: "gray.100" }}
        >
          <option value="important">Important</option>
          <option value="urgent">Urgent</option>
          <option value="normal">Normal</option>
        </Select>
      </form>
    </Box>
  );
};

export default TaskForm;
