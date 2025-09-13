import fs from 'fs';
import path from 'path';
import swc from "@swc/core";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function transformForketFile(from, to) {
  if (from.endsWith('.json') || from.endsWith('.md')) {
    fs.copyFileSync(from, to);
    return;
  }
  const { transform, parse, print } = swc;
  const code = fs.readFileSync(from, 'utf-8');
  const ast = await parse(code, {
    syntax: "typescript", // or 'ecmascript'
    tsx: true,
    decorators: false
  });

  // if (from.match(/08\/actions\.ts/)) {
  //   fs.writeFileSync(__dirname + '/ast.json', JSON.stringify(ast, null, 2));
  // }

  traverseNode(ast, {
    ImportDeclaration(node) {
      if (node?.source?.value !== 'react') {
        node.source.value = `"${node.source.value + '.js'}"`;
        node.source.raw = node.source.value.replace(/\\"$/g, '.js\\"');
      }
    }
  });

  const transformed = await swc.print(ast, {
    minify: false
  });
  fs.writeFileSync(to, transformed.code);
}

export async function setupForket(cases) {
  const AppFilePath = path.join(__dirname, '..', '..', 'apps', 'forket', 'src', 'app', 'App.tsx');
  let AppContent = fs.readFileSync(AppFilePath, "utf-8");
  const imports = cases.map((c) => `import Case${c.id} from './cases/${c.id}/Page.js';`).join("\n");
  AppContent = AppContent.replace(
    /\/\/ <case_imports>[\s\S]*?\/\/ <\/case_imports>/,
    `// <case_imports>\n${imports}\n// </case_imports>`
  );
  fs.writeFileSync(AppFilePath, AppContent);
}

function traverseNode(node, visitors, stack = []) {
  if (!node || typeof node.type !== "string") {
    return;
  }

  const visitor = visitors[node.type];
  if (visitor) {
    visitor(node, stack);
  }

  for (const key in node) {
    if (!node.hasOwnProperty(key)) continue;

    const child = node[key];

    if (Array.isArray(child)) {
      child.forEach((c) => {
        if (c) {
          if (typeof c.type === "string") {
            traverseNode(c, visitors, [node].concat(stack));
          } else if (c?.expression && typeof c.expression.type === "string") {
            traverseNode(c.expression, visitors, [node].concat(stack));
          } else if (c?.callee && typeof c.callee.type === "string") {
            traverseNode(c.callee, visitors, [node].concat(stack));
          } else if (c?.left && typeof c.left.type === "string") {
            traverseNode(c.left, visitors, [node].concat(stack));
          } else if (c?.right && typeof c.right.type === "string") {
            traverseNode(c.right, visitors, [node].concat(stack));
          }
        }
      });
    } else if (child && typeof child.type === "string") {
      traverseNode(child, visitors, [node].concat(stack));
    }
  }
};
function actionDestructFormData(argName) {
  return {
    "type": "Parameter",
    "span": {
      "start": 5854,
      "end": 5871
    },
    "decorators": [],
    "pat": {
      "type": "ObjectPattern",
      "span": {
        "start": 5854,
        "end": 5871
      },
      "properties": [
        {
          "type": "KeyValuePatternProperty",
          "key": {
            "type": "Identifier",
            "span": {
              "start": 5856,
              "end": 5860
            },
            "value": "data"
          },
          "value": {
            "type": "ArrayPattern",
            "span": {
              "start": 5862,
              "end": 5870
            },
            "elements": [
              {
                "type": "Identifier",
                "span": {
                  "start": 5864,
                  "end": 5868
                },
                "ctxt": 3,
                "value": argName,
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "optional": false,
      "typeAnnotation": null
    }
  }
}