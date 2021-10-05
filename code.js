const discord = require("discord.js-12");
const client = new discord.Client();


client.on("ready", message => {
  console.log("Bot準備完了！");
});

//ここから

client.on("message", message =>{
  if (message.content === "hello."){
    message.channel.send(`hello! ${message.author}`)
  }
})

//ここまで

client.login(process.env.DISCORD_BOT_TOKEN);