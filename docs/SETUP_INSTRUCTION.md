# Setup instruction

This setup guide is for who that wants to use this project as a template for own profile.
If so, here are the nessesary information to edit and setup this project as your github profile.

## Setup

### Step 1: Copy this repository to your own

Easy way is fork this repository to your account.
This can done by clicking the fork button on the top right corner of git repository page.
Otherwise just clone this repository to local machine and push it to your own repository.

> [!NOTE]
> For change git repository origin url, you can use command: `git remote set-url origin <your-repository-url>`.

### Step 2: Create environment variables

> [!IMPORTANT]
> This is important step. If anythings wrong, workflow will not work properly.


For run this project locally, It required to create a `.env` file in the root directory of the project. 
But easier way is copy `.env.example` file to `.env` and fill the variables. 

Anyway, finaly this project must be running on the Github. So about the environment variables, It must be set on Github. 
For create environment variables for repository just follow this [documentation](https://docs.github.com/en/actions/learn-github-actions/variables#creating-configuration-variables-for-a-repository)

> [!WARNING]
> Which environment variables will be secret, you can find in the `.env.example` file. Workflow won't work correctly if variables aren't in the right place.

## Architecture
About who that wants to modify this project, here is the project architecture.
``` text
.
├── .github/
│   └── workflows/           - Collect Github Actions workflows.
├── assets/                  - Collect static files.
├── docs/
├── src/
│   ├── cli/                 - This project is CLI based. So every command are here.
│   ├── services/            - 3rd party services are here.
│   ├── utils/               - Defined utility functions here.
│   ├── modules/             - Each module collect nessesary files (if have) for each feature of the project.
│   ├── config.js            - All config from all mudules will be assembled here.
│   ├── index.js             - Entry point of the project.
│   └── template.js          - String template for README.md.
└── .env                     - Environment variables.
```