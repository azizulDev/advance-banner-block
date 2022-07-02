<?php

/*
  Plugin Name: Advance Banner Block
  Description: Your Plugin Description Here
  Version: 1.0
  Author: Azizul Raju
  Author URI: https://facebook.com/azizulDev
*/

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class InitializeScripts {
  function __construct() {
    add_action('init', array($this, 'adminAssets'));
  }


  // loading src files in the gutenberg editor screen
  function adminAssets() {
    wp_register_style('mainblockcss', plugin_dir_url(__FILE__) . 'build/index.css');
    wp_register_script('ournewblocktype', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element'));
    register_block_type('yourplugins/advance-banner-block', array(
      'editor_script' => 'ournewblocktype',
      'editor_style' => 'mainblockcss',
      'render_callback' => array($this, 'theHTML')
    ));
  }

  // front-end output from the gutenberg editor 
  function theHTML($attributes){
    if(!is_admin()){
      wp_enqueue_script('frontendscript', plugin_dir_url(__FILE__). 'build/frontend.js', array('wp-element'));
      wp_enqueue_style('frontendcss', plugin_dir_url(__FILE__). 'build/frontend.css');
    }

    ob_start(); ?>

      <div class="update-me-by-front-end-technologies"><pre style="display: none;"><?php echo wp_json_encode($attributes); ?></pre></div>

    <?php return ob_get_clean();
  }
}

$initializeScripts = new InitializeScripts();