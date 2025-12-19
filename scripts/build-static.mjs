import { spawn } from "node:child_process"
import fs from "node:fs"
import path from "node:path"

function run(cmd, args, env) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, {
      stdio: "inherit",
      env: { ...process.env, ...env },
      shell: process.platform === "win32",
    })
    child.on("exit", (code) => {
      if (code === 0) return resolve()
      reject(new Error(`${cmd} ${args.join(" ")} exited with code ${code}`))
    })
  })
}

const repoRoot = process.cwd()
const apiDir = path.join(repoRoot, "src", "app", "api")
const disabledApiDir = path.join(repoRoot, ".tmp_disabled_api")

const hasApi = fs.existsSync(apiDir)
const hasDisabled = fs.existsSync(disabledApiDir)

if (hasDisabled) {
  console.error(
    `Found ${disabledApiDir}. It looks like a previous build was interrupted. Please move it back to src/app/api manually.`,
  )
  process.exit(1)
}

try {
  if (hasApi) {
    console.log("Temporarily disabling src/app/api (static export does not support API routes)...")
    fs.renameSync(apiDir, disabledApiDir)
  }

  console.log("Building static export into ./out ...")
  await run("npm", ["run", "build"], { NEXT_STATIC_EXPORT: "1" })
} finally {
  if (fs.existsSync(disabledApiDir)) {
    console.log("Restoring src/app/api ...")
    fs.renameSync(disabledApiDir, apiDir)
  }
}


