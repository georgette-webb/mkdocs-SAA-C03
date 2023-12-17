## Domain 4: Design Cost-Optimized Architectures

### Task Statement 1: Design cost-optimized storage solutions.

### Understanding Storage Solutions:

- Knowledge of different storage solutions for various scenarios.
- Consideration of appropriate storage solutions for specific use cases.
- Avoiding over-provisioning storage capacity.

### AWS Storage Options:

- Ephemeral storage for low compute-related costs, suitable for short-term data.
- Amazon EBS for persistent storage with block-level devices and snapshot functionality.
- Consideration of advantages and disadvantages of each storage option.
- Monitoring and adjusting resource allocation as needed.

### Amazon S3 for Cost-Effective Storage:

- S3 as a low-cost storage option with global accessibility.
- 11 nines of durability and flexible data lifecycle policies.
- Different storage classes with varying durability, availability, and pricing.
- Transitioning objects based on time and optimizing access tiers.

### Monitoring and Cost Management:

- Importance of monitoring cost and usage.
- Utilizing AWS services like CloudWatch, Trusted Advisor, Well-Architected Framework Tool, and Cost Explorer.
- Defining metrics, setting goals, and enforcing tagging strategies.
- Use of cost allocation tags and billing alarms.
- AWS Organizations and Control Tower for centralized billing management.
- AWS Auto-Scaling and EC2 Auto-Scaling to match resource demand.

### Optimizing EBS Volumes:

- Trusted Advisor recommendations for underutilized EBS volumes.
- Baseline establishment for right-sizing volumes.
- Monitoring IOPS usage and optimizing volume type for cost savings.
- Utilizing data lifecycle rules for automated data deletion.

### S3 Storage Optimization:

- Using different storage classes based on requirements.
- Understanding tradeoffs between storage costs and retrieval times.
- Leveraging S3 capabilities like Lifecycle Configuration and Intelligent Tiering.

### Data Migration Cost Optimization:

- Options for optimizing data migration costs in hybrid environments.
- AWS Snowmobile, Direct Connect, Snowball devices, and dedicated lines for data transfer.
- Architecting for data transfer to minimize costs using CDNs or dedicated network links.

### Requester-Pays Bucket in S3:

- Configuring S3 buckets for requesters to pay the cost of requests and data downloads.

### Summary Questions:

- Identifying correct S3 capabilities like S3 Lifecycle Configuration and Intelligent Tiering.
- Optimizing data migration cost for large data transfers using Snowball and other AWS services.

### Task Statement 2: Design cost-optimized compute solutions.

### Key to Cost Savings

- Using appropriate instances and resources for workload
- Leveraging managed services to reduce server maintenance costs

### AWS Pricing Options

- On-demand instances
- Saving plans
- Reserved instances
- Spot instances for dynamic workloads
- Appropriate service selection to reduce usage and costs (e.g., CloudFront, Aurora, RDS)

### Considerations for Compute Service Selection

- Evaluating costs based on resource size, pricing models, and data transfer costs

### Right-sizing

- Selecting the cheapest instance type that meets performance requirements
- Choosing the right instance family for workload (compute, memory, etc.)

### Hybrid Compute Options

- Understanding cost calculations and optimization for services like Outpost and Snowball Edge
- Advantages of edge computing, e.g., CloudFront, IoT solutions

### Elasticity

- Using resources only when needed to achieve a pay-for-what-you-use model
- Scaling down instances with auto scaling during non-business hours

### Choosing the Right Pricing Model

- Understanding various Amazon EC2 pricing options (On-Demand, Savings Plans, Reserved Instances, Spot Instances, etc.)
- Selecting the best plan based on workload characteristics

### Matching Storage to Usage

- Right-sizing storage for compute environments
- Aligning storage choices with workload needs

### Continual Improvement

- Measuring and monitoring architecture usage and cost
- Utilizing CloudWatch, Cost Explorer, and other tools
- Enforcing tagging strategy and regularly reviewing infrastructure changes

