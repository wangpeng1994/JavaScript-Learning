# npmscript 打造工作流的演示，实际上就是一些命令行操作的集中批处理

# 目前貌似需要手动全局安装相应的命令，还有待debug，因为package.json 中的 check 命令有些问题，不像是 npm 自身的问题

# 个人认为还是 gulp 过程更可控一些，如果对这些 npm 工具在命令行下的用法不熟悉的情况下，还是在 gulpfile.js 里写的更直观，当然 npmscript 和 gulp 未必是非此即彼，很多时候是能够搭配一起使用的，比如 npmscript 也可以写个命令用来执行 gulp build 等等
