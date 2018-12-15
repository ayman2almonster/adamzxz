const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "*";

client.on('ready', () => {
  console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Type *help | by Ayman ALmonster`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {  ///الامر
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` **: عدد الاعضاء المستلمين**`); 
 message.delete(); 
};     
});

var p = "*";
client.on("message", message => {
  let men = message.mentions.users.first();
  if(message.content.startsWith(prefix + "vkick")) {
    try {
    if(!men) {
      message.channel.send("**الرجاء اخيار شخص لطرده !**");
      return;
    }
    if(!message.guild.member(men).voiceChannel) return message.channel.send("المراد طرده ليس في الغرف الصوتيه!");
    if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لديك صلحيات سحب الاعضاء")
    if(!message.guild.me.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لدي الصلاحيه لسحب الاعضاء");
       if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ليست لدي الصلاحيات لانشاء رومات صوتيه")

    message.guild.createChannel(" VKick", "voice").then(c => {
      message.guild.member(men).setVoiceChannel(c.id)
    setTimeout(() => {
      c.delete()
    }, 100)
    });
    message.channel.send(`**لقد تم طرده من الرومات الصوتيه \`\`${men.username}\`\`**`)
} catch (e) {
  message.channel.send("لا يمكنني القيام بذلك بسبب الصلاحيات او ما شابه");
}
  }
});

client.on('message',async msg => {
  if(msg.channel.type === "dm") return;
if(msg.author.bot) return;
var p = "*";
if(msg.content.startsWith(p + "setstats")) {
if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('? **يجب ان تمتلك رتبه **');
if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('? **البوت لا يمتلك صلاحية**');
var stats = msg.guild.createChannel('📊 Server Stats 📊', 'category').then(kk => {
  var member =msg.guild.createChannel('Members Count [ 0 ] ', 'voice').then(member => {
        var voiceonline =msg.guild.createChannel('Voiceonline [ 0 ]', 'voice').then(voiceonline => {
             var time =msg.guild.createChannel('🕐 - Time  ', 'voice').then(time => {
              var c = msg.guild.createChannel(`Day : ${moment().format('dddd')}` , 'voice').then(c => {
    member.setParent(kk);            
    voiceonline.setParent(kk);
    time.setParent(kk);
    c.setParent(kk);
 
 
    member.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  voiceonline.overwritePermissions(msg.guild.id, {
   CONNECT: false,
   SPEAK: false
 });
  time.overwritePermissions(msg.guild.id, {
   CONNECT: false,
   SPEAK: false
 });
 c.overwritePermissions(msg.guild.id, {
  CONNECT: false,
  SPEAK: false
});
 
 
 
setInterval(function() {
 
  var currentTime = new Date(),
  hours = currentTime.getHours() + 3 ,
  minutes = currentTime.getMinutes(),
  seconds = currentTime.getSeconds(),
  years = currentTime.getFullYear(),
  month = currentTime.getMonth(),
  day = currentTime.getDay();
 
  if (minutes < 10) {
      minutes = "0" + minutes;
  }
  var suffix = "AM";
  if (hours >= 12) {
      suffix = "PM";
      hours = hours - 12;
  }
  if (hours == 0) {
      hours = 12;
  }
  member.setName(`Members Count : [ ${msg.guild.members.size} ]`)
voiceonline.setName(`Voice Online :[ ${msg.guild.members.filter(m => m.voiceChannel).size} ]`);
   time.setName(`🕐 - Time : 「${hours} : ${minutes} :  ${suffix}」`);
     c.setName(`📅 - Day : 「${moment().format('dddd')}」`);
},1000);
                })
 
             })
        })
      })
})
       
}
});

client.on('message' , message => {
if(message.content === '*help') {
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
message.author.send(`
***__وصف عن البوت__***
**
????????????? {?اوامر البوت?} ?????????????
? *bc ? برودكاست ب امبيد وبدون
? *Link ? رابط انفايت للسيرفر
? *clear ? مسح الشات
? *server ? لعرض معلومات السيرفر
? *marry ? لعبة الزواج
? *kf ? لعبة كف
? *mc ? قفل الشات
? *new ? لانشاء تذكرة
????????????? {? By Ayman ALmonster ?} ?????????????
**
`);
}
})
 
client.login(process.env.BOT_TOKEN);
