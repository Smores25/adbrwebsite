
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v10";

const GUILD_ID = "961457576342593606";

// Initialize Discord REST client
const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_BOT_TOKEN!);

export async function registerRoutes(app: Express): Promise<Server> {
  // Discord messages endpoint
  app.get("/api/discord/messages/:channelId", async (req, res) => {
    try {
      const channelId = req.params.channelId;
      
      // Fetch messages from Discord
      const messages = await rest.get(
        Routes.channelMessages(channelId)
      ) as any[];

      const formattedMessages = messages
        .filter(msg => msg.attachments.some((att: any) => att.content_type?.startsWith('image/')))
        .map(msg => ({
          id: msg.id,
          author: msg.author.username,
          content: msg.content,
          timestamp: msg.timestamp,
          attachments: msg.attachments
            .filter((att: any) => att.content_type?.startsWith('image/'))
            .map((att: any) => ({
              url: att.url,
              contentType: att.content_type
            }))
        }));

      res.json(formattedMessages);
    } catch (error: any) {
      console.error("Discord API Error:", error);
      res.status(500).json({ 
        message: "Failed to fetch Discord messages",
        error: error.message 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
