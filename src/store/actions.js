//actions

import { INC, DEC, AddTodo, DelTodo } from "./constants";

export function incAction(){
    return {type: INC};
}

export function decAction(){
    return {type: DEC};
}

export function addtodoAction(){
    return {type: AddTodo, payload: text};
}

export function deltodoAction(){
    return {type: DelTodo, payload: index};
}
