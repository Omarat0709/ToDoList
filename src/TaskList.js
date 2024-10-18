import React, { useState } from "react";
import { Box, Heading, Text, IconButton, Input, HStack } from "@chakra-ui/react";
import { DeleteIcon, EditIcon, CheckIcon } from "@chakra-ui/icons";

const TaskList = ({ tasks, deleteTask, editTask }) => {
    //state that checks if the editing process started
  const [isEditing, setIsEditing] = useState(null);
  //state that allows the new edited task to be saved
  const [editTitle, setEditTitle] = useState("");
  
  //starts the task editing process
  const handleEdit = (id, currentTitle) => {
    setIsEditing(id);
    setEditTitle(currentTitle);
  };

  //saves the edited task back to the list
  const saveEdit = (id) => {
    editTask(id, editTitle);
    setIsEditing(null); // Exit editing mode
    setEditTitle(""); // Clear input
  };

  //handles task deletion
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(id);
    }
  };

  return (
    <Box mt={4}>
      {tasks.map((task) => (
        <Box
          key={task.id}
          p={4}
          shadow="md"
          borderWidth="1px"
          borderRadius="lg"
          mb={3}
          bg={
            task.label === "important"
              ? "yellow.200"
              : task.label === "urgent"
              ? "red.200"
              : "green.200"
          }
        >
          {isEditing === task.id ? (
            <HStack>
              <Input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                bg="white"
                _hover={{ bg: "gray.100" }}
              />
              <IconButton
                icon={<CheckIcon />}
                onClick={() => saveEdit(task.id)}
                aria-label="Save Task"
                colorScheme="green"
              />
            </HStack>
          ) : (
            <>
              <Heading fontSize="xl">{task.title}</Heading>

              <Text mt={2}>
                {task.label === "important" && <strong style={{ color: 'orange' }}>Important</strong>}
                {task.label === "urgent" && <strong style={{ color: 'red' }}>Urgent</strong>}
                {task.label === "normal" && <span style={{ color: 'green' }}>Normal</span>}
              </Text>

              <HStack mt={2}>
                <IconButton
                  icon={<DeleteIcon />}
                  onClick={() => handleDelete(task.id)}
                  aria-label="Delete Task"
                  colorScheme="red"
                />
                <IconButton
                  icon={<EditIcon />}
                  onClick={() => handleEdit(task.id, task.title)}
                  aria-label="Edit Task"
                  colorScheme="blue"
                />
              </HStack>
            </>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default TaskList;
