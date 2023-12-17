## <a id="domain 2">Domain 2: Design Resilient Architectures</a>

### Task Statement 1: Design scalable and loosely coupled architectures.

- Designing scalable and loosely coupled architectures is important for resilient systems.
- Scaling can be vertical (increasing individual resource capacity) or horizontal (adding more resources).
- Elasticity uses automation and horizontal scaling to match capacity with demand.
- AWS provides tools like launch configuration and autoscaling for elasticity.
- Differentiate between horizontal and vertical scaling and know how to achieve them with AWS services.
- Understand containers, serverless, and virtualization and when to use them.
- Recommend appropriate compute, storage, networking, and databases based on requirements.
- AWS offers purpose-built databases like DynamoDB, RDS, Aurora, and Redshift.
- Consider Read Replicas, Multi-AZ designs, and caching for database scaling and resiliency.
- Know AWS caching services such as CloudFront, ElastiCache, and DynamoDB Accelerator.
- Use RDS Proxy for scalability, resilience, and security.
- Understand AWS edge networking services like CloudFront, Route 53, and Global Accelerator.
- AWS Transfer Family automates file processing workflows without managing infrastructure.
- The exam tests the ability to build highly scalable and reliable workloads using service-oriented or microservices architectures.
- Distributed systems should operate reliably despite data loss or latency in networks.
- Designing with best practices for workload resilience and recovery.
- Microservices architecture involves services communicating via well-defined APIs.
- Different microservices patterns include API-driven, event-driven, and data streaming.
- AWS offers options for building scalable and fault-tolerant microservices using containers and serverless services.
- Serverless in AWS means no infrastructure management, automatic scaling, pay-for-value billing, and built-in availability and fault tolerance.
- Amazon API Gateway scales automatically and can be used with Lambda for serverless applications.
- Scaling Lambda involves understanding concurrency and transactions.
- Durable message stores like SQS or DynamoDB can be used for asynchronous workflows.
- Decoupling in architecture involves components remaining autonomous and unaware of each other.
- Understand synchronous and asynchronous integration as decoupling techniques.
- Familiarity with tools like load balancers and Amazon Event Bridge is essential for decoupling.
- Serverless tools like SQS, API Gateway, and DynamoDB can enhance decoupling mechanisms.
- Knowledge of AWS services such as API Gateway, Transfer Family, SQS, Secrets Manager, Load Balancers, Fargate, Lambda, ECS, EKS, and more is important for this task.
- Design appropriate architectures based on use cases, considering patterns like event-driven, microservices, and multi-tiered architectures.

#### Understanding Scaling:

- Scaling refers to the ability of a system to adjust its capacity based on demand, either increasing or decreasing resources.
- There are two primary scaling methods: vertical scaling (scaling up by adding resources to an existing instance) and horizontal scaling (scaling out by adding more instances).
- Elasticity involves using automation and horizontal scaling to match capacity with demand, allowing resources to increase or decrease as needed.

#### AWS Services for Scaling:

- AWS provides services like launch configuration and autoscaling to dynamically adjust the number of resources based on demand.
- Autoscaling optimizes environments for performance, operational excellence, and cost optimization, aligning with the pillars of the AWS Well-Architected Framework.

#### Focus on Amazon EC2 Auto Scaling:

- Understand the capabilities of AWS Auto Scaling and Amazon EC2 Auto Scaling.
- Be familiar with different types of scaling policies that can be applied in Amazon EC2 Auto Scaling.

#### Compute Options:

- Recognize the options for running compute workloads in the cloud, including containers, serverless, and virtual instances in EC2.
- Understand when to choose one option over another based on specific workload requirements.

#### Choosing AWS Services:

- Know how to recommend the appropriate AWS services for compute, storage, networking, and databases based on workload requirements.
- For example, understand the optimal instance types and deployment configurations for high-performance computing (HPC) workloads.

#### Storage Options:

