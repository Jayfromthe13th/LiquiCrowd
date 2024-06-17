import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { execSync } from "child_process";
import "dotenv/config"
import * as fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

export interface IObjectInfo {
  type: string | undefined;
  id: string | undefined;
}



export const keypair = Ed25519Keypair.fromSecretKey(
  Uint8Array.from(Buffer.from(process.env.DEPLOY_PRIVATE_KEY!, "base64")).slice(
    1
  )
);
console.log();
export const client = new SuiClient({ url: getFullnodeUrl("testnet") });

export const getId = (type: string): string | undefined => {
  try {
    const rawData = fs.readFileSync("./created.json", "utf8");
    const parsedData: IObjectInfo[] = JSON.parse(rawData);
    const typeToId = new Map(parsedData.map((item) => [item.type, item.id]));
    return typeToId.get(type);
  } catch (error) {
    console.error("Error reading the created file:", error);
  }
};
const path_to_contracts = path.join(
  dirname(fileURLToPath(import.meta.url)),
  "../../../contracts"
);

const { modules, dependencies } = JSON.parse(
  execSync(
    `sui move build --dump-bytecode-as-base64 --path ${path_to_contracts}`,
    { encoding: "utf-8" }
  )
);


