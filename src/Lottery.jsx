import { useState } from "react";
import { getTickets , sum} from "./helper.js";
import "./Lottery.css";
import Ticket from "./Ticket.jsx";

function Lottery({n=3 , winCondition})
{
    let [ticket ,setTicket]=useState(getTickets(n));
    let isWinning=winCondition(ticket)

    let buyTicket=()=>{
        setTicket(getTickets(n));
    }

    return(
        <>
        <h1>Lottery Game</h1>
        <div className="ticket">
            <Ticket ticket={ticket}/>
            <h3>{isWinning && "Congrats You Won"}</h3>
            <button onClick={buyTicket}>Buy New Ticket</button>
        </div>
        </>
    )
};

export default Lottery;