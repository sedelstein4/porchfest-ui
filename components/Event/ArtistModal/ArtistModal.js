import React, {Fragment, useEffect, useRef, useState} from "react";
import ReactDOM from "react-dom";
import * as Styles from "../ArtistModal/styles"
import { Modal, Button, Group } from '@mantine/core';

export default function ArtistModal(props){
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Introduce yourself!"
            >
                <p>Text</p>
            </Modal>

            <Group position="center">
                <Button onClick={() => setOpened(true)}>Open Modal</Button>
            </Group>
        </>
    );
}