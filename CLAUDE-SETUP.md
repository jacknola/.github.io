# Claude Code Health Check Setup

This document explains the automated health check system for Claude Code that runs every time you open a session.

## What Was Created

The following files have been added to your global Claude configuration (`~/.claude/`):

### 1. `~/.claude/startup-health-check.sh`
An automated health check script that runs when Claude Code starts. It checks:
- **Configuration Files**: Verifies `settings.json` and `mcp_settings.json` exist
- **MD Documentation**: Lists all `.md` files in global and local `.claude/` directories
- **MCP Servers**: Checks if configured MCP servers are running
- **Process Health**: Monitors active MCP-related processes

### 2. `~/.claude/settings.json` (Updated)
Added a `SessionStart` hook to automatically run the health check:
```json
{
  "hooks": {
    "SessionStart": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "~/.claude/startup-health-check.sh"
          }
        ]
      }
    ]
  }
}
```

### 3. `~/.claude/mcp_settings.example.json`
Example MCP server configuration template with common servers:
- Filesystem access
- GitHub API integration
- Brave Search
- PostgreSQL database

### 4. `~/.claude/README-HEALTH-CHECK.md`
Comprehensive documentation about the health check system and MCP server setup.

## How It Works

Every time you open Claude Code:
1. The `SessionStart` hook triggers automatically
2. `startup-health-check.sh` runs and displays:
   - Configuration file status
   - All MD documentation files found
   - MCP server health and running processes
   - A color-coded summary

## Setting Up MCP Servers

MCP (Model Context Protocol) servers extend Claude's capabilities. To set them up:

1. **Copy the example configuration:**
   ```bash
   cp ~/.claude/mcp_settings.example.json ~/.claude/mcp_settings.json
   ```

2. **Edit the configuration:**
   ```bash
   nano ~/.claude/mcp_settings.json
   # or
   code ~/.claude/mcp_settings.json
   ```

3. **Configure your servers:**
   - Remove "example-" prefixes
   - Add your API keys/tokens
   - Remove unused servers
   - Add custom servers as needed

4. **Install jq for better parsing (optional):**
   ```bash
   sudo apt-get install jq
   ```

## Example MCP Configuration

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/home/user/.github.io"],
      "description": "Access to your GitHub.io project"
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_token_here"
      },
      "description": "GitHub API for repo management"
    }
  }
}
```

## Adding Project Documentation

You can create `.md` files that the health check will acknowledge:

**Global documentation** (applies to all projects):
```bash
echo "# My Claude Guidelines" > ~/.claude/my-guidelines.md
```

**Project-specific documentation**:
```bash
mkdir -p .claude
echo "# Project Guidelines" > .claude/project-guidelines.md
```

The health check will list all these files when Claude starts.

## Testing the Setup

Run the health check manually:
```bash
~/.claude/startup-health-check.sh
```

You should see:
- Green checkmarks for existing files
- Yellow warnings for missing configurations
- A summary of MCP server status
- List of all MD files found

## Files Location

All configuration files are stored in:
- **Global**: `~/.claude/` - Settings that apply to all projects
- **Local**: `<project>/.claude/` - Project-specific settings

## Customization

Edit `~/.claude/startup-health-check.sh` to:
- Add custom validation checks
- Change output colors/formatting
- Add project-specific verifications
- Monitor additional services

## Troubleshooting

**Health check doesn't run:**
- Verify the script is executable: `chmod +x ~/.claude/startup-health-check.sh`
- Check `~/.claude/settings.json` for the SessionStart hook

**MCP servers not detected:**
- Ensure `mcp_settings.json` exists (not just the example file)
- Verify JSON syntax: `jq . ~/.claude/mcp_settings.json`
- Check that Node.js/npm are installed

**No MD files found:**
- Create `.claude/` directories in your projects
- Add `.md` files with documentation or guidelines

## Resources

- [Claude Code Documentation](https://docs.claude.com/en/docs/claude-code)
- [MCP Server Registry](https://github.com/modelcontextprotocol/servers)
- [View the full setup guide](~/.claude/README-HEALTH-CHECK.md)

## Next Steps

1. **Set up MCP servers** if you haven't already
2. **Create documentation files** for your projects
3. **Restart Claude Code** to see the health check in action
4. **Customize the script** to fit your workflow

The health check will now run automatically every time you open Claude!
