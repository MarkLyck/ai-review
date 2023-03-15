import { Probot } from "probot";

export = (app: Probot) => {
  app.on("issues.opened", async (context) => {
    console.log("🔈 ~ context:", context);
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    await context.octokit.issues.createComment(issueComment);
  });
  app.on(
    ["pull_request.opened", "pull_request.synchronize"],
    async (context) => {
      console.log("🔈 ~ context:", context);

      const prComment = context.issue({
        body: "Thanks for opening this PR",
      });
      await context.octokit.issues.createComment(prComment);
    }
  );
};
