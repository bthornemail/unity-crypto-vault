
Services Board
flowchart TD

[[Paths]]

```

Consumer
Provider
Recipient
Contractor
Customer

Announcement
Consideration
Request
Offer

Listing

Customer:Request
Customer:Consideration
Customer:Offer


Contractor:
Provider:Announcement
Consumer:Consideration

```

---
# links
---

``` mermaid
        flowchart TD

        subgraph Entities  
            Person --> Wallet
            Wallet --> Peer
            Peer --> Consumer
            Peer --> Provider
            Peer --> Connections
            Connections --> Board   
        end

        subgraph TD;
            Database --> Array;
            Cache --> Array;
            Registry --> Inventory;
            Repository --> Inventory;
            Hub --> Director;
            Portal --> Director;
            Exchange --> Depot;
            Catalog --> |"Access/Discovery"| Hub;
            Database -.-> |"Storage/Management"| Registry;
            Database -.-> Repository;
        end

        subgraph Service_Board
            Consumer --> Customer
            Customer --> Order
            Order --> Consideration
            Consideration --> Confirmation
            Confirmation --> Declaration
            Declaration --> Invoice
            Invoice --> Service
            
            Provider --> Contractor 
            Contractor --> Contract
            Contract --> Fulfillment
            Fulfillment --> Resolution
            Resolution --> Proposal
            Proposal --> Agreement
            Agreement --> Service

        end

        subgraph Function
            Board --> Listing
            Listing --> Service
        end


        subgraph Implmentation
            Board --> Market
            Person --> Market
        end

```



