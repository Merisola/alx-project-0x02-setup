import React from "react";
import { type CardProps} from "@/interfaces";

const Card: React.FC<CardProps> = ({title, content}) => {
    return (
        <div className="border border-gray-300 rounded-md p-4 m-4 bg-white text-black">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default Card;