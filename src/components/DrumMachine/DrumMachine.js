"use client";
import React from "react";
import useSound from "use-sound";

import styles from "./DrumMachine.module.css";

const SOUND_SRC = "/909-drums.mp3";

function DrumMachine({ soundEnabled }) {
    const [play] = useSound(SOUND_SRC, {
        sprite: {
            kick: [0, 350],
            hihat: [374, 160],
            snare: [666, 290],
            cowbell: [968, 200],
        },
        soundEnabled: true,
    });

    function playFunctionCreator(id) {
        return () => {
            if (soundEnabled) {
                play({ id });
            }
        };
    }

    return (
        <div className={styles.wrapper}>
            <button onClick={playFunctionCreator("kick")}>Kick</button>
            <button onClick={playFunctionCreator("hihat")}>Hat</button>
            <button onClick={playFunctionCreator("snare")}>Snare</button>
            <button onClick={playFunctionCreator("cowbell")}>Cowbell</button>
        </div>
    );
}

export default DrumMachine;
