# aws s3 命令
- [官方文档](https://docs.aws.amazon.com/zh_cn/cli/latest/userguide/using-s3-commands.html)

## 基本命令
```sh
# 创建存储桶
$ aws s3 mb s3://bucket-name
# 删除空的存储桶
$ aws s3 rb s3://bucket-name
# 删除非空的存储桶
$ aws s3 rb s3://bucket-name --force
# 列出存储桶
$ aws s3 ls
# 列出存储桶中的所有对象和文件夹
$ aws s3 ls s3://bucket-name
# 列出存储桶path中的对象
$ aws s3 ls s3://bucket-name/path/
# 将一个对象复制到存储桶中
$ aws s3 cp file.txt s3://my-bucket/
# 将存储桶中的对象下载到本地
$ aws s3 cp s3://my-bucket/file.txt file.txt
# --recursive 递归删除path路径下的所有文件
$ aws s3 rm s3://bucket-name/path/ --recursive
# sync 仅在源和目标之间复制缺失或过时的文件或对象。不过，您可以提供 --delete 选项来从目标中删除源中不存在的文件或对象。使用 --exclude 和 --include 选项可以指定规则来筛选要在同步操作期间复制的文件或对象
$ aws s3 sync . s3://my-bucket/path --delete
# sync 命令还可以接受 --acl 选项，使用该选项可以设置对复制到 Amazon S3 中的文件的访问权限。该选项接受 private、public-read 和 public-read-write 值。
$ aws s3 sync . s3://my-bucket/path --acl public-read
```
