import create from "zustand";

const useFileStore= create((set)=>({
    file:null,
    addNewFile: (newFile)=>set({file:newFile}),
    removefile: ()=>set({file:null}),
}))

export default useFileStore;