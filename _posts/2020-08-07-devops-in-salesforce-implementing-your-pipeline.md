---
layout: post
title: DevOps in Salesforce - Implementing Your Pipeline
status: published
type: post
published: true
meta:
  _edit_last: '1'
---

# DevOps in Salesforce: Implementing Your Pipeline

> Welcome to our third post in a series about building an effective Salesforce deployment pipeline that your whole team will love. Our [first post](https://aaronallport.com/2020/06/17/an-introduction-to-devops-in-salesforce.html) introduced DevOps in Salesforce, and our [second](https://aaronallport.com/2020/06/25/devops-in-salesforce-failing-to-plan-is-planning-to-fail.html) covered the planning aspects to be considered. With the theory and planning now covered, we can begin to explore the implementation.

Written by [Aaron Allport](https://linkedin.com/in/aaronallport/) and [Stuart Grieve](https://linkedin.com/in/stuart-grieve/). 

![Photo by Mike Benna on Unsplash](/images/doinsf-iyp1.jpeg "Photo by Mike Benna on Unsplash")

## Picking a Version Control System (VCS)

Before developing or deploying, it is important to have a place to store source code and configuration. As is expected, there are many Version Control System (VCS) vendors and software packages available. It is important to factor in considerations such as ease-of-use, cost, support, security, and community into selections decisions. For example, a well-supported VCS that has a proven security track record and a large community for support is going to have more appeal than a bleeding-edge tool from an obscure vendor, with little or no support available.

It is additionally useful to consider how the development and operations teams work. In the vast majority of cases, a VCS suited to distributed team development is suitable. It’s little wonder services such as GitHub, Bitbucket and GitLab are popular, due in no small part for them using Git as the underlying source control system. We’ll evaluate some popular VCS’s to highlight some key features that may assist in picking one:

### GitHub
GitHub lays claim to the largest source control host in the world. Offering both free and paid plans, GitHub provides hosting for software development and version control using Git. Each GitHub project has bug tracking, feature requests, task management and wikis. More information is available [here](https://github.com/features).

### Bitbucket
Atlassian Bitbucket is another version control repository for Git projects. Unlike GitHub, it instead uses the Atlassian JIRA product for bug tracking, issues and task management. Whilst you would be hard pressed to find a VCS that couldn’t integrate with Jira, Bitbucket does boast a seamless experience. Additionally, users can host their wikis and documentation using the Atlassian Confluence product. See [here](https://bitbucket.org/product/guides/getting-started/overview) for more information.

### GitLab
GitLab is yet another DevOps lifecycle tool that provides a Git-repository manager offering wiki, issue-tracking and continuous integration/continuous deployment pipeline features. Similarly, GitLab boasts an extensive list of partner tools it can integrate with and has positioned itself as a very popular complete CI/CD toolchain. More information is available [here](https://about.gitlab.com/).

### Azure DevOps Services
Azure DevOps Services is a collection of tools to facilitate several project functions, including a Kanban board, CI/CD pipeline, Git repositories and test plans. Open-source projects can take advantage of a limited free capacity across each tool. More information is available [here](https://azure.microsoft.com/en-gb/solutions/devops/).

### Host on-premise or in the cloud?

With a general industry shift away from on-premise infrastructure, you may be wondering if putting your source code and pipeline in the cloud is a good idea also. Depending on the exact requirements of your organisation, you may prefer to host your VCS and pipeline on-premise and then deploy up to Salesforce through your firewall. Other organisations that aren’t subject to certain industry constraints might be more flexible in adopting a cloud-first approach to their hosting. Whilst it is true that cloud-first offers more options in virtually all tooling for VCS and development/deployment pipeline facilitation, we have both worked in instances whereby industry regulation forces the hand of the infrastructure security team to host tooling on-premise. We were surprised at how many options fit across the full-hosted to fully-cloud spectrum; with the four options discussed above ticking both boxes.

A comprehensive comparison of source code hosting facilities can be found on Wikipedia at: https://en.wikipedia.org/wiki/Comparison_of_source-code-hosting_facilities

## Branching Models

So, you’ve picked your Version Control System (VCS), but how will you organise your source code? Just like your various environments, the codebase in your VCS is ever-changing and represents all the different phases of your team’s work. For example, you will have your production codebase, maybe you have your latest release’s codebase currently in user acceptance, and you could have a vast number in sandbox’s where your latest and greatest features are being built out.

![Photo by Gabriel Garcia Marengo on Unsplash](/images/doinsf-iyp2.jpeg "Photo by Gabriel Garcia Marengo on Unsplash")

Branches, alongside [Tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging), provide an effective mechanism for locating a specific change in this rapidly changing source code. Adopting a specific model for branching will then allow you to implement a set of rules and procedures within your team, making pinpointing that snapshot you’re looking for is a simple task.

There have been numerous branching models published over the years, with the widespread debate of the advantages and disadvantages of each across the software development community. Of course, like many things — one size does not fit all. The right branching model for you is going to depend on several factors, and in our experience, the outcome is usually driven by personal preference. We would recommend you start by speaking to your team. What’s worked for them previously, what hasn’t, and why?

If this is all new to you then don’t worry — we’ve got your back. When we’re choosing a branching model for a project, we look at the following factors:

* Team size: if you’ve got a large team, you may want to look at a simpler model to reduce the complexity that comes with a rapidly changing codebase
  
* Who’s administering the repository: who’s responsible for governing your VCS and gets the call when someone gets their merge in a pickle; and crucially what’s their experience in managing more complex models?
  
* What development methodology are you using: if you release at a high frequency, perhaps long-lived branches aren’t for you
  
* The confidence levels in the team: for a team entirely new to this style of working, diving in at the deep end where mistakes can impact the whole team can be overwhelming.

For less experienced teams, perhaps still fairly new to an Agile approach, we tend to prescribe a model which mirrors your environment strategy; with the addition of [feature branches](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) for new functionality. This results in several long-lived branches, such as UAT or SIT; which provide easily locatable isolated codebases for the various phases of your development. For more experienced teams, we may look at [Gitflow](https://nvie.com/posts/a-successful-git-branching-model/); which replaces a branch-per-environment approach with release branches. Well seasoned teams may also suit [GitHub flow](https://guides.github.com/introduction/flow/), whereby master is the only core branch and Salesforce environments would build from feature branches.

Above are just three models which we believe fit the Salesforce Software Development Life Cycle (SDLC) well, but the reality is branching models is a fairly subjective area. Investigate our recommendations and other published models, try them out, and see what suits your team.

## Building your toolset

Once you’ve picked your Version Control System, your next task is deciding on a release management tool. There are a vast number of players in this space- varying from suites providing an admin-friendly alternative to Salesforce Change Sets, to VCS with built-in CI/CD tools, to open source automation servers. If this is a new area for you, it can be particularly daunting to navigate. Fear not. Whilst it would be impossible to discuss every vendor, we’re going to highlight some of your options.

First, however, there are some questions you’re going to want to ask yourself:

* What stack are you already invested in: it’s likely your team is already using multiple tools; do any of these vendors have a release management tool? It can sometimes be cost effective (when tooling is built/supplied by the same vendor), and you may find the integration will be richer

* Does your VCS have built-in CI/CD: GitHub, Bitbucket, GitLab, Circle CI all have tools to automate your deployments?

* Is there a plugin ecosystem available? Are many common tasks already catered for?

* Is there a community or forum of like-minded folks who collaborate on resolving issues and in some cases pushing the capabilities?

* How mature is your team when it comes to DevOps: are you just looking for a change set alternative, or do you have the capabilities required within your team to script a pipeline tailored to your needs? Even if you have a DevOps wizard at your disposal, is the associated daily workflow appropriate for the rest of the team?

These questions should have helped start building a better understanding of your requirements for a release management tool. Whilst it would be impossible to discuss every vendor available, below is a comparison of some we feel are worth considering.

(Please note: much of this analysis is subjective and based solely on our independent experiences)

{% gist 84e181ec73fed6118959ba1cf4a492f6 %}

## Putting it all together

Enough talking. This post is all about the implementation and to demonstrate how easy it is to implement a basic pipeline, we’ve prepared a sample SFDX project and relevant scripts ready for you to clone.

To get a simple pipeline up and running, we’ll use Bitbucket Cloud and it’s built-in continuous integration tool: Bitbucket Pipelines. However, we strongly encourage you to try the other vendors discussed too.

Feel free to follow along with us as we implement a pipeline! Before you start, please ensure you have the following:

1. A Salesforce Developer Edition org (this will act as your CI environment)
1. Salesforce CLI
1. Visual Studio Code (with the Salesforce extension pack)
1. A free Bitbucket Cloud account
1. Git
1. OpenSSL
   
#### Create a Self-Signed SSL Certificate and Private Key

1. Open your terminal/ command prompt. Change your working directory to your desktop, and create a new directory to store the generate files:
   
`#!bash $ mkdir certificates $ cd certificates`

1. Generate an RSA private key, replacing <password> with your own password
   
`#!bash $ openssl genrsa -des3 -passout pass:<password> -out server.pass.key 2048`

1. Create a key file from the server.pass.key file using the same password from the previous step

`#!bash $ openssl rsa -passin pass:<password> -in server.pass.key -out server.key`

1. Delete the server.pass.key

`#!bash $ rm server.pass.key`

1. Request and generate the certificate. You will be asked a series of questions, these can be completed or skipped. When prompted for the challenge password, press enter to skip

`#!bash $ openssl req -new -key server.key -out server.csr`

1. Generate the SSL certificate

`#!bash $ openssl x509 -req -sha256 -days 365 -in server.csr -signkey server.key -out server.crt`

#### Encrypt the server.key for secure storage in the repository

Generate a key and initialisation vector (iv) to encrypt your server.key locally, replacing <passphrase> with your own phrase. Make a note of the key and iv output, you will need them in the next step AND later stage.

`openssl enc -aes-256-cbc -k <passphrase> -P -md sha1 -nosalt`

Navigate to where your certificates created in the previous step are stored in your terminal. Encrypt your server.key using the key and iv values.

`openssl enc -nosalt -aes-256-cbc -in server.key -out server.key.enc -base64 -K <key-value> -iv <iv-value>`

#### Create a Connected App in Salesforce

1. Log in to the developer edition you’ll use as your CI environment
1. From Setup, go to App Manager and click **New Connected App**.
1. Enter the following information:
  * Connected App Name: Bitbucket CI
  * API Name: Bitbucket_CI
  * Contact Email: **your email address**
  * Tick **Enable OAuth Settings**
  * Callback URL: http://localhost:1717/OauthRedirect
  * Tick **Use digital signatures**
  * Select **Choose file** and upload your server.crt file
  * Add the following OAuth Scopes:
    * Access and manage your data (api)
    * Perform requests on your behalf at any time (refresh_token, offline_access)
    * Provide access to your data via the Web (web)
1. Click **Save**
1. On your Connected App page, make a note of your **Consumer Key**
1. Click **Manage**, then **Edit Policies**
1. Under **OAuth Policies**, Set **Permitted Users** to: Admin approved users are pre-authorised
1. Click **Save**
   
#### Create a Permission Set in Salesforce ####

1. From Setup, go to Permission Sets, select **New**
1. Label: Bitbucket CI
1. Click **Save**
1. Select our new permission set, and click **Manage Assignments**, then **Add Assignments**
1. Add your user
1. Go back to Setup > Manage Connected Apps > Bitbucket CI
1. Select **Manage** and under the section Permission Sets: click **Manage Permission Sets**
1. Select Bitbucket CI, and hit **Save**

#### Setup your repository

1. Whilst logged in to Bitbucket, [import a new repository](https://bitbucket.org/repo/import) using our [prepared source code](https://github.com/stuartgrieve/simple-sfdx-ci-process-demo) (make your repository private).
1. Go to **Repository Settings**, and click the **Settings** sub-menu under the Pipelines heading
1. Enable Pipelines
1. Click the **Repository Variables** sub-menu under the Pipelines heading
1. Add the key and iv values created during the section: ‘Encrypt the server.key for Secure Storage in the Repository’
  * Name: `DECRYPTION_KEY`
  * Value: `<key-value>`
  * Tick secured, and select **Add**
  * Name: `DECRYPTION_IV`
  * Value: `<iv-value>`
  * Tick secured, and select **Add**
1. Add the following variables
  * Name: `SF_USERNAME`
  * Value: Your CI environment Salesforce username
  * Select **Add**
  * Name: `SF_SECRET_KEY_FOR_CLIENT_ID`
  * Value: Consumer Key we made a note of when creating our Bitbucket CI Connected App
  * Tick secured, and select **Add**

#### Prepare your project

1. On the source page of your repository, hit the Clone button, select the HTTPS dropdown and copy the text beginning with ‘git clone…’
1. Open your terminal/command prompt and change your directory to where you would like to store your project
1. Execute the contents of step one (git clone…)
1. In VS Code, Open the folder created during the cloning process
1. Copy and paste the server.key.enc from your certificates folder to the root of your project
1. Use VS Code’s source control integration to stage, commit and push the certificate to your master branch (more info: [here](https://code.visualstudio.com/docs/introvideos/versioncontrol))

At this point, your commit has been pushed to your repository and Bitbucket Pipelines has been triggered. If your pipeline status is ‘Failed’, it implies there is an issue with your connected app authorisation or variables. With any luck, you’re seeing a nice green tick. Now check your Salesforce org — you should notice something new on your homepage, we just need to manually activate it:

1. In Salesforce, navigate to the Sales app, hit the Setup icon and select **Edit Page**
1. Click the **Pages** dropdown, and select **Home Page Default**
1. Hit **Activation…**, then **Assign as Org Default**, and **Save**
1. After selecting the back button and navigating back to the Sales app home page, you should be greeted with your new component congratulating you on your success

![Congratulations, you've set up a CI process!](/images/doinsf-iyp3.jpeg "Congratulations, you've set up a CI process!")

Following the Branching Model concepts discussed earlier, you now have the basis for a well-structured workflow a team could use to merge their changes into a central org in an incredibly organised manner.

To take this demonstration a step further — create a second Developer Edition org and [authorise](https://developer.salesforce.com/tools/vscode/en/user-guide/vscode-commands/#authorize-org) it with SFDX using VS Code. Make some changes in your org, and [retrieve](https://developer.salesforce.com/tools/vscode/en/user-guide/org-browser/) them; then commit them to your repository (don’t forgot to add API references to your [package.xml](https://trailhead.salesforce.com/en/content/learn/modules/package-xml/package-xml-adventure)).

You’ll see your new CI process in full swing, with metadata changes tracked in source control and deployed to your Salesforce org.

## Using on-premise? Consider Docker

Docker introduced to us the concept of using “containers” for our software packages. Within a Docker Container, a piece of software and all dependant packages are installed and configured, with communications out to other containers and services through well-defined channels.

![Photo by Vidar Nordli-Mathisen on Unsplash](/images/doinsf-iyp4.jpeg "Photo by Vidar Nordli-Mathisen on Unsplash")

In a nutshell, Docker allows you to manage parts of your software estate as discrete pieces (containers). When you upgrade a particular software application (software in a container), you can simply do this in isolation and then replace the appropriate container in your IT estate. Docker containers are run on a single operating system and therefore take fewer resources than virtual machines.

For example, if you had a Jenkins container and wanted to upgrade the version of Jenkins due to a patch release or similar, you can simply copy the container, apply the upgrade and then replace the original container when done. If you needed to scale up the secondary builders in Jenkins, these can be done as perfect replicas using the same docker container. Any tweaks or fixes can be done at the container level, reducing effort and work in the long-term.

Furthermore, Containers are created from Images — a file which contains layers of build instructions. [Docker Hub](https://hub.docker.com/) is a library of over 100,000 community published container images, covering (probably) every language/technology. Now, if your CI/CD tool supports Docker — you can utilise these images (or create your own) to manage your deployment environment. Imagine your Jenkins server is used by multiple different teams, each with their own dependencies. The state of this server will constantly be changing, and this can be considerably hard to manage. Instead, each team can have their deployment pipeline configured to a specific docker image — meaning each deployment will run inside a temporary container, always with the exact configuration.

We would advocate using Docker if at all possible due to the benefits it can bring when maintaining and managing the software applications in your DevOps pipeline.

More information on Docker can be found at [https://www.docker.com/](https://www.docker.com/)

> In our next post in this series, we’ll look at some additional deployment considerations when deploying to Salesforce using the pipeline and concepts we’ve introduced so far.