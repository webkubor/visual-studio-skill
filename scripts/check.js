import fs from 'fs';
import { execSync } from 'child_process';

const GITHUB_REPO = 'webkubor/visual-design-studio';
const PACKAGE_PATH = './package.json';

async function checkUpdate() {
  try {
    const localPackage = JSON.parse(fs.readFileSync(PACKAGE_PATH, 'utf-8'));
    const localVersion = localPackage.version;
    console.log(`🔍 [哨兵] 正在检查 ${localPackage.name} 远程版本...`);
    const remotePackageRaw = execSync(`curl -s https://raw.githubusercontent.com/${GITHUB_REPO}/master/package.json`).toString();
    const remotePackage = JSON.parse(remotePackageRaw);
    const remoteVersion = remotePackage.version;
    if (localVersion !== remoteVersion) {
      console.log(`
🚨 [发现更新!] v${localVersion} -> v${remoteVersion}
👉 建议执行: npm run update`);
    } else {
      console.log(`✅ [最新] v${localVersion}。`);
    }
  } catch (err) { console.error('❌ 检查失败。'); }
}
checkUpdate();
