# Run Node as a System Service

We recommend running X1 as a system service.
It offers control over starting, stopping, and restarting, runs in the background, and starts automatically on boot,
ensuring availability and reliability.

## Configuration

:::tabs key:os

== Linux

Rather than providing command line flags, the system service uses a config file at `/etc/x1/config.toml`.

We provide ready-to-use example config files for each node type.

> Run the following command to copy the example config file

::: code-group

```bash [Full Node]
cp /usr/local/share/x1/configs/testnet/full-node.toml /etc/x1/config.toml
```

```bash [API Node]
cp /usr/local/share/x1/configs/testnet/api-node.toml /etc/x1/config.toml
```

```bash [Archive Node]
cp /usr/local/share/x1/configs/testnet/archive-node.toml /etc/x1/config.toml
```

```bash [Validator]
cp /usr/local/share/x1/configs/testnet/validator-node.toml /etc/x1/config.toml
```

== MacOS
Rather than providing command line flags, the system service uses a config file at `$HOMEBREW_PREFIX/etc/x1/config.toml`.

We provide ready-to-use example config files for each node type.

> Run the following command to copy the example config file

::: code-group

```bash [Full Node]
cp $HOMEBREW_PREFIX/usr/local/share/x1/configs/testnet/full-node.toml \
  $HOMEBREW_PREFIX/etc/x1/config.toml
```

```bash [API Node]
cp $HOMEBREW_PREFIX/usr/local/share/x1/configs/testnet/api-node.toml \
  $HOMEBREW_PREFIX/etc/x1/config.toml
```

```bash [Archive Node
cp $HOMEBREW_PREFIX/usr/local/share/x1/configs/testnet/archive-node.toml \
  $HOMEBREW_PREFIX/etc/x1/config.toml
```

```bash [Validator Node
cp $HOMEBREW_PREFIX/usr/local/share/x1/configs/testnet/validator-node.toml \
  $HOMEBREW_PREFIX/etc/x1/config.toml
```

:::

### User/Group

:::tabs key:os

== Linux

By default, the systemd service will run as the user and group `x1` with the home directory `/var/lib/x1`.

> You may change the user to your needs by running the following command.

```shell
# Edit the service file
sudo systemctl edit x1.service

# Add the following lines with an existing
# user and group of your choice.
[Service]
User=<user>
Group=<group>
```

== MacOS

The service on MacOS operates under the current user.

:::

## Running the Node

:::tabs key:os

== Linux

> Start the service and enable it on boot

```shell
sudo systemctl start x1.service
sudo systemctl enable x1.service
```

> Stop the service

```shell
sudo systemctl stop x1.service
```

> Restart the service

```shell
sudo systemctl restart x1.service
```

== MacOS

> Start the service and enable it on boot

```shell
brew services start x1
```

> Stop the service

```shell
brew services stop x1
```

> Restart the service

```shell
brew services restart x1
```

:::

## Logging

:::tabs key:os

== Linux

By default, logging is handled by the system's logging service.

> Tail the logs

```shell
journalctl -t x1 -f
```

> See the last 1000 lines of logs

```shell
journalctl -t x1 -n 1000
```

Optionally, you can configure X1 to log to a file.

```shell
# Edit the service file
sudo systemctl edit x1.service

# Add the following lines
[Service]
StandardOutput=append:/var/log/x1.log
StandardError=append:/var/log/x1.log
```

== MacOS

> Tail the logs

```shell
tail -f /opt/homebrew/var/log/x1.log
```

:::

## Console Access

:::tabs key:os

== Linux

```shell
# Become the x1 user
sudo su x1

# Attach to the console
x1 attach
```

== MacOS

```shell
# Attach to the console
x1 attach
```

:::
