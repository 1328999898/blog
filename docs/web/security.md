# 安全

## 一、非对称加密

### 1、原理
```
A: 生成自己的公钥、私钥
B: 生成自己的公钥、私钥

A: 使用B的公钥加密 -> 发送给B
B: 使用B的私钥解密

B: 使用A的公钥加密 -> 发送给A
A: 使用A的私钥解密
```

### 2、实现
2.1 生成公钥私钥(openssl)
```sh
# 生成公钥
openssl genrsa -out rsa_private_key.pem 1024
# 生成私钥
openssl rsa -in rsa_private_key.pem -out rsa_public_key.pem -pubout
```
2.2 代码
```js
// 使用 node + crypto
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

function getRealPath(filePath) {
  // 当前路径下文件的完整路径
  return path.resolve(__dirname, filePath)
}

function encrypt(data, key) {
  // 加密方法
  return crypto.publicEncrypt(key, Buffer.from(data));
};

function decrypt (encrypted, key){
  // 解密方法
  return crypto.privateDecrypt(key, encrypted);
};

const publicKey = fs.readFileSync(getRealPath('rsa_public_key.pem')).toString('ascii');
const privateKey = fs.readFileSync(getRealPath('rsa_private_key.pem')).toString('ascii');

const text = 'hello';
const crypted = encrypt(text, publicKey);
const decrypted = decrypt(crypted, privateKey);

console.log('加密', crypted.toString());
console.log('解密', decrypted.toString());
```