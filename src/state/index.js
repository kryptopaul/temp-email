import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState, useGlobalState} = createGlobalState({
    domains: ['@domain1.com', '@domain2.com', '@domain3.com'],
    currentEmail: ''
})

export {useGlobalState, setGlobalState}