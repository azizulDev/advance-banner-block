// SCSS file import
import "./index.scss";

// Registering a block
wp.blocks.registerBlockType("yourplugins/advance-banner-block", {
    title: "Advance Banner Block",
    icon: "smiley",
    attributes: {
      dummyName: {
        type: 'string', 
        default: 'Post Grid'
      },
      dummyAuthor: {
          type: 'string',
          default: 'author'
      },
      dummyVersion:{
          type: 'string',
          default: '2.1.20'
      }
    },
    category: "common",
    edit: function (props) {
      props.setAttributes({dummyName: 'Raju'});
      return (
        <div className="my-custom-block">
            <h1>Hello from Gutenberg Editor!!!</h1>
        </div>
      )
    },
    save: function (props) {
        // to make a truly dynamic block, we're handling front end by render_callback under index.php file
        return null; 
    }
})
  
