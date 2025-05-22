// Environment configuration
interface Config {
  webhookUrl: string;
}

export const config: Config = {
  webhookUrl: import.meta.env.VITE_WEBHOOK_URL,
}

// Validate that required environment variables are set
if (!config.webhookUrl) {
  throw new Error('VITE_WEBHOOK_URL is not set in environment variables');
}
