import { observable, action, computed, runInAction } from "mobx";
class Home {
  @observable data;
  constructor() {
    this.data = {
      _id: 23667,
      __v: 0,
      id: 23667,
      name: "神奇女侠",
      score: 0,
      area: "欧美",
      othername: " 神力女超人(台) ",
      year: 2017,
      img: "http://img.idyjy.com/pic/uploadimg/2017-7/23667.jpg",
      isFinish: "true",
      imdb: "tt0451279",
      intro:
        "戴安娜（盖尔·加朵 Gal Gadot 饰）是女王希波吕忒（康妮·尼尔森 Connie Nielsen 饰）的女儿，自幼生活在天堂岛上。巨大的屏障将这座岛屿同外界的纷纷扰扰隔开犹如一个世外桃源，而岛上生活着的亦都是女性。在女武官安提奥普（罗宾·莱特 Robin Wright 饰）的教导之下，戴安娜习得了高强的武艺，而她的体内，似乎隐藏着某种强大的未知力量。一场意外中，一位名为史蒂夫（克里斯·派恩 Chris Pine 饰）的男子来到了岛上，从他口中，戴安娜得知外面的世界正在经历战争的磨难，而造成这一切的罪魁祸首，是战神阿瑞斯（大卫·休里斯 David Thewlis 饰）。为了拯救人类于水火之中，戴安娜依然拿起了长剑与盾牌，发誓要彻底摧毁阿瑞斯的阴谋。影片短评：当时和一个妹子一块看的，好吧虽然我也是妹子，两个人去的有点晚了所以错过了片头，看这个电影纯属想看电影，以至于看到一半我也不知道片名 ，当时看的感觉就是女主好美啊啊啊，男主也帅啊嘤嘤嘤，打斗场面是这部剧的两个高潮，剧情感觉没什么意思，但是画面是真美，随便截个镜头就可以做屏保的那种，看到结尾坐在旁边的妹子感动哭了，我却一点泪点都没有盖特到，这个剧看了半个多月了之所以还记得纯粹是因为当时走的时候花10块钱抓到了3个娃娃嘚瑟了一阵子自从看完《超人大战蝙蝠侠》之后就一直期待，当时最被吸引的有三点：出场BGM莫名的燃，拳拳到肉的狂暴原始美，无死角的外形；当看完正片之后，这才发现，除此之外，你还能找到更多她的优点！首先，本片对女性角色刻画的非常到位，无数个特写慢镜头，皆具美感，丝毫没有所谓的‘性感诱惑’（表示女朋友都忍不住拿出手机拍了不少照片，秒变迷妹）；其次，她的剧情也算得上丰富，不会让你觉得这仅仅是一部靠特效撑起的大片。最后说说缺点吧，总觉得坏人的设定还是不够，让你看完甚至会突然想不起来反派角色，或许是小姐姐太强大了吧，毕竟半神（斜眼笑）。最美不仅仅是女侠本人，更在于镜头，每一个打斗招式都是美的。虽然死侍，狼叔那种真枪实干的R级片也有很棒的暴力美学，但《神女》无疑有了另一种美。我仔细注意了一下，全片应该几乎没有一滴血（血痕除外），但整体看下来又没有很不真实的打斗感觉，足见成功。成功的关键无疑是女性导演。这个被漫威嫌弃的捡来这个机会的导演。女性独特的视觉来拍这部女性主角的另类英雄片，太合适了。另外《神女》的故事其实不太好拿捏，毕竟又是希腊神话，又是神器神人，又是一战二战的，相互之间违和的地方蛮多的，看完这方面问题不大，也是成功之处。最后，有两个地方略有遗憾。第一，竟...",
      meta: {
        updateAt: "2017-09-18T03:29:46.567Z",
        createAt: "2017-09-18T03:29:46.567Z"
      },
      url: [
        [
          {
            num: 0,
            title: "神奇女侠.HD韩版中英双字.mkv",
            url:
              "thunder://QUFlZDJrOi8vfGZpbGV8ob6159OwvNLUsHd3dy5pZHlqeS5jb23PwtTYob/J8cbmxa7PwC5IRLqrsObW0NOiy6vX1i5ta3Z8MTYyNDI5NDE4MHxCNkFBOTA2Qzc3Mjc5RTk3M0I2QjNERjYzMDQ3QTlDRHxoPVJCUzROUkxLVlgzQllXQVRKRlFaU1hHTVRISUQyS0NMfC9aWg==",
            size: "1.51GB",
            ed2k: 0
          }
        ],
        [
          {
            num: 0,
            title:
              "[4.63GB]神奇女侠.Wonder.Woman.2017.1080p.KORSUB.HDRip.x264.AAC2.0-STUTTERSHIT.torren...",
            url:
              "thunder://QUFtYWduZXQ6P3h0PXVybjpidGloOjkzY2NkOGJiMDg5MmEwMzBiZTE4MjQ1YWIxNmJiNzdjNzdkOWU0ZDkmZG49V29uZGVyLldvbWFuLjIwMTcuMTA4MHAuS09SU1VCLkhEUmlwLngyNjQuQUFDMi4wLVNUVVRURVJTSElUJnRyPWh0dHA6Ly90cmFja2VyLnRyYWNrZXJmaXguY29tOjgwL2Fubm91bmNlJnRyPXVkcDovLzkucmFyYmcubWU6MjcxMC9hbm5vdW5jZSZ0cj11ZHA6Ly85LnJhcmJnLnRvOjI3MTAvYW5ub3VuY2VaWg==",
            size: "",
            ed2k: 0
          },
          {
            num: 1,
            title:
              "[3.64GB]神奇女侠.Wonder.Woman.2017.720p.KORSUB.HDRip.x264.AAC2.0-STUTTERSHIT.torrent",
            url:
              "thunder://QUFtYWduZXQ6P3h0PXVybjpidGloOmQwYjhiMzg2NDhhMTE5OWUwMjFiOWE3Mjc1MmQ1YTcyNzI4ZWMzYjMmZG49V29uZGVyLldvbWFuLjIwMTcuNzIwcC5LT1JTVUIuSERSaXAueDI2NC5BQUMyLjAtU1RVVFRFUlNISVQmdHI9aHR0cDovL3RyYWNrZXIudHJhY2tlcmZpeC5jb206ODAvYW5ub3VuY2UmdHI9dWRwOi8vOS5yYXJiZy5tZToyNzEwL2Fubm91bmNlJnRyPXVkcDovLzkucmFyYmcudG86MjcxMC9hbm5vdW5jZVpa",
            size: "",
            ed2k: 0
          },
          {
            num: 2,
            title:
              "[3.76GB]神奇女侠.Wonder.Woman.2017.720p.KORSUB.HDRip.XviD.MP3-STUTTERSHIT.torrent",
            url:
              "thunder://QUFtYWduZXQ6P3h0PXVybjpidGloOmY0Y2QzMGQ4ZmQzZTZlYWE1MTk2YjBlODM4ZjhhZWRjNjQzZTc0YTAmZG49V29uZGVyLldvbWFuLjIwMTcuNzIwcC5LT1JTVUIuSERSaXAuWHZpRC5NUDMtU1RVVFRFUlNISVQmdHI9aHR0cDovL3RyYWNrZXIudHJhY2tlcmZpeC5jb206ODAvYW5ub3VuY2UmdHI9dWRwOi8vOS5yYXJiZy5tZToyNzEwL2Fubm91bmNlJnRyPXVkcDovLzkucmFyYmcudG86MjcxMC9hbm5vdW5jZVpa",
            size: "",
            ed2k: 0
          },
          {
            num: 3,
            title:
              "[5.34GB]神奇女侠.Wonder.Woman.2017.IPTV.KORSUB.1080p.x264.AC3.5.1CH-OHE.mkv.torrent",
            url:
              "thunder://QUFtYWduZXQ6P3h0PXVybjpidGloOjNhM2FmY2QzODk3MjFiZmM4ZmQ0ZTAxYjc2M2ZjNzJhYWExYjM5MjkmZG49V29uZGVyLldvbWFuLjIwMTcuSVBUVi5LT1JTVUIuMTA4MHAueDI2NC5BQzMuNS4xQ0gtT0hFLm1rdiZ0cj11ZHA6Ly90cmFja2VyLmxlZWNoZXJzLXBhcmFkaXNlLm9yZzo2OTY5L2Fubm91bmNlJnRyPXVkcDovL3RyYWNrZXIuY29wcGVyc3VyZmVyLnRrOjY5NjkvYW5ub3VuY2UmdHI9dWRwOi8vdHJhY2tlci5waXJhdGVwYXJ0eS5ncjo2OTY5L2Fubm91bmNlWlo=",
            size: "",
            ed2k: 0
          },
          {
            num: 4,
            title:
              "[3.06GB]神奇女侠.Wonder.Woman.2017.720p..TCRip.xAVC1.mp3-CGI.mkv.torrent",
            url:
              "thunder://QUFtYWduZXQ6P3h0PXVybjpidGloOjI4Yjg5ZGJkMmU0MjhmZDMwZDVmNTBmOGU1MWZmZjU4MTg2NDI3NTkmZG49V29uZGVyLldvbWFuLjIwMTcuNzIwcC4uVENSaXAueEFWQzEubXAzLUNHSS5ta3YmdHI9dWRwOi8vdHJhY2tlci5vcGVuYml0dG9ycmVudC5jb206ODAvYW5ub3VuY2UmdHI9dWRwOi8vdHJhY2tlci5vcGVudHJhY2tyLm9yZzoxMzM3L2Fubm91bmNlWlo=",
            size: "",
            ed2k: 0
          }
        ]
      ],
      director: ["派蒂·杰金斯"],
      actor: [
        "盖尔·加朵",
        "克里斯·派恩",
        "康妮·尼尔森",
        "罗宾·怀特",
        "丹尼·赫斯顿",
        "大卫·休里斯",
        "萨伊德·塔格马奥",
        "艾文·布莱纳"
      ],
      classify: ["动作", "奇幻", "冒险"],
      catalog: ["首页", "电影", "动作片"]
    };
  }

  //获取首页
  async getPageData() {}
}

const home = new Home();
export default home;
