module.exports = {
  prompts() {
    return [
      {
        name: "name",
        message: "What is the name of the new project?",
        default: this.outFolder,
        filter: (val) => val.toLowerCase(),
      },
      {
        name: "description",
        message: "Brief project description",
        default: this.outFolder,
      },
      {
        name: "main",
        message: "What is your main branch name?",
        default: "main",
      },
    ];
  },
  actions: [
    {
      type: "add",
      files: "**",
    },
  ],
  async completed() {
    this.gitInit();
    await this.npmInstall({ npmClient: "npm" });
    this.showProjectTips();
  },
};
