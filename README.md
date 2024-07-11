# Producer - Consumer

Primo test: 1 produttore 1 consumatore

```bash
yarn prod-cons:producer
yarn prod-cons:consumer
```

Secondo test: 1 produttore 2 consumatori
```bash
yarn prod-cons:producer
yarn prod-cons:consumer
yarn prod-cons:consumer
```

# Publisher - Subscriber

Primo test: exchange fanout -> producer - consumer

```bash
yarn pub-sub:publisher
yarn pub-sub:subscriber
yarn pub-sub:subscriber
```

Secondo test: exchange fanout -> publisher - subscriber Tutti i subscriber ricevono lo stesso messaggio
```bash
yarn pub-sub:publisher
yarn pub-sub:subscriber 1
yarn pub-sub:subscriber 2
```

Secondo test: exchange direct: il messaggio è ruotato

```bash
yarn pub-sub-2:publisher
yarn pub-sub-2:subscriber 1
yarn pub-sub-2:subscriber 2
```