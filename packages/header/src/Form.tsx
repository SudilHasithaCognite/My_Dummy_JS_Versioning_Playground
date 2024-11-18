import React from "react";
import { testing } from "../Test/test";
export function Form({x}){
        <form onSubmit={(x) => {testing(x)}}>
            <input value={x}></input>
        </form>
}