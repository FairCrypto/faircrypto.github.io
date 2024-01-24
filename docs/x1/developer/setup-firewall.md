# Setup Firewall

It is imperative that all nodes have the P2P port `5050` open for both incoming and outgoing connections on TCP and UDP.
This P2P port facilitates communication between nodes, thereby forming a network.

- `5050/tcp` 
- `5050/udp`

## API Node

To operate an API node, it's necessary to enable the API ports `8545` and `8546` for incoming TCP connections.
### Incoming

- `8545/tcp` RPC connections
- `8546/tcp` Websocket connections

## System Firewall

Your system may have a firewall enabled. Usually, it is `ufw` on Ubuntu and `firewalld` on Redhat.

> Check the status of your firewall.

::: code-group
```shell [Ubuntu]
sudo ufw status
```

```shell [Redhat]
sudo firewall-cmd --state
```
:::

If the firewall is not running, you can skip this step.

> Open the P2P port for incoming and outgoing connections.

::: code-group
```shell [Ubuntu]
sudo ufw allow 5050/udp
sudo ufw allow 5050/tcp
```

```shell [Redhat]
sudo firewall-cmd --add-port=5050/tcp --permanent
sudo firewall-cmd --add-port=5050/udp --permanent
```
:::

> Optional: Open the API ports if you're running an API node.

::: code-group
```shell [Ubuntu]
sudo ufw allow 8545/tcp
sudo ufw allow 8546/tcp
```

```shell [Redhat]
sudo firewall-cmd --add-port=8545/tcp --permanent
sudo firewall-cmd --add-port=8546/tcp --permanent
```
:::


## Cloud Firewall

If you are running your node on a cloud provider, you may have a cloud firewall enabled.

Each cloud provider has a different way of managing their firewall.
Please refer to your cloud provider's documentation on how to open ports.

- AWS: [Security Groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html)
- Azure: [Network Security Groups](https://docs.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview)
- Google Cloud: [Firewall Rules](https://cloud.google.com/vpc/docs/firewalls)
- Digital Ocean: [Cloud Firewalls](https://www.digitalocean.com/docs/networking/firewalls/)
- Alibaba Cloud: [Security Groups](https://www.alibabacloud.com/help/doc-detail/25471.htm)
- Hetzner Cloud: [Firewalls](https://docs.hetzner.com/cloud/firewalls/overview/)
