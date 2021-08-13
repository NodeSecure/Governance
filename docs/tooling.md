# Environment-variables

Most of our tooling is CLI that need **access token** for NPM and/or GITHUB. If you don't know how to find these tokens for both of these platforms, please follow these guides:

- [github - Creating a personal access token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line)
- [npm - Creating and viewing authentication tokens](https://docs.npmjs.com/creating-and-viewing-authentication-tokens)

The next step is to create two Environment Variables `GIT_TOKEN` and `NPM_TOKEN` where the values are your tokens. If you dont known how to achieve that on your systems, these following guides may help you:

- [How to set the path and environment variables in Windows](https://www.computerhope.com/issues/ch000549.htm)
- [Environment Variables in Linux](https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-a-linux-vps)
- [Share Environment Vars between WSL and Windows](https://devblogs.microsoft.com/commandline/share-environment-vars-between-wsl-and-windows/)