---
titleTemplate: X1 Blockchain
description: How to run a X1 Blockchain interactively
head:
  - - meta
    - property: og:image
      content: /x1-logo.png
  - - meta
    - property: twitter:image
      content: /x1-logo.png
---

# Run Node Interactively

While running a node interactively is not recommended for production, it is a great way to get started with X1.
Continue to [Running Node Service](./run-a-node-service.md) for a production ready solution.
<br><br>

> See the common command line flags for each node type:

:::code-group

```shell [Full Node]
x1 --testnet \
  --syncmode snap
```

```shell [API Node]
x1 --testnet \
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

```shell [Arcive Node]
x1 --testnet \
   --syncmode full \
   --gcmode archive
```

```shell [Validator Node]
x1 --testnet \
   --syncmode snap \
   --validator.id YOUR_VALIDATOR_ID \
   --validator.pubkey YOUR_VALIDATOR_PUBKEY \
   --validator.password ~/.x1/.password
```

:::

> See a full list of command line flags:

```shell
x1 --help
```
