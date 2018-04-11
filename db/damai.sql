SET NAMES UTF8;
CREATE DATABASE damai CHARSET=UTF8;
USE damai;
CREATE TABLE dm_product(
  pid INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(128) NOT NULL,
  detail VARCHAR(128) DEFAULT NULL,
  showTime VARCHAR(128) NOT NUll,
  city VARCHAR(128) NOT NULL,
  venues VARCHAR(128) NOT NULL,
  classify VARCHAR(128) NOT NULL,
  price VARCHAR(128) DEFAULT '100',
  more1 VARCHAR(128) DEFAULT NULL,
  more2 VARCHAR(128) DEFAULT NULL
);
INSERT INTO dm_product VALUES(null,'《市场街最后一站》','向前奔驰不停歇，只为相伴你一路成长','2018.06.23','北京','京演民族宫大剧院','kids亲子','80',null,null);
INSERT INTO dm_product VALUES(null,'开心麻花合家欢音乐剧《三只小羊》第16轮','一则挪威家喻户晓的经典寓言故事','2018.03.31','北京','A33剧场','kids亲子','100',null,null);
INSERT INTO dm_product VALUES(null,'快乐农场大冒险','img/kids/detail/kids03_detail.jpg','2018.3','全国','全国','kids亲子','88',null,null);
INSERT INTO dm_product VALUES(null,'亚历山大与汪星人','乌克兰努尔马戏剧院萌宠滑稽幽默剧 《亚历山大与汪星人》','2018.2.2','唐山','唐山大剧院大剧场','kids亲子','85',null,null);
INSERT INTO dm_product VALUES(null,'《猫鼠大战闹新春》','儿童剧《猫鼠大战闹新春》','2018.0.03','合肥','合肥大剧院多功能厅','kids亲子','90',null,null);
INSERT INTO dm_product VALUES(null,'《圆梦恐龙岛》','大型原创冒险式儿童舞台剧《圆梦恐龙岛》','2018.02.04 19:30','唐山','唐山大剧院大剧场','kids亲子','98',null,null);
INSERT INTO dm_product VALUES(null,'《绿野仙踪》','大型奇幻互动式儿童舞台剧《绿野仙踪》','2018.02.05','无锡','宜兴保利大剧院','kids亲子','128',null,null);
INSERT INTO dm_product VALUES(null,'《莫扎特很忙》','交响音乐儿童剧《莫扎特很忙》','2018.02.07','上海','黄浦剧场-中剧场','kids亲子','65',null,null);
INSERT INTO dm_product VALUES(null,'《看我72变》','辰星剧社原创近景即兴魔幻儿童剧《看我72变》','2017.12.30-02.11','北京','正华星博剧场','kids亲子','100',null,null);
INSERT INTO dm_product VALUES(null,'《灰姑娘》','彩色熊猫·祼眼3D全息儿童剧《灰姑娘》','2018.01.05-02.24','成都','彩色熊猫剧场','kids亲子','88',null,null);
INSERT INTO dm_product VALUES(null,'《哪吒》','中国杂技团新编大型杂技神话剧《哪吒》','2017.12.02-2018.02.11','北京','中国儿童中心剧院','kids亲子','60',null,null);
INSERT INTO dm_product VALUES(null,'《三只小猪》','彩色熊猫·祼眼3D全息儿童剧《三只小猪》','2017.12.03—2018.02.25','成都','彩色熊猫剧场','kids亲子','75',null,null);
INSERT INTO dm_product VALUES(null,'《三只小猪》','彩色熊猫·祼眼3D全息儿童剧《三只小猪》','2017.12.03—2018.02.25','成都','彩色熊猫剧场','kids亲子','99',null,null);
INSERT INTO dm_product VALUES(null,'《格尔达的奇幻冒险》','全息版 冰雪奇缘—《格尔达的奇幻冒险》','2018.02.01-2018.02.15','广州','正佳演艺剧院','kids亲子','100',null,null);
INSERT INTO dm_product VALUES(null,'久石让宫崎骏经典视听音乐会','天空之城—久石让宫崎骏经典视听音乐会 ','2018.02-14-2018.02-15','上海','上海大剧院-别克中剧场','kids亲子','100',null,null);
INSERT INTO dm_product VALUES(null,'《亚历山大与汪星人》','华艺星空·乌克兰萌宠滑稽幽默剧《亚历山大与汪星人》 ','2018.02.16-02.18','北京','北京剧院','kids亲子','95',null,null);
INSERT INTO dm_product VALUES(null,'《天鹅湖》','华艺星空.乌克兰基辅儿童芭蕾舞团《天鹅湖》','2018.02.10-02.18','上海','艺海剧院','kids亲子','88',null,null);
INSERT INTO dm_product VALUES(null,'2018新春版朝阳公园大马戏','2018新春版朝阳公园大马戏','2018.02.16-02.21','北京','朝阳公园西4门08广场','kids亲子','60',null,null);
INSERT INTO dm_product VALUES(null,'《森林趣事》','2皮影剧—《森林趣事》','2018.02.19-03.03','上海','上海仙乐斯演艺厅','kids亲子','65',null,null);
INSERT INTO dm_product VALUES(null,'《狮子王》','儿童剧《狮子王》','2018.02.20','舟山','舟山普陀大剧院','kids亲子','70',null,null);
INSERT INTO dm_product VALUES(null,'托马斯嘉年华','托马斯&朋友-嘉年华！来了！','2018.02.21','无锡','无锡大剧院 歌剧厅','kids亲子','99',null,null);
INSERT INTO dm_product VALUES(null,'海底小纵队2—火山大冒险','英国BBC大型互动式冒险儿童剧 海底小纵队—火山大冒险（2018）','2018.02.22','上海','艺海剧院','kids亲子','100',null,null);
INSERT INTO dm_product VALUES(null,'大头兵','大型奇幻互动式儿童剧《大头兵》','2018.02.16—03.04','太原','山西龙城实验剧场','kids亲子','98',null,null);
INSERT INTO dm_product VALUES(null,'孙悟空决战黄风岭','儿童剧《孙悟空决战黄风岭》','2018.02.24','上海','小伙伴剧场','kids亲子','100',null,null);
INSERT INTO dm_product VALUES(null,'《新三打白骨精之我是大英雄》','大型戏曲动漫舞台剧《新三打白骨精之我是大英雄》（2月）','2018.02.10-02.25','北京','中国木偶剧院大剧场','kids亲子','98',null,null);


