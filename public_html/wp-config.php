<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true);
define( 'WPCACHEHOME', '/home/gx679pxv/public_html/wp-content/plugins/wp-super-cache/' );
define( 'DB_NAME', 'gx679pxv_wp412' );

/** Database username */
define( 'DB_USER', 'gx679pxv_wp412' );

/** Database password */
define( 'DB_PASSWORD', '-p6uO9IS6!' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'qcw646xest7wf51ix7qqsowqm1tiibznpiyrmolicv3zaoucspi5jbkgo98ffcng' );
define( 'SECURE_AUTH_KEY',  'gdezdrwefivuadr5jgegmqyub43iuaiq17fg8u6le47hamqylpbyhl42xn4u98vn' );
define( 'LOGGED_IN_KEY',    'ysg99d8h0p6kqkhx4jme0wvfhbipp8xxd1ymiq31c16x1avrnmzfk0xwrtsf1eyu' );
define( 'NONCE_KEY',        'gpxhrc7p6gjk2vg2dhzixuivywgy8t9rnrwkm9tekblb2iz1invl8kunppngbh4e' );
define( 'AUTH_SALT',        'giglemxw8xlwymvkavkbk0iiz7dpmrqd61cuqzfptlaulkumvcfeutstkct3mpxc' );
define( 'SECURE_AUTH_SALT', 'l9yccpk4oz0kanpvpim21avgneu0qxv8xswatvx53ykymp7gtoswjgaq5manjbqc' );
define( 'LOGGED_IN_SALT',   '800d2mv7h6we7zumpsocsm4zltob6usregjd0shvo4ynazuogkwten6meume5rlg' );
define( 'NONCE_SALT',       'lfurbdeiuppjsimfidy3sualcjqkjsqre5gjzmox8qphqrjmyzq3sftyjnxv00vd' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wpki_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
