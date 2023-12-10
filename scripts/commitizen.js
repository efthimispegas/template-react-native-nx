const custom = require('@digitalroute/cz-conventional-changelog-for-jira/configurable');

module.exports = custom({
  jiraMode: true,
  skipScope: false,
  defaultType: 'feat',
  defaultScope: 'monorepo',
  jiraPrefix: 'OPW',
  jiraAppend: ': ',
  scopes: [
    'foundation',
    'todo',
    'vrs',
    'release',
    'monorepo'
  ]
});
