# MCP Budget

**MCP Budget** is a tool that provides AI with a personal budget.

## Installation

```bash
npm install mcp-budget
```

If you're using Claude Desktop:

Open settings and in the Developer tab, click "Edit Config"

Open the config file

Add the following

```
{
  "mcpServers": {
    "news": {
      "command": "node",
      "args": [
        "/full/path/to/mcp-budget/index.js"
      ],
      "env": {
        "budget_path": "/full/path/to/budget.csv"
      }
    }
  },
  "globalShortcut": ""
}
```
Replace /full/path/to/mcp-budget/ with the actual path to the project folder

Replace /full/path/to/budget.csv with the actual path to the csv file

Quit and re-open Claude Desktop

Try it out! Ask Claude something like: "How much did I spend on food?"

If all goes well, Claude should show the result returned by your tool.

