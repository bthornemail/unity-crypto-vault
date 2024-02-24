
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

    Peer --> Publisher
    Peer --> Subscriber

    Wallet --> Consumer
    Wallet --> Provider
    Market --> Board
end

subgraph Service_Board
    Subscriber --> Subscription
    Subscription --> Topic

    Publisher --> Post
    Post --> Topic

    Consumer --> Customer
    Customer --> Order
    Order --> Confirmation
    Confirmation --> Consideration
    Consideration --> Declaration
    Declaration --> Announcement
    Announcement --> Service
    
    Provider --> Contractor 
    Contractor --> Contract
    Contract --> Fulfillment
    Fulfillment --> Agreement
    Agreement --> Negotiation
    Negotiation --> Offer
    Offer --> Service
end

subgraph Function
    Peer --> Board
    Board --> Listing
    Board --> Topic
    Listing --> Service
end


subgraph Implmentation
    Consumer --> App
    Provider --> App
    Board --> App
end

```





    Observer --> 
    Commenter -->
Declaration
    Declaration --> Announcement
    Announcement -->
Negotiation
    Negotiation --> Offer
    Offer -->


