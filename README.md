# Monorepo template using Nx CI

[![Static Badge](https://img.shields.io/badge/_-npm-878787?logo=npm&logoColor=CB3837)](https://www.npmjs.com/)
[![Static Badge](https://img.shields.io/badge/_-React_Native_CLI-878787?logo=react)](https://reactnative.dev/)
[![Static Badge](https://img.shields.io/badge/_-Redux_Toolkit-878787?logo=redux&logoColor=764ABC)](https://redux-toolkit.js.org/introduction/getting-started)
[![Static Badge](https://img.shields.io/badge/_-React_Navigation-878787?logo=preact&logoColor=673AB8)](https://reactnavigation.org/)
[![Static Badge](https://img.shields.io/badge/_-React_Hook_Form-878787?logo=reacthookform&logoColor=F03A7D)](https://react-hook-form.com/api/useform)
[![Static Badge](https://img.shields.io/badge/_-Axios_Client-878787?logo=axios&logoColor=5A29E4)](https://axios-http.com/docs/intro)
[![Static Badge](https://img.shields.io/badge/_-Conventional_Commits-878787?logo=conventionalcommits&logoColor=FE5196)](https://github.com/conventional-changelog/commitlint)
[![Static Badge](https://img.shields.io/badge/_-ESLint-878787?logo=eslint&logoColor=FE5196)](https://github.com/conventional-changelog/commitlint)

A cross-cutting monorepo template for bootstrapping React Native applications, using the latest technologies, code styles and code control guidelines. 

## Code versioning and control

<a alt="commitlint logo" href="https://github.com/conventional-changelog/commitlint" target="_blank" rel="noreferrer"><img src="https://github.com/efthimispegas/template-react-native-nx/assets/43468988/5d914fe9-4981-4d5f-a6bb-be26998c5382" width="45" ></a>

Using `@commitlint/cli` for cross-team development and code maintenance, stacked with `@digitalroute/cz-conventional-changelog-for-jira` for authoring conventional commits. ✍️

Also, each project comes with [husky](https://github.com/typicode/husky) pre-commit hooks installed, to make coding across teams a lot easier! 🐶

You can use your own configuration for scoped commits, or disable it at once by removing `@commitlint/config-nx-scopes` & `@digitalroute/cz-conventional-changelog-for-jira` plugins

## Linting 

<a alt="eslint logo" href="https://eslint.org/docs/latest/rules/" target="_blank" rel="noreferrer"><img src="https://github.com/efthimispegas/template-react-native-nx/assets/43468988/f8d1cdc6-40be-402f-b503-e8b1a967dd14" width="45" ></a>
<a alt="prettier logo" href="https://prettier.io/" target="_blank" rel="noreferrer"><img src="https://github.com/efthimispegas/template-react-native-nx/assets/43468988/a3bb5761-f3dd-4a70-97dc-51ab3be77078" width="45" ></a>


This project comes bootstrapped with ESLint - Prettier linting plugins to cooperatively format your code. 👔

You can edit the `.eslintrc` & `.prettierrc` files with your own formatting rules. Happy coding! 💻


## OAuth with [FusionAuth](https://fusionauth.io/blog/securing-react-native-with-oauth) 

<a alt="fusionauth logo" href="https://fusionauth.io/docs/quickstarts/quickstart-react-native" target="_blank" rel="noreferrer"><img src="https://github.com/efthimispegas/template-react-native-nx/assets/43468988/b487d038-e7b8-45ea-9c9d-56bc3db137e7" width="45" ></a>

In this project we used FusionAuth, an OpenID Connect compliant CIAM server, that is free, customizable and allowes integration with "Pixy" (PCKE), but the React Native code should work with any OAuth compliant server.

Make sure you follow [this guide](https://fusionauth.io/blog/securing-react-native-with-oauth) for a quick overview of how FusionAuth is setup inside our Todo app.

#### TL;DR

Otherwise, if you are pressed for time, you can just fire up a Docker deamon and just bring everything you need to setup the IS locally. All you need is already inside the project's root directory:
* `docker-compose.yml`
* `.env.example`

Just make a name change to the .env.example => .env and add your own credentials (if you leave the ones shown below, it will still work but you might want to change them for your own sake!). Then run `docker compose up -d` and wait for the search / db / oauth containers to be built with the configurations you provided.

```
# .env file
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
DATABASE_USERNAME=fusionauth
DATABASE_PASSWORD=hkaLBM3RVnyYeYeqE3WI1w2e4Avpy0Wd5O3s3
ES_JAVA_OPTS="-Xms512m -Xmx512m"
FUSIONAUTH_APP_MEMORY=512M
```

After the containers are up, you will be able to see the Fusion Admin Console at `http://localhost:9011/`. Login with the credentials you provided and follow the instructions in the guide to create a Fusion App and register a user for our todo app.

[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://fusionauth.io/docs/get-started/download-and-install/docker)
![ElasticSearch](https://img.shields.io/badge/-ElasticSearch-005571?style=for-the-badge&logo=elasticsearch)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

## The Nx workspace

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

### Start the todo app

To start the development server run `nx serve todo`. This will fire up a metro bundler on your terminal. You can follow the instructions on the developer menu (for iOS or Android developement). Happy coding! 👷

### Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).

### Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

### Want better Editor Integration?

Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

### Ready to deploy?

Just run `nx build demoapp` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.

### Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/core-features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)
