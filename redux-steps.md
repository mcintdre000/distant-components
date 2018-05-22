# Redux Steps

1. Install Redux packages
    1. redux: for the stoe
    1. react-redux: hooks React to the store
1. Read data
    1. Create store
    1. Wrap App with <Provider store={store}> in index.js
    1. Use connect() to read data from stroe and give data to component as props
1. Write Data
    1. Create reducer that will be used with store
        1. Create reducer function
        1. Create action creators that build objects. Every action must have a type, and optionally a payload. Export our action creaors so we can use them from out components.
    1. Use action creators in components. 
        1. Optionally use mapDispatchToProps to force action creators to use dispatch.