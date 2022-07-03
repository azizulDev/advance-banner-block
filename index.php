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
    wp_register_script('ournewblocktype', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
    wp_register_script('genericheading', plugin_dir_url(__FILE__) . 'build/heading.js', array('wp-blocks', 'wp-element', 'wp-editor'));
    register_block_type('rajuplugins/advance-banner-block', array(
      'editor_script' => 'ournewblocktype',
      'editor_style' => 'mainblockcss'
    ));

    register_block_type('rajuplugins/generic-heading', array(
      'editor_script' => 'genericheading'
    ));


    if(!is_admin()){
      wp_enqueue_style('mainblockcss', plugin_dir_url(__FILE__) . 'build/index.css');
    }
  }
}

$initializeScripts = new InitializeScripts();