import React from 'react';
import { FiTrash2 } from "react-icons/fi";
import {Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Text,
    useDisclosure,
    IconButton,
  } from "@chakra-ui/react";


function DeleteTask ({tasks, deleteTask}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
        <IconButton icon={<FiTrash2 size={25} />}isRound='true' onClick={onOpen} />
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent w='90%'>
            <ModalHeader>Do you really want to delete the task?</ModalHeader>
                <ModalBody>
                    <Text>{tasks.title}</Text>
                </ModalBody>
            <ModalFooter>
                <Button mr={3} onClick={onClose}>
                No
                </Button>
                <Button
                colorScheme='red' variant="solid"
                onClick={() => {deleteTask(tasks.id);
                    onClose();
                }}
                >
                Yes
                </Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
        </>
    );
}
export default DeleteTask;