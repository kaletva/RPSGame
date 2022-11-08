import React, { useState } from 'react'
import Item from './Item'
import styles from './Game.module.scss'
import { useAppSelector } from '../../hook'
import styled from 'styled-components'
import { motion } from 'framer-motion'
const ActiveGameContainer = styled.div`
    margin-top: 50px;
    display: flex;
    width: 50%;
`

const ChooseContainer = styled(motion.div)`
    align-items: center;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    text-transform: uppercase;
    color: white;
`

const Game = () => {
    const { gameActive, playerSelected, houseSelectedData } = useAppSelector(slices => slices.gameSlice)
    const [show, setShow] = useState("default")
    const itemVariants = {
        default: { opacity: 1 },
        hidden: { opacity: 0, y: 10 },
        active: { opacity: 1, x: 0 },
        notActive: {
            opacity: 0,
            x: 10
        }

    }
    const playerScoreVariants = {
        none: { opacity: 1, x: 0 },
        win: { x: 170, opacity: 1 },
        lost: { opacity: 0 },
        draw: { x: 170 }
    }
    const houseScoreVariants = {
        none: {
            opacity: 1, x: 0,
            transition: {
                delay: 0.2
            }
        },
        win: { opacity: 0 },
        lost: { opacity: 1, x: -170 },
        draw: { x: -170 }
    }
    const { winStatus } = useAppSelector(s => s.gameSlice)




    if (gameActive) {
        return (
            <>
                <ActiveGameContainer>
                    <ChooseContainer
                        variants={playerScoreVariants}
                        initial={{ opacity: 0, x: -20 }}
                        animate={winStatus}
                    >
                        <h2>you {winStatus === "win" ? "win" : " picked"}</h2>
                        <Item item={playerSelected} />
                    </ChooseContainer>
                    {winStatus === "draw" ?
                        <ChooseContainer initial={{ opacity: 0, y: -20 }} animate={{opacity: 1, y: 0}}>
                            <h1>draw</h1>
                        </ChooseContainer> : ""
                    }
                    <ChooseContainer
                        variants={houseScoreVariants}
                        initial={{ opacity: 0, x: 20 }}
                        animate={winStatus}
                    >
                        <h2>the house {winStatus === "lost" ? "win" : " picked"}</h2>
                        <Item item={houseSelectedData} />
                    </ChooseContainer>
                </ActiveGameContainer>
            </>
        )
    }

    return (
        <motion.div animate={show} initial={{ opacity: 0 }} variants={itemVariants} className={styles.game}>
            <div className={styles.paper}>
                <Item setShow={setShow} item="paper" />
            </div>
            <div>
                <Item setShow={setShow} item="scissors" />
            </div>
            <div className={styles.rock}>
                <Item setShow={setShow} item="rock" />
            </div>
        </motion.div>
    )
}

export default Game