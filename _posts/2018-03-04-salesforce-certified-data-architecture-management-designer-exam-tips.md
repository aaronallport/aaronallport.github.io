---
layout: post
title: Salesforce Certified Data Architecture & Management Designer Exam Tips
status: published
type: post
published: true
meta:
  _edit_last: '1'
---

# Salesforce Certified Data Architecture & Management Designer Exam Tips

> Last week saw the revision pay off as I passed my first Salesforce Architect Designer exam. I'll share some tips that I learnt along the way when preparing for the exam.

![I'm a Certified Salesforce Data Management and Architecture Designer](/images/dmad_certificate.png "I'm a Certified Salesforce Data Management and Architecture Designer")

## My approach to exam revision

I tend to "brute force" all of the resource guide materials, writing copious notes as I go to then refer back to. I tend to print some of the "best practice" guides and cheat sheets referred to in the resource guide materials and study these when I'm on my commute to/from work.

### The resource guide

The Salesforce-produced exam resource guide (found [here](http://certification.salesforce.com/RG_CertifiedDataArchitectureandManagementDesigner.pdf)) is the de-facto place from which to base revision, but there are some areas that aren't covered in a lot of detail that make it on to the exam, such as MDM. Check out the [Exam Guide](http://certification.salesforce.com/SG_CertifiedDataArchitectureandManagementDesigner.pdf) for the full listing of what the exam covers.

### Other useful guides and resources

Here are some other documents (some of which are referenced in the Resource Guide):
* [Best Practices for Deployments
with Large Data Volumes](http://resources.docs.salesforce.com/latest/latest/en-us/sfdc/pdf/salesforce_large_data_volumes_bp.pdf)
* [Designing Record Access for
Enterprise Scale](https://resources.docs.salesforce.com/sfdc/pdf/draes.pdf)
* [Query & Search
Optimization Cheat Sheet](http://resources.docs.salesforce.com/rel1/doc/en-us/static/pdf/salesforce_query_search_optimization_developer_cheatsheet.pdf)
* [Record Locking Cheat Sheet](http://resources.docs.salesforce.com/194/0/en-us/sfdc/pdf/record_locking_cheatsheet.pdf)

## Key topics

### Data Quality

Know what responsibilities fall under which area in the enterprise:

* Data Governance: Definition of availability, usability, integrity and security of data. Typically a "counsel" that defines procedures and oversees their execution.

* Data Stewardship: Manages quality of the data and data-driven assets, such as business intelligence and reporting.

* Data Architect: The design, implementation and change management of the data model.

### Data.com

Know the difference between Data.com Clean and Data.com Prospector - [Data.com](https://www.salesforce.com/uk/products/data/solutions/)

### Query optimisation

Know how to improve query performance, including the measures you can take to avoid full table scans across large data sets. Knowing the indexing of fields will help here.

### Skewing

Know what skewing is and how it affects performance.

There are two types of skewing:
1. Ownership skew: One person owns a large amount of records. Think one person owning lots of accounts
2. Lookup skew: One record is the parent to many child records. Think one account having lots of contacts or lots of opportunities

### Indexing

Salesforce supports custom indexes to speed up queries and improve performance. Custom indexes need to be enabled by Salesforce Support.

There are indexes enabled and maintained by default for most objects:
* RecordTypeId
* Division
* CreatedDate
* Systemmodstamp (*NOT* LastModifiedDate!)
* Name
* Email (for contacts and leads)
* Foreign key relationships (lookups and master-detail)
* Salesforce Record ID

Custom indexes can be created on custom fields, with the exception of:
* Multi-select picklists
* Text area (long + rich)
* Non-deterministic formula fields (like ones using `TODAY()` or `NOW()`)
* Encrypted text fields.

External IDs cause an index to be created on that field. External IDs can be created on the following fields:

* Auto Number
* Email
* Number
* Text

#### Indexing formula fields

Formula fields that are deterministic *can* be indexed. Essentially, formula fields that don't pull data through from other objects or use dynamic functions like `TODAY()` can be indexed.

### Skinny Tables

As summarised [here](https://developer.salesforce.com/docs/atlas.en-us.salesforce_large_data_volumes_bp.meta/salesforce_large_data_volumes_bp/ldv_deployments_infrastructure_skinny_tables.htm):

*"Salesforce can create skinny tables to contain frequently used fields and to avoid joins. Doing so keeps the skinny tables in sync with their source tables when the source tables are modified. If you want to use skinny tables, contact Salesforce Customer Support. When enabled, skinny tables are created and used automatically where appropriate. You can’t create, access, or modify skinny tables.*

*For each object table, Salesforce maintains other, separate tables at the database level for standard and custom fields. This separation ordinarily requires a join when a query contains both kinds of fields. A skinny table contains both kinds of fields and does not include soft-deleted records."*

Know what skinny tables are, when to employ them, and their limitations.

### Loading Data

#### Bulk API

The [Bulk API](https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/asynch_api_intro.htm) is used to run asynchronous, batched data loads or extractions. Knowing it's limitations, when to run in Serial vs. Parallel mode and how bulk queries work (retry limits, timeout limits) will serve you well.

#### Lock Contention

Know what causes lock contention when performing data operations. For example, when loading or updating data, know how skewing will affect performance. Know how having workflows, validation rules, assignment rules and the like will affect the quality and speed of your operation.

#### PK Chunking

[PK Chunking](https://developer.salesforce.com/blogs/engineering/2015/03/use-pk-chunking-extract-large-data-sets-salesforce.html) can be used as a method for optimising queries by querying a target table to identify a number of chunks of records with sequential ID's which are then used to form the actual queries against the target table.

## Useful blog posts I found when revising

When revising for the exam, I found the following two blog posts really help reinforce my learning:
* [Always a Blezard: Salesforce Certified Data Architecture & Management Designer Exam Tips](http://www.alwaysablezard.com/salesforce/salesforce-certified-data-architecture-management-designer-exam-tips/)
* [Salesforce Memo: How to Prepare For and PASS Data Architecture and Management Designer Exam](http://salesforcememo.com/2016/11/17/how-to-prepare-for-and-pass-data-architecture-and-management-designer-exam/)

## Good luck!

Cue the satisfaction when seeing the "pass" screen at the end of the exam! I'm now the proud owner of my 5th Salesforce certification.

For anyone embarking on this exam, I wish you good luck!
