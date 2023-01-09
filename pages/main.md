# Orbits documentation

Welcome on board ! You are about to start a smooth travel to configure your DevOps workflow in order to keep a stable orbit in the cloud galaxy !

# T.O.C.

- [What is Orbits](#what-is-orbit)
- [Api documentation](./../docs/README.md)
- [Examples](./../src/examples/)
- [Cdk usage](./cdk.md)

# What is Orbits ?

 - A flow manager for DevOps
 - A Continuous Integration and Continuous Deployment tool
 - A tool to manage CDK deployments and CDK life events programatically
 - An opinionated framework to make DevOps easier to deal with 
 - (A way to write Petri net)

Orbits is a node.js Typescript framework that allows you to write Ops pipe in a very similar manner you are used to write promises or events cycles.
Robusteness and precision are at the core of its development.

# Why ?

We think that :
- We should not have a specific language for each tools (terraform, circleCI, gitlab... each one develops its own syntax)
- In the same spirit of the AWS CDK, we should dispose of complete language instead of writing configuration files
- We should not write DevOps in some hidden file/folder like .circleCI or .github
- We should be able to easily develop and test our pipelines locally
- We should be able to self-host our delivery pipelines

Orbits aims to tackle these issues.


# Core concepts

An Orbits pipeline has three main concepts.

## Action

Actions are the building blocks of an Orbits workflow. An Action includes a typescript class that extends the `Action` core class. An Action launches a command on a specific resource (creating an order, installing a new software on a machine, launching a Docker process...) and track the state of this command until it succeeds or fails. An Action is a great way to follow the state of process that doesn't answer instantly.

You can learn more about this [here](./action.md).

## Transaction

Once you have written the Actions that will compose your app (payment order, cdk deploying, signs process), you can chain and orchestrate them within a Transaction.
A Transaction includes a typescript class that extends the `Transaction` core class.
Transaction allows to chain Actions in a Promise-like style, except that you have the guarantee of consistness even if your current process crashes.

You can learn more about this [here](./transaction.md).

## Application

Once you have written the Transactions that will compose your app, you have to create and bootstrap an Orbits app. There can be only one app by process. The app manages database configuration and maps the different Actions that you can use.

You can learn more about this [here](./app.md).

## A bit more

Additionnally, you will probably need to learn more about the folowing points.

### Executors

Executors are a way to launch part of your workflow in a specific execution context (Docker, Lambda...). 
As a consequence, Orbits gives you a full and customizable control over your pipeline. You can custom the policies rights access at a granular level in your pipeline.
You can learn more about this [here](./executor.md)

---> :construction_worker: Work in Progress ; we would be pleased to find contributors to go quicker.

### Cdk
The Orbits framework's philosophy is close to cdk's.
These two can be paired as Orbits allows you use to programmatically manage a cdk app.
You can see an example here :

---> :construction_worker: Work in Progress ; we would be pleased to find contributors to go quicker.

### Git integration
 
There are standard Actions that allow to keep track of a repository state and to wait for some git events (new commits...)

---> :construction_worker: Work in Progress ; we would be please to find contributors to go quicker.

# Get startted

You can read :
- this
- this

# Examples

- Cdk example :
- Git example :
- Whole pipeline example :
