# Master's Grimoire
Master's Grimoire is a mobile applicative that aims to help RPG table masters manage their campaigns, from player tokens to session notes.


# Installation and usage

## Using Docker

Run:

```
docker-compose up
```
After the server started, access [Expo app](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en) on your smartphone and scan the QR Code that showed up.

And congratulations, it's done.

### Important   
Maybe, trying to run the project may throw an _error_ message like this on your bash:
```
Unable to start server
app | See https://git.io/v5vcn for more information, either install watchman or run the following snippet:
app |   sudo sysctl -w fs.inotify.max_user_instances=1024
app |   sudo sysctl -w fs.inotify.max_user_watches=12288
```

To workaround this issue change (or update) */etc/sysctl.conf* with the following content:
```
fs.inotify.max_user_instances=1024
fs.inotify.max_user_watches=12288
```
