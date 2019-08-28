---
title: K&L Wine Merchants
subtitle: Subtitle
category: e-Commerce
draft: false
thumbnailImage: /images/uploads/K&L-logo.svg
coverImage: /images/uploads/iPhoneX_Angled_CorkBorg@2x@2x.png
---
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