### Load Balancers for Scalability

- Understanding different load balancer types (Application, Network, Gateway)
- Integrating load balancers with auto scaling groups
- Configuring health checks and alarms for auto scaling groups to ensure instance health

### Task Statement 3: Design cost-optimized database solutions.

### Strategies for Reducing Database Costs and Improving Availability

- Know AWS storage services and the type of data required.
- Consider various data stores, not just relational database management systems (RDS), to avoid performance issues and reduce costs.
- Assess access patterns, expected scale and growth, and data access frequency when choosing a data store.
- Migration options include moving subsets of data to EC2, RDS, S3, or a NoSQL data store like DynamoDB.

### Considerations for Data Store Selection

- Evaluate whether data processing and storage rely on database-specific features.
- Determine if table and entity definitions in the database schema will remain fixed.
- Decide whether constraints need to be enforced across different tables in the data model.
- Moving data to DynamoDB can offload administrative burdens and scaling concerns.

### Database Service Selection

- Choose the right database service for your use case, considering cost-effectiveness (e.g., Aurora Serverless vs. Aurora).

### Scaling Strategies

- Optimize storage by using automatic scaling for RDS databases.
- Consider horizontal scaling or adding read replicas/caches to meet performance demands and control costs.
- Deep knowledge of scaling mechanisms for AWS Database Services and Compute Services is essential.

### Backup and Recovery Planning

- Design backup plans to meet Recovery Point Objectives (RPO) with the appropriate frequency.
- Understand which AWS managed database services support point-in-time recovery.
- Set retention policies to eliminate unnecessary storage costs.

### RDS Engine Selection

- Understand the different types of RDS engines and their suitability for specific use cases.

### Use of Managed Services

- Utilize managed services whenever possible to reduce operational burdens and lower the cost per transaction or service.

### Task Statement 4: Design cost-optimized network architectures.

### AWS Networking Overview:

- AWS networking is virtualized and managed.
- No need to manage physical network equipment.
- Networking resources are paid for based on usage.
- Consider API calls and data transfer costs.

### Hybrid Networking:

- Efficient use of networking resources is crucial for cost optimization.
- Different options for connecting AWS to on-premises environments (e.g., VPN vs. Direct Connect).
- Choose cost-effective solutions based on throughput and security requirements.

### Connectivity to AWS Resources:

- Different methods of connecting to AWS resources have cost implications.
- Consider costs when choosing methods like SSH, RDP, AWS Systems Manager Session Manager, and EC2 instance Connect.

### VPC and Cross-Region Connectivity:

- Understand the cost implications of VPC peering vs. transit gateways.
- Data transfer charges for cross-Region data transfers.
- Optimize connectivity services for cost-effectiveness.

### Data Transfer Costs:

- Understand how data transfer costs work in AWS.
- Use VPC gateway endpoints for data transfer within the same Region.
- Minimize costs for NAT Gateways and transit gateways.

### Throttling and API Gateway Usage:

- Set up throttling strategies for workloads using API Gateway.
- Use API Gateway usage plans and API keys to control access and requests.

### Network Bandwidth and Failover:

- Choose appropriate bandwidth options for network design.
- Consider cost-effective failover options like site-to-site VPN over separate Direct Connect connections.

### S3 Cost Optimization:

- Costs associated with data storage, API calls, and data transfer in S3.
- Optimize costs by reducing API calls and using content delivery services like CloudFront.

### CloudFront for Cost Optimization:

- CloudFront reduces data transfer costs and can improve performance.
- Use CloudFront for regional Edge caches and reducing data transfer from origins.
- Explore various use cases for CloudFront beyond S3 bucket fronting.

### Monitoring and Configuration Management:

- AWS provides monitoring and config management tools (e.g., CloudWatch, Health Dashboard, VPC Reachability Analyzer, Config, Route Analyzer).
- Review workloads for cost reduction opportunities.
- Consider historical cost patterns, Availability Zones, Region costs, and AWS free tier offerings.