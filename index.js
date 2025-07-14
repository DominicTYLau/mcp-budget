#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import fs from 'fs';

const server = new McpServer({
  name: "mcp-budget-server",
  version: "1.0.0"
});

const inputSchema = {
}

async function fetchBudget({question}) {
        let csvData ;

    try {
    csvData = fs.readFileSync(process.env.budget_path, {encoding: 'utf8'});
    } catch (err) {
    console.error('Error reading file:', err);
    }
    
  return {
    content: [{
      type: "text",
      text: csvData
    }]
  };
}

server.registerTool("budget", {
  title: "Budget Search",
  description: "Searches a persons budget and provides details on it.",
  inputSchema
}, fetchBudget);

const transport = new StdioServerTransport();
await server.connect(transport);