# Context7 MCP Integration

This project is configured with Context7 MCP (Model Context Protocol) to provide up-to-date, version-specific documentation and code examples directly to AI coding assistants.

## What is Context7?

Context7 is an MCP server that delivers current documentation from source repositories, eliminating outdated or hallucinated API information. Instead of relying on generic training data, Context7 fetches live documentation tailored to specific package versions.

## Configuration

The Context7 MCP server is configured in `.mcp.json`:

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"],
      "env": {}
    }
  }
}
```

## How to Use

When working with Claude Code or other MCP-compatible AI assistants:

1. Simply add "use context7" to your prompts when you need up-to-date documentation
2. Context7 will fetch current documentation and examples for the libraries you're using

### Examples

**Creating Next.js middleware:**
```
Create a Next.js middleware that checks for a valid JWT in cookies and redirects unauthenticated users to /login. use context7
```

**Configuring Cloudflare Workers:**
```
Configure a Cloudflare Worker script to cache JSON API responses for five minutes. use context7
```

**React component with latest patterns:**
```
Create a React component using the latest hooks patterns for data fetching. use context7
```

## Requirements

- Node.js >= v18.0.0 (currently using v22.21.0 ✓)
- MCP-compatible AI assistant (Claude Code, Cursor, VS Code with Copilot, etc.)

## Optional: API Key for Higher Rate Limits

To get higher rate limits and access to private repositories:

1. Create an account at [context7.com/dashboard](https://context7.com/dashboard)
2. Get your API key
3. Update `.mcp.json` to include your API key:

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp", "--api-key", "YOUR_API_KEY"],
      "env": {}
    }
  }
}
```

## Benefits

- **Current Information**: Get documentation for the exact version of libraries you're using
- **Real APIs**: No more hallucinated functions or outdated examples
- **Better Code Quality**: Generate working code from up-to-date patterns and best practices
- **Time Savings**: Skip manually searching documentation across multiple sources

## Learn More

- [Context7 GitHub Repository](https://github.com/upstash/context7)
- [Upstash Blog - Context7 MCP](https://upstash.com/blog/context7-mcp)
- [Model Context Protocol](https://modelcontextprotocol.io/)
