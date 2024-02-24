
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
``` mermaid
flowchart TD

subgraph Entities  
    Peer --> Wallet
    Wallet --> Consumer
    Wallet --> Provider
    Market --> Board
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
    Fulfillment --> Proposal
    Proposal --> Agreement
    Agreement --> Service
end

subgraph Function
    Peer --> Board
    Board --> Listing
    Listing --> Service
end


subgraph Implmentation
    Consumer --> App
    Provider --> App
    Board --> App
end

```
Declaration
    Declaration --> Announcement
    Announcement -->
Negotiation
    Negotiation --> Offer
    Offer -->




