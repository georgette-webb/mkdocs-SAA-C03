## <a id="domain 3">Domain 3: Design High-Performing Architectures</a>

### Task Statement 1: Determine high-performing and/or scalable storage solutions.

- AWS offers various storage solutions, including object, block, and file storage.
- Selecting the right storage solution depends on factors like access method, access patterns, throughput, frequency, availability, and durability requirements.
- Different AWS storage services, such as EBS, S3, and EFS, have varying scalability and performance characteristics.
- EBS volumes require manual scaling by modifying volume type, size, and IOPS capacity.
- EFS automatically scales as you add or remove files from the file system.
- Understanding the operational support needed for storage scaling is crucial.
- Consider future storage needs when choosing a storage solution.
- Key information for storage services like S3, EBS, EFS, Amazon FSx, and Storage Gateway.
- S3 is globally resilient and can tolerate Availability Zone failures.
- EBS volume types and snapshots for backups and disaster recovery.
- Amazon EFS for shared file systems with performance options.
- Amazon FSx for Windows and Lustre file systems.
- Consider data growth and capacity upper bounds when selecting a storage solution.
- Different AWS storage services for low-latency requirements.
- Configurations and integrations for improving storage performance, including S3 Accelerator and CloudFront caching.
- Understanding API calls, multi-part uploads, and other features for data uploads and retrievals in S3.

### Storage Types:

- AWS offers three types of storage: object, block, and file.

### Factors for Choosing Storage:

- Selecting the right storage solution depends on factors like access method, access patterns, throughput, frequency, availability, and durability requirements.

### AWS Storage Services:

- Different AWS storage services have varying scalability and performance characteristics.
- EBS volumes require manual scaling by modifying volume type, size, and IOPS capacity.
- EFS automatically scales as you add or remove files from the file system.

### Operational Support for Scaling:

- Understanding the operational support needed for storage scaling is crucial.

### Future Storage Needs:

- Consider future storage needs when choosing a storage solution.

### Key Storage Services:

- Key information for storage services like S3, EBS, EFS, Amazon FSx, and Storage Gateway.

### S3 Resiliency:

- S3 is globally resilient and can tolerate Availability Zone failures.

### EBS and Snapshots:

- EBS volume types and snapshots for backups and disaster recovery.

### Amazon EFS:

- Amazon EFS for shared file systems with performance options.

### Amazon FSx:

- Amazon FSx for Windows and Lustre file systems.

### Data Growth Consideration:

- Consider data growth and capacity upper bounds when selecting a storage solution.

### Low-Latency Requirements:

- Different AWS storage services for low-latency requirements.

### Performance Optimization:

- Configurations and integrations for improving storage performance, including S3 Accelerator and CloudFront caching.
- Understanding API calls, multi-part uploads, and other features for data uploads and retrievals in S3.

### Task Statement 2: Design high-performing and elastic compute solutions.

### Designing High-Performing and Elastic Compute Solutions

- Scalability and elasticity in AWS depend on the design and selection of AWS services.
- Compute resources are available in three forms: instances, containers, and functions.

### Amazon EC2 Instances

- EC2 instances come in different families, sizes, and capabilities, including CPU, memory, storage, and network bandwidth.
- Performance of each EC2 instance type varies, including network bandwidth, resource ratios, and additional features.

### Containers

- Understand container fundamentals and benefits, focusing on Amazon Elastic Container Service (ECS) and Amazon Kubernetes Service (EKS).
- ECS offers two types: Amazon EC2 and Fargate for serverless container computing.
- Integrate other services like application load balancers with containers.

### Functions (Lambda)

- Lambda allows running code without EC2 instances.
- It supports various runtime languages (e.g., Python, Java, NodeJS) and has a 15-minute execution limit.
- Can be deployed globally with CloudFront for better performance.

### Architecting for Scalability

- Architect solutions for independent scaling of compute and application components.
- Use services like SQS and Elastic Load Balancing to decouple workloads.
- Utilize CloudWatch metrics, alarms, and dashboards for visibility and scaling.
- Configure Amazon EC2 Auto Scaling based on CloudWatch alarms.
- Choose appropriate metrics for scaling, including custom and load balancing-related metrics.

### Service Specifics

- Some AWS services, like Lambda, are inherently scalable, while others, like EC2, require design considerations.
- Select EC2 instance types based on application resource needs.
- Consider the right architecture and services for scalable and performant solutions.
- Use EC2 with Elastic Load Balancing and EC2 Auto Scaling for highly available and elastic workloads.
- Understand when to use EC2, Lambda, or container services based on the use case.
- Be familiar with the benefits and limitations of each compute service in AWS.

### Task Statement 3: Determine high-performing database solutions.

### Task and Database Engine Variety

- Domain 3 involves determining high-performing database solutions for applications.
- AWS offers a range of purpose-built database engines: relational, key-value, document, in-memory, graph, time series, and ledger databases.

### Database Management Simplified

- AWS handles tasks such as server provisioning, patching, setup, configuration, backups, and recovery.
- AWS monitors clusters, ensuring self-healing storage and automated scaling for higher value application development.

### Choosing the Right Database Solution

- The optimal database solution depends on factors like availability, consistency, partition tolerance, latency, durability, scalability, and query capability.
- Different subsystems may use varying database solutions and features to enhance performance.
- Consider access patterns and alternative storage solutions like graph, time series, or in-memory storage databases.