- Be aware of the various storage options available on AWS, including purpose-built databases like DynamoDB, RDS, Amazon Aurora, and Amazon Redshift.

#### Scaling with AWS Database Services:

- Understand how scaling can be managed using AWS database services.
- Consider the use of Read Replicas and Multi-AZ designs for resiliency and performance.

#### Caching and Scaling:

- Recognize the role of caching in scaling and improving application performance.
- AWS services for caching include Amazon CloudFront, ElastiCache, and DynamoDB Accelerator.

#### RDS Proxy:

- Know how to use RDS Proxy to enhance scalability, resilience to database failures, and security.

#### Edge Networking Services:

- Understand the use of AWS edge networking services like CloudFront, Route 53, and Global Accelerator for secure data transmission, reduced latency, and improved application access control.

#### AWS Transfer Family:

- Learn about AWS Transfer Family for managing file processing workflows without the need to host and manage your own infrastructure.
- Understand its scalability features.

#### Service-Oriented and Microservices Architectures:

- Comprehend the concepts of service-oriented architecture (SOA) and microservices architecture.
- Distributed systems require reliable operation despite data loss or latency in networks.
- Ensure components in distributed systems do not negatively impact each other or the workload.

#### Microservices Architecture:

- Microservices communicate over well-defined APIs.
- There are different patterns for building microservices, including API-driven, event-driven, and data streaming.
- AWS offers options such as containers and serverless services to build highly scalable and fault-tolerant microservices architectures.

#### Serverless Computing:

- Serverless is an operational model in AWS with no infrastructure management.
- Serverless services automatically scale based on consumption and offer pay-for-value billing.
- Amazon API Gateway scales automatically, making it suitable for various API use cases.

#### Amazon Lambda:

- Lambda is a serverless event-driven compute service for running code without server provisioning.
- Understanding concurrency and transactions is crucial for scaling Lambda functions.

#### Amazon Simple Queue Service (SQS):

- SQS can handle high throughput and is scaled horizontally by adding more message producers and consumers.
- It can be used to decouple and scale microservices, distributed systems, and serverless applications.

#### Asynchronous Workflows:

- Asynchronous workflows using durable message stores like SQS or DynamoDB can separate request ingestion and processing for better scaling and user experience.

#### Loosely Coupled Architectures:

- Loosely coupled architectures involve components that remain autonomous and unaware of each other.
- Decoupling techniques can be synchronous or asynchronous.

#### Decoupling Services:

- Understanding how to use decoupling services like load balancers, Amazon Event Bridge, and serverless tools is essential.

#### Serverless Toolkit:

- AWS services such as SQS, API Gateway, and DynamoDB can be deployed using serverless approaches to enhance flexibility and decoupling capabilities.

#### Architecture Design:

- Given specific use cases and requirements, you should be able to design the appropriate architecture type, such as event-driven, microservices, or multi-tiered architectures.
- Choose the architecture that best aligns with user needs.

#### Service Knowledge:

- Deep knowledge of various AWS services is required, including API Gateway, AWS Transfer Family, SQS, Secrets Manager, Application Load Balancers, Fargate, Lambda, Amazon Elastic Container Service (ECS), Elastic Kubernetes Service (EKS), and more.

### Task Statement 2: Design highly available and/or fault-tolerant architectures.

#### High Availability (HA):

_Designing for high availability means designing for minimal downtime._

- The goal of high availability is to reduce outages and stay operational, fast and automatic recover is best, but there is usually downtime even if its very brief.
- HA ensures systems are up and running as much as possible.
- It allows for rapid replacement or recovery of failed components.
- HA aims to minimize system downtime but doesn't eliminate it entirely.
- Examples of HA include failover mechanisms or redundant servers.
- The goal is to reduce outages and ensure fast, automatic recovery.

#### Fault Tolerance:

_Designing for fault tolerance means designing for zero downtime._

