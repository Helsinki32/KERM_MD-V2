//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "50948122030";
global.owner = process.env.OWNER_NUMBER || "50948122030";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME9QVm1pbTBQcWVoaFBRQVFJMWF2ZVNYNzlSNzNvNkdTV2Y3cXF2U2xGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2pwTDFWTnlWS2ZmN3hnMU81T3k0TDRjREdNcXNqWGNmaWJCSVJwOWsyVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSVpKbEpqN1RWSmZyRlg1cWpUdDlqZ3FIajVqaktpZm11Mk1acDE3TmxZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5a1NYZUtQeVRuVWdjQUhwaFk3VTI4blBXY0F5czNCMjZWZkdxaHZsVjM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNKSTV6YmREYmRKcWVxNXRKUmdqQlJpczBQcGdkTE1yQjNLTHd3YlYwSEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVwWldRc2lJU3FQbnZuNzlhUVpIR1oweC85N1lUZ1lzbkhoWTgvdTl4M1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUU5ZUhscTJWVlo4V0JwNUJoeVBRMU51anlJYUx3UU8zVGFoYmpBUmtuYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFhNUzBIWjFCNUd2MklOa3pkMVlUc0YxSC9VSW1seHI4WGx1UlJXNkVGWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldjNGdmcllDeW5DTWxlbHdxWHFScEJoNnpsWUZOYTRtWmNsTFdPaXloVDRnU1NKcmtFQUJQVWI3SUd0MWNoZHZZVDRjcWdHa21pZjRDL1BaTW0zdWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzYsImFkdlNlY3JldEtleSI6InU4VTE4aXBDT3dFaTBOOVpRTzBPV3dqdFd1VW9IRjdPUDQwZUZSWWFuSkk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ii13S0ZEZW1FUTdpT2pzc2Zadm9VcUEiLCJwaG9uZUlkIjoiZGYxZjc4MjQtZDNlNi00Nzc2LTg3MmYtMjhjNTE3Y2I4YWM0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhxU0NSQmVmSU14NU51M1BCbjM4MnV6SEJ0dz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuaHNzOFFGZWVPRHo2bVM4eXh6TENSTEFkKzg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSjg0SDE0MVkiLCJtZSI6eyJpZCI6IjUwOTQ4MTIyMDMwOjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSmVzdXMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0llYTlyd0ZFSjJpekxjR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InJJbjVQR2MxaWxBRUwvRjVTZkoxektjaVdFdnlkVnVxb0pDSnhtbytYWDQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik9heWtUMGR3Vll0dTRtVjIrUFRKUExoaWhPUE9LSjY4Zk5TYmxmMFNhZWdzelJpUjc5RWVZcmFSNmVlNUlYcVZFcHJMbHl0QUhEK09nTzlkcFJhVkJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJOaFlaVGhEY0FUdGp6K0RvREZ3Q0JtQ21mTGQrTkFpNkRCajBBdE41dFJ6eDZUeENRTmRHL2Y0STQ2NEY2RkROM3JLUTl3L3ZrcW1IMUh1bXJnN0hnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTQ4MTIyMDMwOjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYXlKK1R4bk5ZcFFCQy94ZVVueWRjeW5JbGhMOG5WYnFxQ1FpY1pxUGwxKyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzIwNTY3MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMNGcifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
