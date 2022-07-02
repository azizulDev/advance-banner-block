import { InnerBlocks } from "@wordpress/block-editor";

// SCSS file import
import "./index.scss";

// Registering a block
wp.blocks.registerBlockType("rajuplugins/advance-banner-block", {
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
    
    const useMeLater = (
        <>
            <h1 className="headline headline--large">Welcome!!</h1>
            <h2 className="headline headline--medium">We think you&rsquo;ll like it here.</h2>
            <h3 className="headline headline--small">
            Why don&rsquo;t you check out the <strong>major</strong> you&rsquo;re interested in?
            </h3>
            <a href="#" className="btn btn--large btn--blue">
            Explore Now
            </a>
        </>
    )

    return (
        <div className="page-banner">
            <div className="page-banner__bg-image" style={{ backgroundImage: "url('https://i.imgur.com/TBC4FAu.jpg')" }}></div>
            <div className="page-banner__content container t-center c-white">
                <InnerBlocks allowedBlocks={["core/paragraph", "core/heading", "core/list", "rajuplugins/generic-heading"]} />
            </div>
        </div>
      )
    },
    save: function (props) {
        <div className="page-banner">
            <div className="page-banner__bg-image" style={{ backgroundImage: "url('https://i.imgur.com/TBC4FAu.jpg')" }}></div>
            <div className="page-banner__content container t-center c-white">
                <InnerBlocks.Content />
            </div>
        </div>
    }
})
  
