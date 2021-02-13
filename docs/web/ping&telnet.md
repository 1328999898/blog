# ping和telnet

## ping
> 用于测试与目标机器的连通性
```sh
# 格式
ping IP地址或域名
# 注：域名在ping的过程中会解析出域名对应的IP地址
$ ping www.baidu.com
PING www.a.shifen.com (110.242.68.3): 56 data bytes
64 bytes from 110.242.68.3: icmp_seq=0 ttl=48 time=13.854 ms
64 bytes from 110.242.68.3: icmp_seq=1 ttl=48 time=17.424 ms
64 bytes from 110.242.68.3: icmp_seq=2 ttl=48 time=17.969 ms
$ ping 110.242.68.3
PING 110.242.68.3 (110.242.68.3): 56 data bytes
64 bytes from 110.242.68.3: icmp_seq=0 ttl=48 time=14.050 ms
64 bytes from 110.242.68.3: icmp_seq=1 ttl=48 time=14.239 ms
```

## telnet
> 用于测试目标机器的的端口号是否开放
```sh
# telnet域名的过程中，会解析出对应的IP地址
$ telnet www.baidu.com 80
Trying 110.242.68.4...
Connected to www.a.shifen.com.
Escape character is '^]'.
$ telnet 110.242.68.4 80
Trying 110.242.68.4...
Connected to 110.242.68.4.
Escape character is '^]'.
```
## nslookup
> 域名解析查询
```sh
$ nslookup www.baidu.com
Server:		10.61.150.212
Address:	10.61.150.212#53

Non-authoritative answer:
www.baidu.com	canonical name = www.a.shifen.com.
Name:	www.a.shifen.com
Address: 110.242.68.3
Name:	www.a.shifen.com
Address: 110.242.68.4
```
## dig
> 域名解析查询
```sh
$ dig www.baidu.com
; <<>> DiG 9.10.6 <<>> www.baidu.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 22284
;; flags: qr rd ra; QUERY: 1, ANSWER: 3, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4000
;; QUESTION SECTION:
;www.baidu.com.			IN	A

;; ANSWER SECTION:
www.baidu.com.		391	IN	CNAME	www.a.shifen.com.
www.a.shifen.com.	1	IN	A	220.181.38.150
www.a.shifen.com.	1	IN	A	220.181.38.149

;; Query time: 3 msec
;; SERVER: 10.61.150.212#53(10.61.150.212)
;; WHEN: Tue Dec 08 16:09:39 CST 2020
;; MSG SIZE  rcvd: 101
```