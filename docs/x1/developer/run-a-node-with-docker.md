---
titleTemplate: X1 Blockchain
description: How to run a X1 Blockchain a node with Docker
head:
  - - meta
    - property: og:image
      content: /x1-logo.png
  - - meta
    - property: twitter:image
      content: /x1-logo.png
---

# Running with Docker

See the Docker packages [here](https://github.com/nibty/faircrypto/pkgs/container/go-x1).

> Pull the latest image

```shell
docker pull ghcr.io/faircrypto/go-x1:latest
```

> Create the data directory

```shell
mkdir -p $HOME/.x1
```

> Run the container

::: code-group

```shell [Full Node]
docker run -d --name x1 \
  -p 5050:5050 \
  -v $HOME/.x1:/root/.x1 \
  ghcr.io/faircrypto/go-x1:latest \
      --testnet \
      --syncmode snap
```

```shell [API Node]
docker run -d --name x1 \
  -p 5050:5050 \
  -p 8545:8545 \
  -p 8546:8546 \
  -v $HOME/.x1:/root/.x1 \
  ghcr.io/faircrypto/go-x1:latest \
      --testnet \
      --syncmode snap \
      --http \
      --http.port 8545 \
      --http.addr 0.0.0.0 \
      --http.vhosts "*" \
      --http.corsdomain "*" \
      --ws \
      --ws.addr 0.0.0.0 \
      --ws.port 8546 \
      --ws.origins "*"
```

```shell [Archive Node]
docker run -d --name x1 \
  -p 5050:5050 \
  -v $HOME/.x1:/root/.x1 \
  ghcr.io/faircrypto/go-x1:latest \
      --testnet \
      --syncmode full \
      --gcmode archive
```

```shell [Validator Node]
docker run -d --name x1 \
  -p 5050:5050 \
  -v $HOME/.x1:/root/.x1 \
  ghcr.io/faircrypto/go-x1:latest \
      --testnet \
      --syncmode snap \
      --validator.id YOUR_VALIDATOR_ID \
      --validator.pubkey YOUR_VALIDATOR_PUBKEY \
      --validator.password ~/.x1/.password
```

:::
