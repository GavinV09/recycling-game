import React, { useState, useEffect } from 'react'
import { ITEMS } from '../utils/items.js'
import '../App.css';
import FallingGrid from './FallingGrid.jsx'
import Bins from './Bins.jsx'
import ScoreBoard from './ScoreBoard.jsx'
import LeaderBoard from './LeaderBoard.jsx'

function GameContainer() {
    const [score, setScore] = useState(0)
    const [items, setItems] = useState([])
    const [isGameOver, setIsGameOver] = useState(false);

    // Spawn new items
    const spawnItem = () => {
        const itemTypes = ['recycling', 'trash', 'compost'];
        const randomType = itemTypes[Math.floor(Math.random() * itemTypes.length)]
        const randomX = 30 + Math.random() * 40

        const matchingItems = ITEMS.filter((item) => item.type == randomType)
        const randomItem = matchingItems[Math.floor(Math.random() * matchingItems.length)]

        const newItem = {
            id: Date.now(),
            type: randomType,
            x: randomX,
            name: randomItem.name,
            type: randomItem.type,
            y: 0,
        }
        setItems((prevItems) => [...prevItems, newItem])
    }

    // Move items downward
    const moveItems = () => {
        setItems((prevItems) => 
            prevItems.map((item) => ({
                ...item,
                y: item.y + 1,
            }))    
        )
    }

    // Check for missed items
    const checkGameOver = () => {
        const missedItem = items.find((item) => item.y >= 80)
        if (missedItem) {
            setIsGameOver(true)
        }
    }

    // Check if item is placed correctly
    const onDropItem = (itemType, binType) => {
        if (itemType === binType) {
            setScore((prevScore) => prevScore + 10)
        } else {
            setIsGameOver(true)
        }
    }

    // Game Loop
    useEffect(() => {
        if (isGameOver) return
        
        const interval = setInterval(() => {
            spawnItem()
            moveItems()
            checkGameOver()
        }, 1000)

        return () => clearInterval(interval)
    }, [isGameOver, items])    

    return (
        <div className="game-container">    
            <div className="background"></div>
            <FallingGrid items={items}/>
            <Bins onDropItem={onDropItem}/>
            <ScoreBoard score={score}/>
            <LeaderBoard />
            {isGameOver && <div className="game-over">Game Over!</div>}
        </div>
    );
}

export default GameContainer;   