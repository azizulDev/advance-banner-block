// Registering a block
wp.blocks.registerBlockType("rajuplugins/generic-heading", {
    title: "Generic Heading",
    icon: "heading",
    attributes: {
      
    },
    category: "common",
    edit: function (props) {
        return (
            <h1>Hello from Editor!!</h1>
        )
    },
    save: function (props) {
        return(
            <h2>Hello from Front-end!</h2> 
        )
    }
})