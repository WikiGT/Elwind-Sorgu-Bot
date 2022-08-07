const { Elwind } = require('./Client');


let client = global.client = new Elwind({
    token: "", //TOKEN HERE
    MongoURI: "", //MONGO URL HERE PASTE
    prefix: [""], //YOUR BOT PREFİX 
    owners: ["",], //BOT DEVELOPER ID
})

client.on('ready', () => {
    client.guilds.cache.map(async (x) => {
      await x.members.fetch().then(guild => { })
    })
  })

client.fetchCommands()
client.fetchEvents()
client.connect()