### Deep Knowledge Required

- Exam preparation should go beyond simple identification of database services; understand how they operate.
- Examples include configuring read replicas for RDS, understanding Amazon Aurora clusters, and data replication.

### Database Engine Selection

- Consider when to use different database engines like PostgreSQL or MySQL based on use cases.
- DynamoDB excels in consistent, single-digit millisecond performance, especially for high volumes.
- Choose between RDS MySQL and Aurora MySQL based on regional failover needs.

### Optimizing Database Throughput

- Optimize database throughput with caching services like ElastiCache or DAX.
- ElastiCache supports Redis and Memcached, while DAX accelerates DynamoDB access.

### Efficient Connection Management

- RDS Proxy efficiently manages connections to RDS instances, reducing compute and memory stress, enabling scalability.

### Capacity Planning

- Understand how to choose the correct instance type and size for your workload.
- Explore options like RDS instance auto-scaling and storage auto-scaling.

### Aurora Serverless

- Aurora Serverless offers on-demand auto-scaling with cost-effective compute capacity based on application needs.
- It uses Aurora Capacity Units (ACUs) to manage compute and memory.
- Aurora Serverless can scale between minimum and maximum ACUs, and it can pause during inactivity to reduce costs.

### Task Statement 4: Determine high-performing and/or scalable network architectures.

### High-Performing and Scalable Network Architectures:

### Preparation for AWS Solutions Architect Associate Exam:

- Understand how to select high-performing networking solutions based on workload requirements.
- Networking fundamentals are crucial for informed decision-making.
- AWS offers various networking services and solutions for performance optimization.

### Location and Configuration:

- Consider location when deploying networks to reduce latency.
- Configure and implement networks across Regions, placement groups, and edge services for improved performance.

### Integration and Data Protection:

- Integrate storage services, data transfer methods, and networking options.
- Use network metrics for adaptive networking configurations.
- Consider infrastructure as code for agility.

### Amazon VPCs and Hybrid Architectures:

- Design and build Amazon VPCs.
- Secure VPCs and understand their components.
- Connect Amazon VPCs to on-premises data centers using various options.

### Connectivity Options and Services:

- Select connectivity options based on data volume, compliance, and performance requirements.
- Explore services like Transit Gateway, AWS CloudHub, PrivateLink, and VPC endpoints.
- Use gateway endpoints for AWS public services from private instances or subnets.

### Routing and Network Performance:

- Understand routing policies and Route 53 functionality.
- Explore Global Accelerator for improved network performance.
- Use AWS CloudFront to cache assets closer to end users.

### Data Transfer and Scalability:

- Choose the right data transfer service based on data volume, type, source, and destination.
- Focus on scalability for global customer bases.
- Utilize auto scaling, load balancing, and OSI model layers for load balancers.

### High Availability:

- Follow AWS guidelines to achieve high availability.
- Avoid single points of failure and use automated monitoring and failover mechanisms.

### Understand available services and tools for high availability.

### _Continuous Improvement:_

- Improve scalability by adding services like CloudFront and ElastiCache.
- Optimize scaling policies and instance sizes for better performance.

### Serverless Solutions:

- Build global, highly scalable serverless solutions.
- Utilize services like S3 website hosting, Route 53, DynamoDB global tables, CloudFront, and Global Accelerator.

### Task Statement 5: Determine high-performing data ingestion and transformation solutions.
 Data Ingestion Fundamentals:

- AWS data ingestion involves collecting, curating, and preparing data from source systems for storage, data lakes, and machine learning in AWS.
- Data movement is crucial, and it should meet performance, latency, scale, security, and governance needs.

### Data Ingestion Patterns:

- Common data ingestion patterns include homogenous and heterogeneous patterns.
- Cloud-based ETL services like Amazon Athena and Amazon EMR are used for data ingestion.

### Streaming Data Handling:

- Streaming data can be handled using Amazon Kinesis and Amazon Managed Streaming for Apache Kafka.
- Kinesis Data Streams is for real-time data streaming with high scalability and durability.
- Kinesis Data Firehose simplifies capturing, transforming, and loading data streams into AWS data stores.
- Kinesis Data Analytics provides basic data transformation options.

### Data Transformation and Optimization:

- Extracted data needs transformation, loading, cataloging, and organization for machine learning and consumption.
- Services like Amazon EMR, AWS Glue, and AWS Lake Formation optimize data processing.
- Data lakes on S3 offer agility, flexibility, and centralized data management.

### Data Ingestion Services:

- AWS provides various services for data ingestion into data lakes, including Kinesis Data Fire Hose, Snow Family, Glue, AWS Data Sync, and more.
- Different data transfer methods are available for on-premises to cloud migration, including the Snow Family and Amazon Kinesis.
- AWS Glue is a data integration service for discovering, preparing, moving, and integrating data from multiple sources.

### Data Security Measures:

- Security measures for data ingestion include access policies, S3 and KMS encryption, and tagging.
- IAM user policies control access to data in S3.
- Encryption keys, such as those provided by KMS, enhance data security.
- Additional security measures like API Gateway, Cognito, and Cloud HSM can be used for compliance requirements, especially for PII data.