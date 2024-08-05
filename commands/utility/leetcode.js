const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("leetcode")
    .setDescription(
      "Fetches and replies with the daily leetcode data from the API"
    ),
  async execute(interaction) {
    try {
      const response = await fetch(
        "https://alfa-leetcode-api.onrender.com/daily"
      );
      const data = await response.json();

      // Assuming the data returned is a string or a simple JSON object you want to display
      await interaction.reply(`Link: ${JSON.stringify(data.questionLink)}`);
    } catch (error) {
      console.error("Error fetching data:", error);
      await interaction.reply(
        "There was an error fetching the daily leetcode data."
      );
    }
  },
};
