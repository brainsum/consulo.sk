# Consulo.sk

## Local development with DDEV

Install [DDEV and a Docker provider](https://docs.ddev.com/en/stable/users/install/ddev-installation/). The project uses Drupal 11, PHP 8.3, MariaDB 10.11 and Composer 2. DDEV serves the `web` directory at `https://consulo.ddev.site`.

Run these commands from the repository root.

```sh
ddev start
ddev composer install
```

DDEV adds its database settings to `web/sites/default/settings.php`. Add the following line at the end of that file, or in `settings.local.php` if your `settings.php` already includes it.

```php
$settings['config_sync_directory'] = '../config/sync';
```

If you reuse an existing local settings file, remove any database credentials that override `settings.ddev.php`.

Import an approved local copy of the Drupal 10.6 database. This replaces the current database in this DDEV project. If you already have the database in DDEV, skip the import and take the snapshot before running updates.

```sh
ddev import-db --file=/path/to/consulo.sql.gz
ddev snapshot --name=pre-drupal-11
ddev drush updatedb -y
ddev drush config:import -y
ddev drush cache:rebuild
```

Restore the site's public files into `web/sites/default/files/`. A database dump supplies the content and file records, so you need the separate files backup to see uploaded images and documents. Keep the backups outside version control.

Use `ddev drush user:login --uid=<active-admin-uid>` to sign in locally. Check the home page, main navigation, the contact form and the content editor. DDEV captures mail sent through PHP in Mailpit, which you can open with `ddev mailpit`. reCAPTCHA submission testing needs credentials approved for the local hostname.

For subsequent updates, run `ddev composer install`, then repeat the Drush update, import and cache rebuild commands.
