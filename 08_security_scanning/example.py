# 在不验证输入的情况下运行命令
import subprocess
cmd = input('Enter a command to run.');
subprocess.Popen(cmd, shell=True, stdin=subprocess.PIPE)