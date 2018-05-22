# Redux Steps

1. Install Redux packages
    1. redux: for the store
    1. react-redux: hooks React to the store
1. Read data
    1. Create store
    1. Wrap App with <Provider store={store}> in index.js
    1. Use connect() to read data from store and give data to component as props
1. Write data
    1. Create reducer that will be used with store
        1. Create reducer function
        1. Create action creators that build objects. Every action must have a type, and optionally a payload. Export action creators so we can use them from our components.
    1. Use actions creators in components, using dispatch.
        1. Optionally use mapDispatchToProps to pre-hook action creators to use dispatch.