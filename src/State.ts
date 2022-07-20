import create from "zustand";
import react from 'react'

interface NUMBER {
    num:number
    setNum:(e:number) => void
}

const useStore = create<NUMBER>((set) => ({
    num:0,
    setNum:(e) => set((state) => ({num:state.num+1}))
})) 

interface ID {
    Id:number
    setId:(e:number) => void
}
const useStore_1 = create<ID>((set) => ({
    Id:0,
    setId:(e) => set(() => ({Id:e}))
})) 

export {useStore,useStore_1}