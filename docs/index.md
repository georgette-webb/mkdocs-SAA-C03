# Solutions Architect – SAA-C03

[Solutions Architect – SAA-C03 1](#_Toc146464098)

[Domain 1: Design Secure Architectures 6](#_Toc146464099)

[Task Statement 1: Design secure access to AWS resources 6](#_Toc146464100)

[Designing Secure Access to AWS Resources: 6](#_Toc146464101)

[Importance of AWS Accounts: 6](#_Toc146464102)

[IAM (Identity and Access Management): 6](#_Toc146464103)

[Federated Access and IAM Roles: 6](#_Toc146464104)

[IAM Policies: 6](#_Toc146464105)

[Traceability and Monitoring: 6](#_Toc146464106)

[Testing and Implementation: 6](#_Toc146464107)

[Policies: 7](#_Toc146464108)

[Root Users: 7](#_Toc146464109)

[Task Statement 2: Design secure workloads and applications. 7](#_Toc146464110)

[Task Statement 3: Determine appropriate data security controls. 8](#_Toc146464111)

[Domain 2: Design Resilient Architectures 9](#_Toc146464112)

[Task Statement 1: Design scalable and loosely coupled architectures. 9](#_Toc146464113)

[Understanding Scaling:](#_Toc146464114) 9

[AWS Services for Scaling:](#_Toc146464115) 10

[Focus on Amazon EC2 Auto Scaling:](#_Toc146464116) 10

[Compute Options:](#_Toc146464117) 10

[Choosing AWS Services:](#_Toc146464118) 10

[Storage Options:](#_Toc146464119) 10

[Scaling with AWS Database Services:](#_Toc146464120) 10

[Caching and Scaling:](#_Toc146464121) 10

[RDS Proxy:](#_Toc146464122) 10

[Edge Networking Services:](#_Toc146464123) 10

[AWS Transfer Family:](#_Toc146464124) 10

[Service-Oriented and Microservices Architectures:](#_Toc146464125) 11

[Microservices Architecture:](#_Toc146464126) 11

[Serverless Computing:](#_Toc146464127) 11

[Amazon Lambda:](#_Toc146464128) 11

[Amazon Simple Queue Service (SQS):](#_Toc146464129) 11

[Asynchronous Workflows:](#_Toc146464130) 11

[Loosely Coupled Architectures:](#_Toc146464131) 11

[Decoupling Services:](#_Toc146464132) 11

[Serverless Toolkit:](#_Toc146464133) 11

[Architecture Design:](#_Toc146464134) 11

[Service Knowledge:](#_Toc146464135) 12

[Task Statement 2: Design highly available and/or fault-tolerant architectures. 12](#_Toc146464136)

[High Availability (HA): 12](#_Toc146464137)

[Fault Tolerance: 12](#_Toc146464138)

[Disaster Recovery (DR): 12](#_Toc146464139)

[AWS Services and Reliability: 12](#_Toc146464140)

[Database Services and Failover: 13](#_Toc146464141)

[Backup and Recovery: 13](#_Toc146464142)

[Networking and Connectivity: 13](#_Toc146464143)

[Automation and Resource Integrity: 13](#_Toc146464144)

[Global Architectures and DNS Routing: 13](#_Toc146464145)

[RDS Proxy and Serverless Architectures: 14](#_Toc146464146)

[Continuous Improvement and Monitoring: 14](#_Toc146464147)

[Amazon Polly for High Availability and Fault Tolerance: 14](#_Toc146464148)

[Managed Services and Understanding Global Architecture: 14](#_Toc146464149)

[Domain 3: Design High-Performing Architectures 14](#_Toc146464150)

[Task Statement 1: Determine high-performing and/or scalable storage solutions. 14](#_Toc146464151)

[Storage Types: 14](#_Toc146464152)

[Factors for Choosing Storage: 15](#_Toc146464153)

[AWS Storage Services: 15](#_Toc146464154)

[Operational Support for Scaling: 15](#_Toc146464155)

[Future Storage Needs: 15](#_Toc146464156)

[Key Storage Services: 15](#_Toc146464157)

[S3 Resiliency: 15](#_Toc146464158)

[EBS and Snapshots: 15](#_Toc146464159)

[Amazon EFS: 15](#_Toc146464160)

[Amazon FSx: 15](#_Toc146464161)

[Data Growth Consideration: 15](#_Toc146464162)

[Low-Latency Requirements: 15](#_Toc146464163)

[Performance Optimization: 15](#_Toc146464164)

[Task Statement 2: Design high-performing and elastic compute solutions. 15](#_Toc146464165)

[Designing High-Performing and Elastic Compute Solutions 15](#_Toc146464166)

[Amazon EC2 Instances 15](#_Toc146464167)

[Containers 16](#_Toc146464168)

[Functions (Lambda) 16](#_Toc146464169)

[Architecting for Scalability 16](#_Toc146464170)

[Service Specifics 16](#_Toc146464171)

[Task Statement 3: Determine high-performing database solutions. 16](#_Toc146464172)

[Task and Database Engine Variety 16](#_Toc146464173)

[Database Management Simplified 16](#_Toc146464174)

[Choosing the Right Database Solution 16](#_Toc146464175)

[Deep Knowledge Required 17](#_Toc146464176)

[Database Engine Selection 17](#_Toc146464177)

[Optimizing Database Throughput 17](#_Toc146464178)

[Efficient Connection Management 17](#_Toc146464179)

[Capacity Planning 17](#_Toc146464180)

[Aurora Serverless 17](#_Toc146464181)

[Task Statement 4: Determine high-performing and/or scalable network architectures. 17](#_Toc146464182)

[High-Performing and Scalable Network Architectures: 17](#_Toc146464183)

[Preparation for AWS Solutions Architect Associate Exam: 17](#_Toc146464184)

[Location and Configuration: 17](#_Toc146464185)

[Integration and Data Protection: 17](#_Toc146464186)

[Amazon VPCs and Hybrid Architectures: 18](#_Toc146464187)

[Connectivity Options and Services: 18](#_Toc146464188)

[Routing and Network Performance: 18](#_Toc146464189)

[Data Transfer and Scalability: 18](#_Toc146464190)

[High Availability: 18](#_Toc146464191)

[Understand available services and tools for high availability. 18](#_Toc146464192)

[_Continuous Improvement:_ 18](#_Toc146464193)

[Serverless Solutions: 18](#_Toc146464194)

[Task Statement 5: Determine high-performing data ingestion and transformation solutions. Data Ingestion Fundamentals: 18](#_Toc146464195)

[Data Ingestion Patterns: 18](#_Toc146464196)

[Streaming Data Handling: 19](#_Toc146464197)

[Data Transformation and Optimization: 19](#_Toc146464198)

[Data Ingestion Services: 19](#_Toc146464199)

[Data Security Measures: 19](#_Toc146464200)

[Domain 4: Design Cost-Optimized Architectures 19](#_Toc146464201)

[Task Statement 1: Design cost-optimized storage solutions. 19](#_Toc146464202)

[Understanding Storage Solutions: 19](#_Toc146464203)

[AWS Storage Options: 19](#_Toc146464204)

[Amazon S3 for Cost-Effective Storage: 19](#_Toc146464205)

[Monitoring and Cost Management: 20](#_Toc146464206)

[Optimizing EBS Volumes: 20](#_Toc146464207)

[S3 Storage Optimization: 20](#_Toc146464208)

[Data Migration Cost Optimization: 20](#_Toc146464209)

[Requester-Pays Bucket in S3: 20](#_Toc146464210)

[Summary Questions: 20](#_Toc146464211)

[Task Statement 2: Design cost-optimized compute solutions. 20](#_Toc146464212)

[Key to Cost Savings 20](#_Toc146464213)

[AWS Pricing Options 20](#_Toc146464214)

[Considerations for Compute Service Selection 20](#_Toc146464215)

[Right-sizing 21](#_Toc146464216)

[Hybrid Compute Options 21](#_Toc146464217)

[Elasticity 21](#_Toc146464218)

[Choosing the Right Pricing Model 21](#_Toc146464219)

[Matching Storage to Usage 21](#_Toc146464220)

[Continual Improvement 21](#_Toc146464221)

[Load Balancers for Scalability 21](#_Toc146464222)

[Task Statement 3: Design cost-optimized database solutions. 21](#_Toc146464223)

[Strategies for Reducing Database Costs and Improving Availability 21](#_Toc146464224)

[Considerations for Data Store Selection 21](#_Toc146464225)

[Database Service Selection 22](#_Toc146464226)

[Scaling Strategies 22](#_Toc146464227)

[Backup and Recovery Planning 22](#_Toc146464228)

[RDS Engine Selection 22](#_Toc146464229)

[Use of Managed Services 22](#_Toc146464230)

[Task Statement 4: Design cost-optimized network architectures. 22](#_Toc146464231)

[AWS Networking Overview: 22](#_Toc146464232)

[Hybrid Networking: 22](#_Toc146464233)

[Connectivity to AWS Resources: 22](#_Toc146464234)

[VPC and Cross-Region Connectivity: 22](#_Toc146464235)

[Data Transfer Costs: 22](#_Toc146464236)

[Throttling and API Gateway Usage: 23](#_Toc146464237)

[Network Bandwidth and Failover: 23](#_Toc146464238)

[S3 Cost Optimization: 23](#_Toc146464239)

[CloudFront for Cost Optimization: 23](#_Toc146464240)

[Monitoring and Configuration Management: 23](#_Toc146464241)
