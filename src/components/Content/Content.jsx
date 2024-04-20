import React from "react";
import {AiFillForward, AiFillStar} from "react-icons/ai";
import {BiTrendingUp} from "react-icons/bi";
import MovieStrip from "../MovieStrip/MovieStrip";

export default function Content(){

    return (
        <div className="bg-dark-gray p-6 space-y-3 ">
            <MovieStrip
                name="Popular"
                icon={<BiTrendingUp size={20} color="#F21B3F"/>}
                request={`/discover/movie?language=en-US&include_adult=false&sort_by=popularity.desc`}
            />
        </div>
    );
}