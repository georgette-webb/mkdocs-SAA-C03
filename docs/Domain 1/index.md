## <a id="domain 1">Domain 1: Design Secure Architectures</a>

### Task Statement 1: Design secure access to AWS resources

#### Designing Secure Access to AWS Resources:

- Security is a fundamental consideration when designing an AWS architecture.
- It involves defining how people, tools, and applications access AWS services and data.
- Access management includes determining who can launch or terminate resources and managing permissions.
- Different types of cloud environments (public, private, hybrid, multi-cloud) require secure access design.

#### Importance of AWS Accounts:

- Understanding AWS accounts is fundamental.
- AWS accounts start with a single account root user with full permissions.
- The account root user can be a security risk and should have multi-factor authentication.
- Creating new users with limited permissions is recommended for added security.

#### IAM (Identity and Access Management):

- AWS IAM is a global service for securing data in the IAM database.
- Best practices include securing the account root user, applying the principle of least privilege, and using multi-factor authentication.
- IAM identities start with no permissions but can have permissions granted.
- Understanding IAM users, groups, and roles is important for managing access.
- The principle of least privilege limits the scope of permissions.

#### Federated Access and IAM Roles:

- Users with identities outside AWS can use IAM roles for federated access.
- Configuring Active Directory for federated access is crucial.
- Controlling application access to AWS APIs without hardcoding credentials is essential.

#### IAM Policies:

- You don't need to write advanced policies but should understand how to read and interpret policy documents.
- IAM policies define permissions for identities and resources.
- Identity-based policies control what resources an identity can access.
- Resource-based policies control access to specific resources and their actions.

#### Traceability and Monitoring:

- Traceability helps monitor, alert, and audit actions and changes to AWS resources.
- Integration of log and metric collection is important for real-time monitoring.
- Insight into access to account resources and data is crucial for security.
- Knowledge of AWS Control Tower, AWS Organizations, and service control policies is essential for security design.

#### Testing and Implementation:

- Designing security strategies for multiple AWS accounts is a testable skill.
- AWS Control Tower and AWS Organizations help with security standards and enforcement.
- Learning and practicing security design and implementation is important.

#### Policies:

- IAM policies define permissions for AWS identities and resources.
- There are two types of policies: identity-based and resource-based.
- Identity-based policies are attached to IAM users, groups, or roles, controlling their access to resources.
- Resource-based policies are attached to specific AWS resources (e.g., S3 buckets, SQS queues) and specify who can access and what actions are allowed on the resource.
- Understanding policy documents is important; you don't need to write advanced policies for the certification.
- IAM policies help enforce the principle of least privilege, limiting permissions to what is necessary.

#### Root Users:

- AWS accounts begin with a single account root user.
- The account root user has full permissions and is a security risk if compromised.
- It's recommended to secure the account root user by enabling multi-factor authentication (MFA).
- Permissions for the account root user cannot be changed or modified.
- Creating additional IAM users with limited permissions is a safer practice than using the account root user.
- Using the principle of least privilege, assign permissions based on user roles and responsibilities to limit potential risks.

### Task Statement 2: Design secure workloads and applications.

- It emphasizes secure access to AWS services, including resource launch and termination, access management, permissions, and more.
- Understanding Amazon Virtual Private Cloud (Amazon VPC) is fundamental, with distinctions between default and custom VPCs.
- Amazon VPC is a regional service, and subnets within VPCs are Availability Zone resilient.
- Key elements of securing VPC architectures include security groups, network access control lists, route tables, and NAT gateways.
- Knowledge of networking fundamentals, protocols, CIDR, subnetting, routing, and gateways is important.
- Understanding network segmentation, public and private subnets, and their differences is crucial.
- Routing mechanisms within a VPC, including route tables, are essential for secure traffic flow.
- Designing secure access for on-premises traffic through VPNs and selecting appropriate components like PrivateLink, peering, transit gateways, and Direct Connect is important.

- AWS endpoints and endpoint services, such as PrivateLink, enable secure access to AWS public services without exposing them to the internet.
- Securing external connections using AWS Site-to-Site VPNs, AWS Client VPN, and Direct Connect requires capacity, security, and resilience considerations.
- Security best practices for data protection, including personally identifiable information (PII), involve services like Amazon Macie, Amazon Cognito, and Amazon GuardDuty.
- Understanding Cognito user pools, identity pools, and single sign-on (SSO) is necessary.
- Firewalls and proxy servers are integrated with security services like AWS Shield, AWS WAF, AWS IAM Identity Center, AWS Secrets Manager, and AWS Systems Manager Parameter Store.
- Shield Standard and Shield Advance have different capabilities for DDoS and SQL injection attack prevention.
- Choosing the right service for specific requirements, such as AWS Secrets Manager for secret storage, is essential.
- AWS WAF is limited to certain AWS services like application load balancers, Amazon API Gateway, and Amazon CloudFront.

### Task Statement 3: Determine appropriate data security controls.

- Data security is a critical focus area, whether data is in transit or at rest.
- Implementing the principle of least privilege is essential to limit access to those who need it and only to the required degree.
- Two types of encryption are crucial: encryption at rest and encryption in transit.
- Encryption at rest protects against unauthorized access and theft and is typically used when only one party is involved.
- Encryption in transit protects data during transfer between two or more parties.
- Key terms and concepts include plaintext, algorithm, key, and ciphertext.
- Symmetric and asymmetric encryption are two types of encryption.
- Knowledge of methods for securing data at rest, managing encryption keys, and key rotation is important.
- Understanding access policies for encryption keys and the differences between various services is necessary.
- AWS Certificate Manager is used for encrypting data in transit, and certificates must be renewed.
- Amazon S3 offers encryption at rest and in transit, with client-side and server-side encryption options.
- Different server-side encryption choices include customer-provided keys, S3-managed keys, and customer master keys in AWS KMS.
- Compliance requirements must be met, and AWS Artifact provides security and compliance reports.

- Data retention, classification, and data recovery are important considerations.
- Not all data is equal, so proper data classification is essential.
- Layering multiple security controls (preventative and detective) is crucial for defense in depth.
- Data protection strategies should align with architecture and requirements.
- Understanding how various AWS services handle data protection, performance implications, and key management is essential.
- Protecting data based on access patterns and using policies is important, especially in services like S3.
- Disaster recovery strategies in AWS range from backups to multi-site active-active solutions.
- AWS Backup and various AWS services offer backup and restore capabilities.
- AWS Storage Gateway is a service for hybrid environments.
- Data security patterns and AWS security controls should be considered in data protection designs.