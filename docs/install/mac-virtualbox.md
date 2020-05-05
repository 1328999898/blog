# 虚拟机搭建(MAC)
> python虚拟且独立的python环境

- 安装
```sh
# 安装virtualenv包
$ pip2.7 install virtualenv
Collecting virtualenv
  Using cached https://files.pythonhosted.org/packages/b6/30/96a02b2287098b23b875bc8c2f58071c35d2efe84f747b64d523721dc2b5/virtualenv-16.0.0-py2.py3-none-any.whl
Installing collected packages: virtualenv
Successfully installed virtualenv-16.0.0
You are using pip version 9.0.1, however version 10.0.1 is available.
You should consider upgrading via the 'pip install --upgrade pip' command.
# 创建虚拟环境
$ virtualenv ev
New python executable in /Users/.../infocinside/ev/bin/python2.7
Also creating executable in /Users/.../infocinside/ev/bin/python
Installing setuptools, pip, wheel...done.
# 激活虚拟环境
$ source ev/bin/activate
# 查询虚拟环境中的安装包
(ev) $ pip list
```

- 遇到过的问题
```sh
vironment/bin/python - setuptools pip wheel failed with error code 1
原因：python 版本的问题
```
