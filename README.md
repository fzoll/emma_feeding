# Emma feeding tracker

Small React web app for tracking a baby's feeding: which stocks (batches) are
in the freezer and what was fed when.

## What it does

- **Sign in required.** The app is wrapped in the Amplify `withAuthenticator`
  (Cognito); self sign-up is hidden, so accounts are created by an admin.
- **Stocks.** Create a stock (name, date made, count remaining, comment). Stocks
  with remaining > 0 are listed. **Use** decrements the count and records a feed
  for today.
- **Feeds.** Add a feed by hand (date, name, comment). Feeds are grouped by date
  and shown as a vertical timeline, newest first.
- **Footer.** Shows today's feed count and what was fed.

Data is stored through an AWS AppSync GraphQL API with two models, `Stock` and
`Feed` (`amplify/backend/api/emmafeeding/schema.graphql`).

## Run locally

Requires Node.js and npm.

```bash
npm install
npm start      # dev server on http://localhost:3000
npm run build  # production build into build/
```

`src/index.js` imports `src/aws-exports.js`, which is git-ignored and generated
by the Amplify CLI. Without it the app does not start. With access to the
Amplify project, generate it with `amplify pull` (the repo defines a `staging`
environment in `amplify/team-provider-info.json`).

## Tests

```bash
CI=true npm test -- --watchAll=false
```

Uses react-scripts (Jest + Testing Library). The only test, `src/App.test.js`,
is the unmodified Create React App sample (it looks for "learn react"), and it
currently fails to run because Jest cannot resolve
`@aws-amplify/ui-react/styles.css`. There are no working tests yet.

## Deployment

The repository shows an AWS Amplify project, not a deployment pipeline:

- Backend (auth + AppSync API) is defined under `amplify/backend/` and
  provisioned by the Amplify CLI as CloudFormation (`staging` environment,
  `us-east-1`, Amplify app id in `amplify/team-provider-info.json`).
- GraphQL operations in `src/graphql/` are generated from the schema
  (`.graphqlconfig.yml`); `src/ui-components/` is Amplify Studio generated code.
- There is no `amplify.yml`, CI workflow, or hosting config in the repo, so how
  the frontend build is hosted is not described here.
