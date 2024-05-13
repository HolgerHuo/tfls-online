{
    "contributors": [],
    "date": "2024-05-15T19:00:00+08:00",
    "isCJKLanguage": true,
    "params": {
        "author": "TFLS Online"
    },
    "slug": "about",
    "title": "关于TFLS Online",
    "toc": true
}

{{< callout context="caution" title="敬告" icon="outline/alert-triangle" >}}
本站点**并非**[天津外国语大学附属外国语学校的官网](http://tfls.tj.edu.cn)，也与天津外国语大学附属外国语学校**无任何关系**。

本项目尽量提供完全准确的来自[http://tfls.tj.edu.cn](http://tfls.tj.edu.cn)的全部内容，但受限于爬取难度及原内容的瑕疵，可能会存在不准确的情况，本站点对此**概不负责**
{{< /callout >}}

## 简介

### 背景信息

在HTML5早已成为实质上的Web开发标准、移动端成为主流互联网接入设备之际，[小外的官网](http://tfls.tj.edu.cn)还使用着传统的Table布局、无移动端优化的官网设计；不仅内容上缺乏维护，其在线时长经常低于996的工作时长，甚至还会在某些时期长时掉线。

作为小外学子，我们希望能够为小外重构一个现代化的官网，以供小外校友、老师，想要了解这一学校的观众乃至国际友人方便地获取到有关小外的信息，以及能够更好地连接来自世界各地的小外同学，让大家有一个沟通交流的平台，于是，[TFLS Online](https://tfls.online)这一项目诞生了。

### 项目发展

我们选择了`.online`域名以期能够提供一个24x7在线的小外官网。在项目的初期阶段，我们使用了[HTML5Up](https://html5up.net/)设计的模板创设了一个[过渡页面](https://web.archive.org/web/20230926120213/https://tfls.online/)，提供了小外的基本信息以及几篇文章。

![原TFLS Online项目主页的截图](https://cdn.tfls.online/tfls-online/Screenshot_20240515_200930.png)

很荣幸的是，得益于HTML5Up模板高效的SEO及性能，TFLS Online迅速在各大全球搜索引擎排名在了较高位置，仅次于官方网站。

在项目的过渡阶段，我们又接连开发出~~云上小外直播(已终止)、~~[TFLS Wiki](https://wiki.tfls.online/TFLSWiki:%E5%85%B3%E4%BA%8E)等项目以供大家使用。

2023年，由于TFLS Online项目成员悉数从小外毕业，开启了大学生活，TFLS Online的大多项目都被搁置在了过渡阶段。直至近期，TFLS Online团队发现尽管在原主页内容几乎没有，项目没有任何实际发展的情况下，每月依旧能收获几百次来自Google的有机搜索流量及200+有效独立访客。项目作者对此深感愧疚，因为这些访客想要更多的了解小外，获得的确实一份并不完整的网页。

于是，TFLS Online团队开启了网站的重构计划。我们希望使用现代化的前端技术，提供一个移动端优先，带有PWA、黑暗模式支持，以及完全同步原先官网上的内容，同时保持24x7在线的新主页。

### 现状

目前，本项目会通过[TFLS Scraper](https://github.com/HolgerHuo/tfls-scraper)手动爬取官网的大部分文章及图片，镜像至基于[Hugo框架](https://gohugo.io)的全新[TFLS Online主页](https://github.com/holgerhuo/tfls-online)。站点通过[Vercel](https://vercel.com)被部署至Google Cloud边缘节点，图片经过Webp透明转换加速提供访问。

项目主要同步了有关[TFLS简介](https://tfls.online/about-tfls/school/summary/)、[原CMS上的文章](https://tfls.online/posts)以及一些其他内容。站点仍在建设中，如有更好的建议，欢迎加入项目共同建设 TFLS Online。

![新 TFLS Online 官网的截图](https://cdn.tfls.online/tfls-online/Screenshot_20240515_202114.png)

## 加入项目

TFLS Online项目团队仅有几人已进行基础的技术开发及服务器维护，且现团队成员均已离开小外，无法持续结合实际内容进行开发与修正。我们期望有了解前端开发、Wiki建设的同道中人一起为TFLS Online项目做出贡献。我们目前有以下工作重心:

### TFLS Online

- [ ] 完善TFLS Scraper以支持微信公众号文章爬取
- [ ] 维护官网主题，优化页面展示
- [ ] 自动镜像并同步官网

### TFLS Wiki

- [ ] 主题模板开发
- [ ] 初始页面设计
- [ ] wiki巡回管理员

如果你对以上任务感兴趣，欢迎发送邮件至 [contact+join.us@tfls.online](mailto:contact+join.us@tfls.online) 或直接在以上GitHub仓库中进行PR

## 结语

目前大部分党政机关及学校主页的开发均是在互联网早期阶段，至今再无维护。然而官网是一个品牌在互联网上的第一门面，也是其他人能够了解其的唯一途径。希望小外能够利用好这一门面，更好的发扬学校的文化，连接小外的人脉，创建出更优质的学校品牌！