import create from "zustand";
import react from 'react'

interface NUMBER {
    num:number
    setNum:(e:number) => void
}

const useStore = create<NUMBER>((set) => ({
    num:0,
    setNum:() => set((state) => ({num:state.num+1}))
})) 

export {useStore}