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
        <div className="page-banner">
            <div className="page-banner__bg-image" style={{ backgroundImage: "url('https://i.imgur.com/TBC4FAu.jpg')" }}></div>
            <div className="page-banner__content container t-center c-white">
                <h1 className="headline headline--large">Welcome!!</h1>
                <h2 className="headline headline--medium">We think you&rsquo;ll like it here.</h2>
                <h3 className="headline headline--small">
                Why don&rsquo;t you check out the <strong>major</strong> you&rsquo;re interested in?
                </h3>
                <a href="#" className="btn btn--large btn--blue">
                Explore Now
                </a>
            </div>
        </div>
      )
    },
    save: function (props) {
        // to make a truly dynamic block, we're handling front end by render_callback under index.php file
        return null; 
    }
})
  
