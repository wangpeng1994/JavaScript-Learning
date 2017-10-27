# xiaofeng-weather

> A simple tool to get weather info in the command line.

## Install

```bash
npm install -g xiaofeng-weather
```

## Usage

No parameter:

```bash
weather
```

output(your local weather):

```bash
---------------------------------
合肥 周五 2017-10-27 (实时：14℃ )
11 ~ 22℃
晴, 东北风1级
---------------------------------
```


Have one parameter(this parameter must be Pinyin, not English):

```bash
weather beijing
```

output:

```bash
---------------------------------
北京 周五 2017-10-27 (实时：12℃ )
10 ~ 18℃
雾, 西南风1级
---------------------------------
```