CREATE TABLE dm_product_pic(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  pid INT NOT NULL,
  sm VARCHAR(128) DEFAULT NULL,
  md VARCHAR(128) NOT NULL,
  lg VARCHAR(128) DEFAULT NULL,
  FOREIGN KEY(pid) REFERENCES dm_product(pid)
);
INSERT INTO dm_product_pic VALUES(null,1,'','../img/kids/md/140348_n.jpg','../img/kids/lg/kids_01.jpg');
INSERT INTO dm_product_pic VALUES(null,2,'','../img/kids/md/142704_n.jpg','../img/kids/lg/kids_02.jpg');
INSERT INTO dm_product_pic VALUES(null,3,'','','../img/kids/lg/kids_03.jpg');
INSERT INTO dm_product_pic VALUES(null,4,'../img/kids/sm/2121158981.jpg','../img/kids/md/139637_n.jpg','');
INSERT INTO dm_product_pic VALUES(null,5,'../img/kids/sm/2121310299.jpg','../img/kids/md/140507_n.jpg','');
INSERT INTO dm_product_pic VALUES(null,6,'../img/kids/sm/2121417567.jpg','../img/kids/md/139635_n.jpg','');
INSERT INTO dm_product_pic VALUES(null,7,'../img/kids/sm/2121826934.jpg','../img/kids/md/137738_n.jpg','');
INSERT INTO dm_product_pic VALUES(null,8,'../img/kids/sm/2122341231.jpg','../img/kids/md/141491_n.jpg','');
INSERT INTO dm_product_pic VALUES(null,9,'../img/kids/sm/21225288.jpg','../img/kids/md/138824_n.jpg','');
INSERT INTO dm_product_pic VALUES(null,10,'../img/kids/sm/2123531582.jpg','../img/kids/md/127932_n.jpg','');
INSERT INTO dm_product_pic VALUES(null,11,'../img/kids/sm/2123640663.jpg','../img/kids/md/137430_n.jpg','');
INSERT INTO dm_product_pic VALUES(null,12,'../img/kids/sm/2123824397.jpg','../img/kids/md/126488_n.jpg','');
INSERT INTO dm_product_pic VALUES(null,13,'../img/kids/sm/2123937698.jpg','../img/kids/md/141737_n.jpg','');
INSERT INTO dm_product_pic VALUES(null,14,'../img/kids/sm/212403713.jpg','../img/kids/md/129699_n.jpg','');
INSERT INTO dm_product_pic VALUES(null,15,'../img/kids/sm/212423627.jpg','../img/kids/md/140729_n.jpg','');
INSERT INTO dm_product_pic VALUES(null,16,'../img/kids/sm/2124322677.jpg','../img/kids/md/139285_n.jpg','');
INSERT INTO dm_product_pic VALUES(null,17,'../img/kids/sm/2124417212.jpg','../img/kids/md/139142_n.jpg','');
INSERT INTO dm_product_pic VALUES(null,18,'../img/kids/sm/212456487.jpg','../img/kids/md/140082_n.jpg','');
INSERT INTO dm_product_pic VALUES(null,19,'../img/kids/sm/2124611730.jpg','../img/kids/md/140670_n.jpg','');
INSERT INTO dm_product_pic VALUES(null,20,'../img/kids/sm/212471598.jpg','../img/kids/md/136925_n.jpg','');
INSERT INTO dm_product_pic VALUES(null,21,'../img/kids/sm/212481263.jpg','../img/kids/md/136863_n.jpg','');
INSERT INTO dm_product_pic VALUES(null,22,'../img/kids/sm/212494181.jpg','../img/kids/md/141511_n.jpg','');
INSERT INTO dm_product_pic VALUES(null,23,'../img/kids/sm/2125059362.jpg','../img/kids/md/141396_n.jpg','');

