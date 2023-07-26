module.exports = {
  apps: [
    {
      name: "aug-admin-prod",

      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "aug-admin-staging",

      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
