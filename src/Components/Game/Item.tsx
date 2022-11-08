import React from 'react'
import styled from 'styled-components'
import { useAppDispatch} from '../../hook'
import { gameFinished, gameStarted, houseSelected } from '../../redux/slices/gameSlice'
import PaperIcon from './media/icon-paper.svg'
import RockIcon from './media/icon-rock.svg'
import ScissorsIcon from './media/icon-scissors.svg'
import { motion } from 'framer-motion'



const Container = styled(motion.div) <{ itemType: string }>`
    background-color: ${props => ((props.itemType) ? `rgb(234,234,234)` : "#0c154179")};
    border-radius: 100%;
    height: 180px;
    width: 180px;
    border: solid 20px ${props => ((props.itemType === "paper") ? "rgb(87,113,246)" : (props.itemType === "rock") ? `rgb(223,64,93)` : (props.itemType === "scissors") ? `rgb(236,168,32)` : `#ffffff0`)};
    box-shadow: 0px 7px 0px ${props => ((props.itemType === "paper") ? "#2c42a2 " : (props.itemType === "rock") ? `rgb(156,22,52)` : (props.itemType === "scissors") ? `rgb(199,108,27)` : `#ffffff0`)},
                inset 0px 7px 0px rgb(189,193,213);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

interface PaperProps {
    item: string,
    setShow?: (value: string) => void;
}

const Item: React.FC<PaperProps> = ({ item, setShow }) => {
    const dispatch = useAppDispatch()
    const startGame = async () => {
        setShow("hidden")
        await new Promise((promise) => setTimeout((promise), 500))
        dispatch(gameStarted(item))
        await new Promise((promise) => setTimeout((promise), 1000))
        dispatch(houseSelected())
        await new Promise((promise) => setTimeout((promise), 1000))
        dispatch(gameFinished())
        setShow("default")
    }
    return (
        <Container
            whileTap={{
                translateY: "6px",
                boxShadow: '0px 0px 0px #2c42a2, inset 0px 0px 0px rgb(189,193,213) '
            }}
            transition={{ type: "spring", stiffness: 500, bounce: 0 }}
            itemType={item}
            onClick={() => startGame()}
        >
            {(item === "paper") ? <PaperIcon /> : (item === "rock") ? <RockIcon /> : (item === "scissors") ? <ScissorsIcon /> : <></>}
        </Container>
    )
}

export default Item