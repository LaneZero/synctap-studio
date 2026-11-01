/** Dependency-free release assertions. Run with Node.js 18+. */
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { runInNewContext } from 'node:vm';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const original=fs.readFileSync(path.join(root,'tests','v2-serializer.txt'),'utf8').trim();
const script=html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert.ok(script,'Inline program must exist');
new Function(script); // Parse all JavaScript without running browser APIs.
assert.ok(script.includes(original),'Original V2 timing serializer must be unchanged');
const serialize=new Function('LINES','T',`return ${original};`);
assert.deepEqual(JSON.parse(serialize(['A','B','C'],[1.25,null])),[
  {n:1,start:1.25,text:'A'}, {n:2,start:null,text:'B'}, {n:3,text:'C'}
]);
for(const [id,value] of Object.entries({
 btcAddress:'bc1q5tl36qpk27hf7upl8l753xa0gcm57adrvmwgkz',
 tronAddress:'TA5pibChqS7CeHiDvfP7V3uQVMynk6SxLq',
 evmAddress:'0x6634E26BA0e323182B7A9a89278E9a7BbCa9aF70',
 solAddress:'91kuBFEZAnRk8ixsuzAQnAVvtzLAsQpPFRsfe285ZKUC'})) {
 assert.ok(html.includes(`id="${id}">${value}</code>`),`${id} changed`);
}
assert.ok(html.includes('https://github.com/LaneZero/synctap-studio'));
assert.ok(html.includes('listWindowManual') && html.includes('PAGE_SIZE=160'));
assert.ok(html.includes('applySnapshot(selected.state)'));
const manifest=JSON.parse(fs.readFileSync(path.join(root,'manifest.webmanifest')));
assert.equal(manifest.start_url,'./');
for(const asset of ['sw.js','favicon.svg','icons/icon-192.png','icons/icon-512.png','README.md','CHANGELOG.md'])
 assert.ok(fs.existsSync(path.join(root,asset)),`Missing ${asset}`);
const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
assert.ok(sw.includes('synctap-shell-v4.6.0'),'New cache version needed');
assert.ok(sw.includes('url.origin !== self.location.origin'),'Cache must stay on origin');
console.log('PASS: syntax, V2 JSON, wallets, GitHub link, pagination, restoration, PWA assets');
