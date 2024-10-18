import React, {useState} from 'react';

import { FaPencilAlt } from "react-icons/fa";import {Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Input,
    useDisclosure,
    IconButton,
  } from "@chakra-ui/react";


function EditTask ({tasks, editTask}) {

    const [editedTitle, setEditedTitle] = useState(tasks.title);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleSave = () => {
        editTask(tasks.id, editedTitle);
        onClose();
    }
    return (
        <>
        <IconButton icon={<FaPencilAlt size={25} />}isRound='true' onClick={onOpen} />
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent w='90%'>
            <ModalHeader>Edit selected task</ModalHeader>
                <ModalBody>
                    <Input value={editedTitle} onChange={e => setEditedTitle(e.target.value)} />
                </ModalBody>
            <ModalFooter>
                <Button mr={3} onClick={onClose}>
                Cancel
                </Button>
                <Button colorScheme='green' variant="solid" onClick={handleSave}>
                Save Changes
                </Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
        </>
    );
}
export default EditTask;