---
title: K&L Wine Merchants
subtitle: Subtitle
category: e-Commerce
draft: false
thumbnailImage: /images/uploads/K&L-logo.svg
---
![null](/images/uploads/iPhoneX_Angled_CorkBorg@2x@2x.png)

> “By partnering with TechFabric experts, we were able to clearly define the problem areas and strategize solutions to bring immediate improvements to our operations.”
>
> _Bryan Zucker, Vice President – K&L Wines_

K&L Wine Merchants (KLWines) is one of the largest online wine and spirits retailers in the United States. 
They operate three physical locations, an eCommerce portal and at any given point in time have several thousand bottles in its inventory. 

Although, KLWines had a very impressive stack of applications to help with their internal processes and external sales, many of 
the applications were developed over a period of time and were ripe for modernization. Azure technologies provided the perfect fit
of solutions to achieve their goal of creating an internal web application with multiple modules for mitigating the inventory 
management concerns while also speeding up search capabilities for an improved customer experience.

#### Challenge

A seasoned online retailer, KL Wines has a keen sense for what the market can provide and what their customers want. Their 
eCommerce website must operate quickly and at scale to meet the needs of their discerning customers. 

The two biggest problems of any Wine retailer is up-front investment, and inventory management. There is a segment of the wine 
market that necessitates a much higher expense on the part of the merchant.If KL Wines decides to buy a significant array of 
high-end inventory, there is a fair amount of risk involved with a slow turnaround or inability to resell the product. If they don’t have 
a good handle on how their inventory flows and correctly estimate demand, they may wind up with increased inventory costs 
which can be considerable when bottles range from $100 to $10,000 each. Finding a purchasing solution as well as managing 
warehouse space was a key goal for KL Wines. 

The retailer’s legacy applications were tightly coupled and it became difficult to introduce state-of-art features that consumers
expect from modern eCommerce applications. As a result, KLWines embarked on a digital transformation journey with TechFabric 
as their development partner to build Open APIs that automate business processes and expose functionality through clearly 
defined microservice contracts.

#### Solution

### From Monolith to Event-Driven Microservices

TechFabric proposed breaking down the legacy monolithic web application into a set of event driven, reactive microservices. Each of these microservices was responsible for automating business processes that drive the KLWines eCommerce engine. 

The microservices were designed to be loosely coupled and reactive. Many subscribe to events happening in the system, process them and broadcast any state changes to the Azure Service Bus for other interested microservices to subscribe to them. This dramatically improved the KL Wines system’s ability to react to changes happening in the system. 

Moreover, the new microservices were containerized and deployed to a Service Fabric Cluster. Containerization of microservices made it possible to achieve an order-of-magnitude increase in density, thereby making it possible to deploy many more microservices to the same nodes, achieving dramatic cost savings.

### Container Orchestration through Service Fabric

When building microservices at scale, it’s imperative to choose an orchestration system that abstracts away complex infrastructure problems and helps to keep the services running in the cluster resilient and fault tolerant. Azure Service Fabric’s rich programming model makes it extremely easy to build and deploy microservices and for the APIs to scale on demand.

Service Fabric has excellent support for fault-tolerance, auto-scaling, security and above all continuous integration and deployment of services. This reduced release cycles, made it easy to avoid deployment failures, and the microservices architecture made it possible to continuously integrate and deploy services.

### Supercharging product search through Azure Search

In an eCommerce application, being able to show relevant results in response to customers search queries is the single most important factor affecting a purchase. The better the search results, the better the sales. Azure Search was selected for its excellent support for faceted navigation, search suggestions, synonyms, accented characters and fine tuning of results through the use of scoring profiles. Using a combination of these features, TechFabric was able to implement a Product Search API, whose performance vastly outperforms the previous search system. Azure Search gives the most relevant results to a query based on a variety of attributes with pre-configured weights and boosted values in scoring profiles. By carefully assigning weights to attributes such as SKU, Title, Tasting notes etc., the search engine is configured to return the most relevant results in response to arbitrary queries.

### Centralizing Notifications using Azure Service Bus

Changes happen to a customer’s order as it goes through various stages of order processing, and customers expect an order status update with each stage. KL Wines’ eCommerce system sends hundreds of thousands of notifications each day. Various internal systems had their own implementation, and there was an immediate need to build a centralized notifications system to send consistent messages to customers. 

TechFabric built a robust notifications system using Azure Service Bus and exposed it through Open APIs. The notification API abstracts away all the complexity of sending notifications via SMS/Email and exposes a single interface that can be leveraged by other services. Now, the various internal systems are able to tap into the notifications API to fire off notifications to customers either to their web or mobile devices. 

The notification API drops the messages on to Azure Service Bus which are picked up by Azure Functions and Logic Apps to send the notifications. Many of the legacy systems that had their own notifications logic were refactored to use the notifications API to have a single, centralized and consistent message format.
