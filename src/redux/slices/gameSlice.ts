import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

export const gameStartedAs = createAsyncThunk(
    'game/gameStartedAs',
    async (action: string, d) => {
        let data = action
        await new Promise((data) => setTimeout((data), 200))
        // data = 'asdas'
        // return data
    }
)

interface GameState {
    score: number,
    gameActive: boolean
    gameFinishedData: boolean,
    playerSelected: string,
    houseSelectedData: string
    winStatus: string
    gameSettings: {
        paper: string,
        scissors: string,
        rock: string
    }
}

const initialState: GameState = {
    score: 0,
    gameActive: false,
    gameFinishedData: false,
    playerSelected: "",
    houseSelectedData: "",
    winStatus: "none",
    gameSettings: {
        paper: "scissors",
        scissors: "rock",
        rock: "paper",
    }
}
const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        houseSelected: (state) => {
            function getRandomInt(max: number) {
                return Math.floor(Math.random() * max);
            }
            state.houseSelectedData = Object.keys(state.gameSettings)[getRandomInt(3)]
            const sortedGameSettings = Object.entries(state.gameSettings).find(e => e[0] === state.playerSelected);
            if (sortedGameSettings) {
                if (state.playerSelected === state.houseSelectedData) {
                    state.winStatus = "draw"
                    state.gameFinishedData = true
                } else if (sortedGameSettings[1] === state.houseSelectedData) {
                    state.score -= 1
                    state.winStatus = "lost"
                    state.gameFinishedData = true
                } else {
                    state.score += 1
                    state.winStatus = "win"
                    state.gameFinishedData = true
                }
            }
        },
        gameFinished: (state) => {
            if (state.gameFinishedData) {
                state.houseSelectedData = ""
                state.playerSelected = ""
                state.winStatus = "none"
                state.gameActive = false
                state.gameFinishedData = false
            }
        },
        gameStarted: (state, action) => {
            // function getRandomInt(max: number) {
            //     return Math.floor(Math.random() * max);
            // }
            state.playerSelected = action.payload
            state.gameActive = true
            // state.houseSelectedData = Object.keys(state.gameSettings)[getRandomInt(3)]
            // async () => {
            //     console.log('sadas')
            //     await new Promise(resolve => setTimeout(resolve, 2000))
            //     console.log('aasdaas')
            // }
            // console.log('sada')
        }
    },
    extraReducers: (builder) => {
        builder.addCase(gameStartedAs.fulfilled, (state, action) => {
            console.log(action)
        })
    }
});

export const { houseSelected, gameFinished, gameStarted } = gameSlice.actions

export default gameSlice.reducer