- Fault tolerant designs operate to minimize failures and to continue to operate through failure and these system designs are usually more expensive than high availability designs.
- Fault tolerance enables a system to continue operating despite component failures.
- It typically involves redundant components, such as active servers, to eliminate downtime.
- Fault-tolerant designs are often more expensive than HA designs.

#### Disaster Recovery (DR):

_Designing for disaster recovery means designing for systems to operate through a disaster._

- DR focuses on planning and actions needed in case of a disaster.
- Pre-planning and offsite backups are crucial for effective disaster recovery.
- Regular disaster recovery exercises help ensure smooth recovery in real disasters.
- AWS global infrastructure can add HA and fault tolerance, but you still need a DR plan.
- Consider resource redundancy, data replication, traffic management, and failure detection.

#### AWS Services and Reliability:

- Evaluate AWS services to improve architectural reliability.
- Legacy applications may require special consideration.
- Consider highly available configurations and disaster recovery strategies.
- Assess components' failure impact and mitigation measures.
- Define Recovery Time Objective (RTO) and Recovery Point Objective (RPO).
- RPO defines how often data needs to be backed up, while RTO sets the maximum acceptable downtime.
- Consider active/passive, active/active, and multi-site deployment styles.
- Backup plans should meet RTO and RPO requirements.
- AWS services like Amazon S3, EFS, and Amazon FSx can be used for storage.
- Understand the availability, encryption options, and limitations of these services.
- Explore AWS database services' capabilities for disaster recovery.

#### Database Services and Failover:

- RDS offers Multi-AZ deployment for automatic failover and downtime reduction.
- Amazon Aurora global database provides cross-region failover capabilities.
- Amazon DynamoDB global tables offer replication across regions.

#### Backup and Recovery:

- Various backup and recovery options exist for these services.
- Understand disaster recovery strategies like backup and restore, pilot light, warm standby, and active/active failover.
- AWS Elastic Disaster Recovery can be used for on-premises and cloud-based applications.
- For Amazon EC2 applications, use AMIs and EC2 Image Builder in disaster recovery strategies.

#### Networking and Connectivity:

- Networking concepts and AWS networking services are crucial for high availability and fault-tolerant architectures.
- Understand how routing tables work, VPC peering connections, AWS Transit Gateways, AWS Site-to-Site VPNs, AWS Direct Connect locations, AWS Direct Connect Gateways, and Amazon Route 53 Resolver.
- Keep in mind the capabilities and limitations of different services to meet your requirements.

#### Automation and Resource Integrity:

- Use services like Elastic Beanstalk, CloudFormation, OpsWorks, ECS, and EKS for automated deployments.
- Amazon Inspector and Amazon CodeGuru help check infrastructure and code vulnerabilities.
- Implement elastic load balancers and EC2 Auto Scaling groups to handle failures.

#### Global Architectures and DNS Routing:

- Amazon Route 53 DNS routing capabilities support global architectures and failover routing.
- Global Accelerator enhances application availability and performance.

#### RDS Proxy and Serverless Architectures:

- RDS Proxy improves scalability, resilience, and security for RDS and Aurora databases.
- RDS Proxy reduces failover times and integrates with Secrets Manager and IAM.
- Serverless applications can benefit from RDS Proxy for efficient database connections.

#### Continuous Improvement and Monitoring:

- Track and respond to metrics using Amazon CloudWatch and AWS X-Ray.
- Initiate automated actions based on key metrics using CloudWatch alarms.
- Use EventBridge for near real-time responses to environment changes.

#### Amazon Polly for High Availability and Fault Tolerance:

- Amazon Polly can be used in scenarios like IT service request categorization for improved availability.
- It adds spoken output and can enhance self-service in Amazon Connect contact center services.

#### Managed Services and Understanding Global Architecture:

- Many AWS managed services are built for specific purposes, offering high availability.
- Understand AWS Global Architecture, Amazon Comprehend, backup strategies, RDS Proxy, and AWS X-Ray for fault-tolerant architectures.
