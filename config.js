const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="toxicmonarch@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vajolnn5K3zVjqo5Fy2n";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vajolnn5K3zVjqo5Fy2n" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© MARCTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "17165036616";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "17165036616";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,91";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "17165036616";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_31_09_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDMyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDcyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgODAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMyxcbiAgICAgICAgODEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDUxLFxuICAgICAgICA3MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc2LFxuICAgICAgICA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTksXG4gICAgICAgIDgyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTksXG4gICAgICAgIDE0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA3OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDk2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDg5LFxuICAgICAgICA5MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDczLFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyLFxuICAgICAgICA2MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDk0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDg4LFxuICAgICAgICA1MixcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2LFxuICAgICAgICA2NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgODgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDMyLFxuICAgICAgICA2NixcbiAgICAgICAgMTUwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNmp3V3R2TlYrUGxOTUo2RmdGa0hJcmJSd3lvNDBwUHJnT2JhU1gvUnRJWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVGxWNHpZNGhSSXFLQ28wRG9wQVFZZ1wiLFxuICBcInBob25lSWRcIjogXCI0YzRlZTE2Ny04YzIxLTQyYjQtYmRiMC1kODZlZDkyYmI5YzVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjIsXG4gICAgICAyMzIsXG4gICAgICAyMyxcbiAgICAgIDE0NSxcbiAgICAgIDE5NyxcbiAgICAgIDIxNixcbiAgICAgIDExNyxcbiAgICAgIDEsXG4gICAgICAxNzEsXG4gICAgICAxNDEsXG4gICAgICAxMzQsXG4gICAgICA1MixcbiAgICAgIDEzNSxcbiAgICAgIDE0MixcbiAgICAgIDIzMyxcbiAgICAgIDIyNyxcbiAgICAgIDE3MixcbiAgICAgIDEwNCxcbiAgICAgIDE3NyxcbiAgICAgIDM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzAsXG4gICAgICA0OCxcbiAgICAgIDg4LFxuICAgICAgMjE0LFxuICAgICAgMTI0LFxuICAgICAgNTIsXG4gICAgICAxMjgsXG4gICAgICAxMTcsXG4gICAgICAxNzcsXG4gICAgICAxNDIsXG4gICAgICA1MixcbiAgICAgIDY0LFxuICAgICAgNTUsXG4gICAgICA1MixcbiAgICAgIDIzLFxuICAgICAgMjM3LFxuICAgICAgMTgxLFxuICAgICAgMTM1LFxuICAgICAgMjQzLFxuICAgICAgMjA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHUybmhBUTJjakl0d1lZQXlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDSFRjdHhsbThMbm0wT2hHMzN2Tnl4eVdaUFlqdTBhdENaWmFkV3ViNzJzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlhPY21HdkFjd3Bucksxdnk4Z29UcE8vYlloMGUxaFZDSzdPRDU0STFXQ1pKdEM0MWVBZk0rck9vYjFiMmlYWXN2QVd3TVRHMlozeVdaYm5BSHBuK0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZmdTBvSDBMb01xUlN2TDRRQ0V6eWxsUk5aZ2FCL0dVVWdDTWVLRlh0bEI2dVpsZWY2aGJ2TWFiK0k0SU9xSHdNVkNKUmVHdHprcVdSWEVoYTdIN2lRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTcxNjUwMzY2MTY6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI4Mjk1MjQ1MzQ0ODQ5OjhAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxNzE2NTAzNjYxNjo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzE0NTA1MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVWUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRVZQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTlRpUVp3c2VUU2poRXRuclFTRlJNM1pLK3Y3K01TWitvRkZpYUgvY3NpWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNDA1Mjk4NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzI2NDIzOTU5MDU2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRVZULmpzb24iOiAie1wia2V5RGF0YVwiOlwieG4rbzJKOC80dWN4aGdUSGtyNDc4NS9iend4UjU4VnJBdlpKekNSQ0E0TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNDA1Mjk4NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzI2NjE5OTI5Njk5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MRCTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MRC-MD",
  ownername:process.env.OWNER_NAME|| "MARC",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "MRC"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
