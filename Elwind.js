const { Elwind } = require('./Client');


let client = global.client = new Elwind({
    token: "MTAwNTE4ODc0NzcxNDkwMDAwOQ.GES1Ez.YkUcHx0vm6Hd6OI7Puz4Uyc2N9NGCEwoa9vhbM", //TOKEN HERE
    MongoURI: "mongodb+srv://onurzy0:onurxlord12@cluster0.zdwtt.mongodb.net/?retryWrites=true&w=majority", //MONGO URL HERE PASTE
    prefix: ["."], //YOUR BOT PREFİX 
    owners: ["994731651336765552",], //BOT DEVELOPER ID
})

client.on('ready', () => {
    client.guilds.cache.map(async (x) => {
      await x.members.fetch().then(guild => { })
    })
  })

client.fetchCommands()
client.fetchEvents()
client.connect()