const Discord = require('discord.js')
const client = new Discord.Client()
const { prefix, token } = require('./config.json')
const fs = require('fs')

client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('js'))

for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name,command)
}

client.on('ready', ()=> {
    client.user.setActivity('저를 이용해주신분들을 위하여 열심히 일하는중',{type:'PLAYING'})
    console.log("봇이 정상적으로 가동되었습니다!")
})

client.on('message',msg=>{
    if(!msg.content.startsWith(prefix) || msg.author.bot) return
    const args = msg.content.slice(prefix.length).trim().split(/ +/)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    try{
        command.execute(msg,args)
    }catch(error){
        console.log(error)
    }
})

client.on('message', msg=>{
    if(msg.content === "!!핑"){
        msg.channel.send("퐁!") // channel.send로 바꿔줘야되네 ㅠㅠ
    }
    if(msg.content === "!!바보"){
        msg.channel.send("내가 바보라고?.. (삐짐)") // channel.send로 바꿔줘야되네 ㅠㅠ
    }
    if(msg.content === "!!못생김"){
        msg.channel.send("내가 못생기면 넌 얼마나 못생겼냐 %$(@#%(#$") // channel.send로 바꿔줘야되네 ㅠㅠ
    }
    if(msg.content === "!!야"){
        msg.channel.send("왜") // channel.send로 바꿔줘야되네 ㅠㅠ
    }
    if(msg.content === "!!샌즈"){
        msg.channel.send("wa! 샌즈") // channel.send로 바꿔줘야되네 ㅠㅠ
    }
    if(msg.content === "!!hello"){
        msg.channel.send("한국말로 해 EC!") // channel.send로 바꿔줘야되네 ㅠㅠ
    }
    if(msg.content === "!!안녕"){
        msg.channel.send("네 안녕하세요!~") // channel.send로 바꿔줘야되네 ㅠㅠ
    }
})

client.login(token)