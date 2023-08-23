import { useState, useRef, useEffect } from 'react'

import styles from '../../styles/Home.module.css'


function Card({ card, index, lockBoard, clickHandler }: { card: any; index: number, lockBoard: boolean, clickHandler(e, c): void }) {
    if (card != undefined) {
        return (
            <div className={styles.box + ` ${card.status} ${card.isActive ? styles.active : ''} ${card.status === 'match' ? styles.active : ''} `}
                key={card.key} onClick={() => lockBoard ? clickHandler(card, index) : undefined}>
                <img key={card.key} src={card.img} alt='Dynamic Image' title={card.id.toString()}

                />
            </div>

        )
    }
}

export default function Cards({ cards }: { cards: any }) {


    const [previousCardState, setPreviousCardState] = useState(-1)
    const [cards_, setCards_] = useState([])
    const [lockBoard, setlockBoard] = useState(true)

    const activeBox = (currentCard) => {
        cards_[previousCardState].isActive = true
        cards_[previousCardState].status = "match"
        cards_[currentCard].isActive = true
        cards_[currentCard].status = "match"
        setPreviousCardState(-1)
        setlockBoard(true)
    }

    const passiveBox = (currentCard) => {
        setlockBoard(false)
        setTimeout(() => {
            cards_[previousCardState].isActive = false
            cards_[previousCardState].status = "unmatch"
            cards_[currentCard].isActive = false
            cards_[currentCard].status = "unmatch"
            setPreviousCardState(-1)
        }, 1000);
        setTimeout(() => {
            setlockBoard(true)
        }, 2000);

    }


    const matchCheck = (currentCard) => {
        cards_[currentCard].isActive = true
        setCards_([...cards_])
        if (cards[previousCardState] !== undefined && (cards_[currentCard].name === cards[previousCardState].name)) {

            activeBox(currentCard)
        } else {
            if (cards_[previousCardState] !== undefined) passiveBox(currentCard);
            else {
                setPreviousCardState(currentCard)
                cards_[currentCard].isActive = true
                setCards_([...cards_])
            }

        }

        console.log("currentCard", currentCard)
        console.log("previousCardState", previousCardState)
        console.log("cards[currentCard]", cards[currentCard])
        console.log(" cards[previousCardState]", cards[previousCardState])
    }

    const clickHandler = async (box: any, boxIndex: number) => {
        matchCheck(boxIndex)

    }

    useEffect(() => {
        setCards_(cards)
    }, [cards]);



    return (

        <div className="container">
            <div className={styles.app}>
                {cards_.map((card, index) => {
                    return <Card key={index} card={card} index={index} lockBoard={lockBoard} clickHandler={clickHandler} />
                })}
            </div>
        </div>

    );
}