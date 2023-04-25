import { createOAuth2Url, grantOAuth2Token } from "./oauth2.server";
import type { ExternalAPI } from "./types";

const slack: ExternalAPI = {
  identifier: "slack",
  name: "Slack",
  authenticationMethods: {
    oauth2: {
      name: "OAuth2",
      type: "oauth2",
      client: {
        id: {
          envName: "EXTERNAL_SLACK_CLIENT_ID",
        },
        secret: {
          envName: "EXTERNAL_SLACK_CLIENT_SECRET",
        },
      },
      config: {
        authorization: {
          url: "https://slack.com/oauth/v2/authorize",
          scopeSeparator: " ",
          createUrl: ({
            authorizationUrl,
            clientId,
            clientSecret,
            key,
            callbackUrl,
            scopes,
            scopeSeparator,
          }) => {
            return createOAuth2Url({
              authorizationUrl,
              clientId,
              clientSecret,
              key,
              callbackUrl,
              scopes,
              scopeSeparator,
            });
          },
        },
        token: {
          url: "https://slack.com/api/oauth.v2.access",
          grantToken: ({
            tokenUrl,
            clientId,
            clientSecret,
            code,
            callbackUrl,
            requestedScopes,
          }) => {
            return grantOAuth2Token({
              tokenUrl,
              clientId,
              clientSecret,
              code,
              callbackUrl,
              requestedScopes,
              scopeSeparator: " ",
            });
          },
        },
        refresh: {
          url: "https://slack.com/api/oauth.v2.access",
        },
        appHostEnvName: "EXTERNAL_SLACK_APP_HOST",
      },
      scopes: [
        { name: "admin" },
        { name: "admin.apps:read" },
        { name: "admin.apps:write" },
        { name: "admin.conversations:read" },
        { name: "admin.conversations:write" },
        { name: "admin.invites:read" },
        { name: "admin.invites:write" },
        { name: "admin.teams:read" },
        { name: "admin.teams:write" },
        { name: "admin.usergroups:read" },
        { name: "admin.usergroups:write" },
        { name: "admin.users:read" },
        { name: "admin.users:write" },
        { name: "authorizations:read" },
        { name: "bot" },
        { name: "calls:read" },
        { name: "calls:write" },
        { name: "channels:history" },
        { name: "channels:manage" },
        { name: "channels:read" },
        { name: "channels:write" },
        { name: "chat:write" },
        { name: "chat:write:bot" },
        { name: "chat:write:user" },
        { name: "conversations:history" },
        { name: "conversations:read" },
        { name: "conversations:write" },
        { name: "dnd:read" },
        { name: "dnd:write" },
        { name: "emoji:read" },
        { name: "files:read" },
        { name: "files:write:user" },
        { name: "groups:history" },
        { name: "groups:read" },
        { name: "groups:write" },
        { name: "identity.basic" },
        { name: "im:history" },
        { name: "im:read" },
        { name: "im:write" },
        { name: "links:write" },
        { name: "mpim:history" },
        { name: "mpim:read" },
        { name: "mpim:write" },
        { name: "none" },
        { name: "pins:read" },
        { name: "pins:write" },
        { name: "reactions:read" },
        { name: "reactions:write" },
        { name: "reminders:read" },
        { name: "reminders:write" },
        { name: "remote_files:read" },
        { name: "remote_files:share" },
        { name: "remote_files:write" },
        { name: "rtm:stream" },
        { name: "search:read" },
        { name: "stars:read" },
        { name: "stars:write" },
        { name: "team:read" },
        { name: "tokens.basic" },
        { name: "usergroups:read" },
        { name: "usergroups:write" },
        { name: "users.profile:read" },
        { name: "users.profile:write" },
        { name: "users:read" },
        { name: "users:read.email" },
        { name: "users:write" },
        { name: "workflow.steps:execute" },
      ],
    },
  },
};

export const apis: Record<string, ExternalAPI> = { slack };
