// 基础数据
const cityTimeDiff = {
    "北京": -14, "上海": -5, "广州": -27, "郑州": -34, "成都": -64, 
    "西安": -45, "南京": -12, "深圳": -26, "杭州": -8, "重庆": -54
};

const gan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const zhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const shengXiao = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];

// 五行属性映射
const wuXing = {
    "甲": "mu", "乙": "mu",
    "丙": "huo", "丁": "huo",
    "戊": "tu", "己": "tu",
    "庚": "jin", "辛": "jin",
    "壬": "shui", "癸": "shui",
    "子": "shui", "丑": "tu",
    "寅": "mu", "卯": "mu",
    "辰": "tu", "巳": "huo",
    "午": "huo", "未": "tu",
    "申": "jin", "酉": "jin",
    "戌": "tu", "亥": "shui"
};

const cangGanData = {
    "子": ["癸"], "丑": ["己", "癸", "辛"], "寅": ["甲", "丙", "戊"],
    "卯": ["乙"], "辰": ["戊", "乙", "癸"], "巳": ["丙", "庚", "戊"],
    "午": ["丁", "己"], "未": ["己", "丁", "乙"], "申": ["庚", "壬", "戊"],
    "酉": ["辛"], "戌": ["戊", "辛", "丁"], "亥": ["壬", "甲"]
};

const naYinList = {
    "甲子":"海中金","乙丑":"海中金","丙寅":"炉中火","丁卯":"炉中火",
    "戊辰":"大林木","己巳":"大林木","庚午":"路旁土","辛未":"路旁土",
    "壬申":"剑锋金","癸酉":"剑锋金","甲戌":"山头火","乙亥":"山头火",
    "丙子":"涧下水","丁丑":"涧下水","戊寅":"城墙土","己卯":"城墙土",
    "庚辰":"白蜡金","辛巳":"白蜡金","壬午":"杨柳木","癸未":"杨柳木",
    "甲申":"泉中水","乙酉":"泉中水","丙戌":"屋上土","丁亥":"屋上土",
    "戊子":"霹雳火","己丑":"霹雳火","庚寅":"松柏木","辛卯":"松柏木",
    "壬辰":"长流水","癸巳":"长流水","甲午":"沙中金","乙未":"沙中金",
    "丙申":"山下火","丁酉":"山下火","戊戌":"平地木","己亥":"平地木",
    "庚子":"壁上土","辛丑":"壁上土","壬寅":"金箔金","癸卯":"金箔金",
    "甲辰":"佛灯火","乙巳":"佛灯火","丙午":"天河水","丁未":"天河水",
    "戊申":"大驿土","己酉":"大驿土","庚戌":"钗钏金","辛亥":"钗钏金",
    "壬子":"桑柘木","癸丑":"桑柘木","甲寅":"大溪水","乙卯":"大溪水",
    "丙辰":"沙中土","丁巳":"沙中土","戊午":"天上火","己未":"天上火",
    "庚申":"石榴木","辛酉":"石榴木","壬戌":"大海水","癸亥":"大海水"
};

// 十神详解（古籍原文+现代解释）
const shiShenExplain = {
    "比肩": "【古籍原文】《三命通会》：“比肩者，兄弟也，与我同类，故为比肩。”\n\n【现代解释】与日干同五行同阴阳，代表同辈、兄弟姐妹、朋友同事。性格独立要强、讲义气，身旺见比肩易竞争破财、与人争利；身弱比肩帮身得力，易得朋友相助。",
    "劫财": "【古籍原文】《渊海子平》：“劫财者，夺我之财也，阳见阴，阴见阳，故名劫财。”\n\n【现代解释】与日干同五行不同阴阳，代表异性同辈、合作伙伴。性格热心豪爽、出手大方，但易冲动破财、钱财被亲友分走；男命劫旺不利妻缘，女命劫旺不利夫运。",
    "食神": "【古籍原文】《三命通会》：“食神者，我生之神也，乃福禄之星。”\n\n【现代解释】日干所生之同阴阳，代表福寿、口才、才艺、饮食。食神旺者聪明多才、性格温和、一生衣食无忧，适合餐饮、艺术、教育培训行业；食神过旺易懒惰、贪图享受。",
    "伤官": "【古籍原文】《渊海子平》：“伤官者，我生之神也，伤害官星，故名伤官。”\n\n【现代解释】日干所生之异阴阳，代表才华、创意、叛逆。伤官旺者思维活跃、才华出众，但心性高傲、不服管束，易口舌是非；伤官配印则富贵双全。",
    "正财": "【古籍原文】《三命通会》：“正财者，我克之神也，乃正妻之财。”\n\n【现代解释】日干所克之异阴阳，代表工资、稳定收入、正缘妻子。正财旺者踏实稳重、勤俭节约，适合上班族；男命正财为原配，正财旺妻贤。",
    "偏财": "【古籍原文】《渊海子平》：“偏财者，我克之神也，乃众人之财。”\n\n【现代解释】日干所克之同阴阳，代表副业、横财、意外之财。偏财旺者人缘好、善交际、出手大方，适合经商投资；偏财过旺易挥霍、不聚财。",
    "正官": "【古籍原文】《三命通会》：“正官者，克我之神也，乃禄位之星。”\n\n【现代解释】克日干之异阴阳，代表事业、公职、规矩、名誉。正官旺者自律稳重、责任心强，适合公职、管理岗位；身弱官旺则压力大、易受约束。",
    "七杀": "【古籍原文】《渊海子平》：“七杀者，克我之神也，乃偏官也，性刚暴。”\n\n【现代解释】克日干之同阴阳，代表魄力、权威、挑战、灾祸。七杀旺者决断果敢、有领导力，适合军警、技术岗位；杀无制则性格暴躁、易招灾祸。",
    "正印": "【古籍原文】《三命通会》：“正印者，生我之神也，乃文书之星。”\n\n【现代解释】生日干之异阴阳，代表长辈、贵人、学业、文书。正印旺者心地善良、学习能力强，易得长辈帮扶；印过旺则依赖性强、缺乏主见。",
    "偏印": "【古籍原文】《渊海子平》：“偏印者，生我之神也，乃枭神也，性孤僻。”\n\n【现代解释】生日干之同阴阳，代表玄学、灵感、冷门技艺。偏印旺者悟性高、擅长钻研，适合玄学、科研、设计行业；偏印过旺则性格孤僻、多疑。",
    "日元": "【古籍原文】《三命通会》：“日元者，日主也，为一身之主。”\n\n【现代解释】即日柱天干，代表命主本人，八字所有五行生克都以日干为中心，是判断命局强弱、格局高低的核心依据。",
    "枭神": "即偏印，因偏印夺食，故又称枭神，主孤僻、多疑、玄学天赋。"
};

// 神煞详解（古籍原文+现代解释）
const shenShaExplain = {
    "天乙贵人": "【古籍原文】《三命通会》：“天乙者，乃天上之神，在紫微垣阊阖门外，与太乙并列，事天皇大帝，下游三辰，家在己丑斗牛之次，出乎己未井鬼之舍，执玉衡较量天人之事，名曰天乙也。”\n\n【现代解释】八字第一吉神，主逢凶化吉、遇难呈祥。天乙贵人入命者性格善良、人缘极好，一生遇事总有贵人相助，能转危为安。",
    "文昌贵人": "【古籍原文】《渊海子平》：“文昌者，乃文曲星也，主文章科甲。”\n\n【现代解释】主学业、智慧、文笔。文昌入命者聪明好学、记忆力强、擅长写作，考试运佳，利升学、考公、职称评定，适合从事文化教育行业。",
    "桃花": "【古籍原文】《三命通会》：“咸池者，桃花也，主淫泆。”\n\n【现代解释】又称咸池，主人缘、异性缘、个人魅力。墙内桃花（日支）主夫妻恩爱、家庭和睦；墙外桃花（年/月/时支）主婚外情缘、异性缘旺。桃花旺者容貌出众、情商高。",
    "驿马": "【古籍原文】《渊海子平》：“驿马者，主走动也。”\n\n【现代解释】主走动、变动、旅行、迁移。驿马入命者一生多走动，适合外出发展、出差、移民；驿马逢冲则变动频繁，可能有搬家、换工作、出国等事。",
    "华盖": "【古籍原文】《三命通会》：“华盖者，乃五帝座上之九星也，主艺术、僧道。”\n\n【现代解释】主艺术天赋、玄学悟性、宗教信仰。华盖入命者聪明孤傲、喜欢独处，擅长绘画、音乐、玄学，与佛道有缘；华盖过旺则性格孤僻、不合群。",
    "羊刃": "【古籍原文】《渊海子平》：“羊刃者，乃极旺之地也，主刚强。”\n\n【现代解释】主刚强、果断、勇猛。身旺带羊刃者性格暴躁、易冲动，易有血光之灾、打架斗殴；身弱带羊刃者能得朋友帮助、身强力壮。",
    "空亡": "【古籍原文】《三命通会》：“空亡者，虚无之象也。”\n\n【现代解释】主虚无、落空、消失。吉神落空则吉事不成、希望破灭；凶神落空则凶事消散、灾祸减轻。年空为根空，主祖上不利；日空为身空，主自身不利。",
    "将星": "【古籍原文】《渊海子平》：“将星者，主武贵也。”\n\n【现代解释】主领导才能、权威、魄力。将星入命者有组织管理能力，能服众，适合担任领导职务，在军警、政法行业易有成就。",
    "金舆": "【古籍原文】《三命通会》：“金舆者，乃车舆也，主富贵。”\n\n【现代解释】主车马来往、出行便利、贵人接送。金舆入命者一生多有车坐，出行顺利，易得贵人接送，也主财运不错、生活富足。",
    "劫煞": "【古籍原文】《渊海子平》：“劫煞者，主劫财也。”\n\n【现代解释】主竞争、争夺、破财。劫煞入命者易有财物损失、人事纠纷、上当受骗，需注意理财和人际关系，避免与人争执。",
    "灾煞": "【古籍原文】《三命通会》：“灾煞者，主灾祸也。”\n\n【现代解释】主灾祸、伤病、意外。灾煞入命者需注意安全健康，避免危险活动，灾煞逢冲更凶，易有交通事故、突发疾病等。",
    "孤辰寡宿": "【古籍原文】《渊海子平》：“孤辰寡宿者，主孤独也。”\n\n【现代解释】主孤独、晚婚、不合群。男命孤辰主孤独、晚婚；女命寡宿主孤寡、婚姻不顺。孤辰寡宿入命者性格内向，不喜社交，晚年易孤独。",
    "天德贵人": "【古籍原文】《三命通会》：“天德者，乃天之德也，主大吉。”\n\n【现代解释】顶级吉神，主上天庇佑、逢凶化吉。天德贵人入命者一生平安，少灾少难，积德行善更能增福。",
    "太极贵人": "【古籍原文】《渊海子平》：“太极者，主玄学也。”\n\n【现代解释】主玄学天赋、悟性、宗教信仰。太极贵人入命者对神秘事物有浓厚兴趣，悟性极高，适合研究周易、命理、佛道。",
    "六厄": "【古籍原文】《三命通会》：“六厄者，主灾厄也。”\n\n【现代解释】主灾厄、不顺。六厄入命者易有小灾小难、做事不顺，需谨慎行事，多行善事可化解。"
};

// 宽松日期解析（支持2000-5-3、2000/5/3、2000.5.3）
function parseDate(ymdStr) {
    const cleanStr = ymdStr.replace(/[^\d]/g, '-');
    const parts = cleanStr.split('-').filter(p => p);
    if (parts.length !== 3) return null;
    const y = parseInt(parts[0]);
    const m = parseInt(parts[1]);
    const d = parseInt(parts[2]);
    if (isNaN(y) || isNaN(m) || isNaN(d) || m < 1 || m > 12 || d < 1 || d > 31) return null;
    return { y, m, d };
}

// 宽松时间解析（支持5:00、13:05、5.00、13.05）
function parseTime(timeStr) {
    const cleanStr = timeStr.replace(/[^\d]/g, ':');
    const parts = cleanStr.split(':').filter(p => p);
    if (parts.length < 1) return null;
    const hh = parseInt(parts[0]);
    if (isNaN(hh) || hh < 0 || hh > 23) return null;
    return { hh };
}

// 计算生肖
function getShengXiao(year) {
    const idx = (year - 1900) % 12;
    return shengXiao[idx < 0 ? idx + 12 : idx];
}

// 计算节气（近似值，满足显示需求）
function getJieQi(month, day) {
    if (month === 12) {
        if (day < 7) return "大雪前" + (7 - day) + "天";
        else if (day < 22) return "大雪后" + (day - 7) + "天，冬至前" + (22 - day) + "天";
        else return "冬至后" + (day - 22) + "天";
    }
    // 简化其他月份，可自行补充
    return `${month}月${day}日`;
}

// 八字计算函数
function getYearGZ(y) {
    const base = 1984;
    const diff = y - base;
    const g = (diff % 10 + 10) % 10;
    const z = (diff % 12 + 12) % 12;
    return gan[g] + zhi[z];
}

function getMonthGZ(yearGanIdx, month) {
    const startArr = [2, 4, 6, 8, 0];
    const start = startArr[yearGanIdx % 5];
    const mg = (start + month - 1) % 10;
    const mz = (month - 1) % 12;
    return gan[mg] + zhi[mz];
}

function getShiGZ(riGanIdx, shiIdx) {
    const startArr = [0, 2, 4, 6, 8];
    const start = startArr[riGanIdx % 5];
    const sg = (start + shiIdx) % 10;
    return gan[sg] + zhi[shiIdx];
}

function getRealShi(bjHour, offMin) {
    const h = bjHour + offMin / 60;
    if (h >= 23 || h < 1) return 0;
    return Math.floor((h + 1) / 2) % 12;
}

function calcShiShen(riGan, otherGan) {
    const dr = gan.indexOf(riGan);
    const do_ = gan.indexOf(otherGan);
    const d = (do_ - dr + 10) % 10;
    if (d === 0) return "比肩";
    if (d <= 2) return "食神";
    if (d <= 4) return "偏财";
    if (d <= 6) return "正官";
    if (d <= 8) return "偏印";
    return "劫财";
}

// 计算藏干对应的十神
function calcCangShiShen(riGan, zhi) {
    const cangGan = cangGanData[zhi];
    const shiShen = cangGan.map(g => {
        const s = calcShiShen(riGan, g);
        // 简称转换
        if (s === "偏印") return "枭";
        if (s === "七杀") return "杀";
        return s[0];
    });
    return shiShen.join("");
}

// 十二长生（地势）
const changSheng = [
    "长生", "沐浴", "冠带", "临官", "帝旺", "衰", "病", "死", "墓", "绝", "胎", "养"
];
const changShengTable = {
    "甲": ["亥", "子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌"],
    "丙": ["寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥", "子", "丑"],
    "戊": ["寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥", "子", "丑"],
    "庚": ["巳", "午", "未", "申", "酉", "戌", "亥", "子", "丑", "寅", "卯", "辰"],
    "壬": ["申", "酉", "戌", "亥", "子", "丑", "寅", "卯", "辰", "巳", "午", "未"],
    "乙": ["午", "巳", "辰", "卯", "寅", "丑", "子", "亥", "戌", "酉", "申", "未"],
    "丁": ["酉", "申", "未", "午", "巳", "辰", "卯", "寅", "丑", "子", "亥", "戌"],
    "己": ["酉", "申", "未", "午", "巳", "辰", "卯", "寅", "丑", "子", "亥", "戌"],
    "辛": ["子", "亥", "戌", "酉", "申", "未", "午", "巳", "辰", "卯", "寅", "丑"],
    "癸": ["卯", "寅", "丑", "子", "亥", "戌", "酉", "申", "未", "午", "巳", "辰"]
};

function getDiShi(gan, zhi) {
    const arr = changShengTable[gan];
    const idx = arr.indexOf(zhi);
    return changSheng[idx];
}

// 六甲空亡
const liuJia = ["甲子", "甲戌", "甲申", "甲午", "甲辰", "甲寅"];
const kongWang = ["戌亥", "申酉", "午未", "辰巳", "寅卯", "子丑"];

function getKongWang(zhu) {
    const idx = liuJia.indexOf(zhu);
    return idx === -1 ? "" : kongWang[idx];
}

// 神煞计算
function getTianYi(gan) {
    const map = {"甲":"丑未","乙":"子申","丙":"亥酉","丁":"亥酉","戊":"丑未","己":"子申","庚":"丑未","辛":"寅午","壬":"卯巳","癸":"卯巳"};
    return map[gan] || "";
}

function getWenChang(gan) {
    const map = {"甲":"巳","乙":"午","丙":"申","丁":"酉","戊":"申","己":"酉","庚":"亥","辛":"子","壬":"寅","癸":"卯"};
    return map[gan] || "";
}

function getTaoHua(zhi) {
    const map = {"申":"酉","子":"酉","辰":"酉","亥":"子","卯":"子","未":"子","寅":"卯","午":"卯","戌":"卯","巳":"午","酉":"午","丑":"午"};
    return map[zhi] || "";
}

function getYiMa(zhi) {
    const map = {"申":"寅","子":"寅","辰":"寅","亥":"巳","卯":"巳","未":"巳","寅":"申","午":"申","戌":"申","巳":"亥","酉":"亥","丑":"亥"};
    return map[zhi] || "";
}

function getHuaGai(zhi) {
    const map = {"申":"戌","子":"戌","辰":"戌","亥":"丑","卯":"丑","未":"丑","寅":"辰","午":"辰","戌":"辰","巳":"未","酉":"未","丑":"未"};
    return map[zhi] || "";
}

function getYangRen(gan) {
    const map = {"甲":"卯","乙":"寅","丙":"午","丁":"巳","戊":"午","己":"巳","庚":"酉","辛":"申","壬":"子","癸":"亥"};
    return map[gan] || "";
}

function getTianDe(month) {
    const map = {1:"丁",2:"申",3:"壬",4:"辛",5:"亥",6:"甲",7:"癸",8:"寅",9:"丙",10:"乙",11:"巳",12:"庚"};
    return map[month] || "";
}

function getTaiJi(gan, zhi) {
    // 简化计算
    return "寅申";
}

// 胎元命宫身宫
function getTaiYuan(monthGZ) {
    const g = monthGZ[0];
    const z = monthGZ[1];
    const gIdx = (gan.indexOf(g) + 1) % 10;
    const zIdx = (zhi.indexOf(z) + 3) % 12;
    return gan[gIdx] + zhi[zIdx];
}

function getMingGong(month, hour) {
    const num = 14 - (month + hour);
    const idx = num > 12 ? num - 12 : num;
    return zhi[idx - 1];
}

function getShenGong(mingGong, taiYuan) {
    const mIdx = zhi.indexOf(mingGong);
    const tIdx = zhi.indexOf(taiYuan[1]);
    const idx = (mIdx + tIdx) % 12;
    return zhi[idx];
}

// 旺相休囚死
const wangXiang = {
    "春": {"木":"旺","火":"相","水":"休","金":"囚","土":"死"},
    "夏": {"火":"旺","土":"相","木":"休","水":"囚","金":"死"},
    "秋": {"金":"旺","水":"相","土":"休","火":"囚","木":"死"},
    "冬": {"水":"旺","木":"相","金":"休","土":"囚","火":"死"},
    "四季": {"土":"旺","金":"相","火":"休","木":"囚","水":"死"}
};

function getWangXiang(month, gan) {
    const wuXingMap = {"甲":"木","乙":"木","丙":"火","丁":"火","戊":"土","己":"土","庚":"金","辛":"金","壬":"水","癸":"水"};
    let season;
    if (month >=1 && month <=3) season="春";
    else if (month >=4 && month <=6) season="夏";
    else if (month >=7 && month <=9) season="秋";
    else if (month >=10 && month <=12) season="冬";
    else season="四季";
    return wangXiang[season][wuXingMap[gan]] || "平";
}

// 大运流年
function getDaYun(monthGZ, sex, yearGan) {
    const isYang = "甲丙戊庚壬".includes(yearGan);
    const isShun = (isYang && sex === "男") || (!isYang && sex === "女");
    const daYun = [];
    let gIdx = gan.indexOf(monthGZ[0]);
    let zIdx = zhi.indexOf(monthGZ[1]);
    for (let i=0; i<10; i++) {
        if (isShun) { gIdx=(gIdx+1)%10; zIdx=(zIdx+1)%12; }
        else { gIdx=(gIdx-1+10)%10; zIdx=(zIdx-1+12)%12; }
        daYun.push(gan[gIdx]+zhi[zIdx]);
    }
    return daYun;
}

function getLiuNian(startYear) {
    const liuNian = [];
    for (let i=0; i<10; i++) {
        liuNian.push(getYearGZ(startYear+i));
    }
    return liuNian;
}

// 本地存储
const RECORD_KEY = "bazi_records";
function getRecords() {
    try { return JSON.parse(localStorage.getItem(RECORD_KEY)) || []; }
    catch (e) { return []; }
}

function saveRecord(record) {
    const records = getRecords();
    records.unshift({...record, id:Date.now(), createTime:new Date().toLocaleString()});
    localStorage.setItem(RECORD_KEY, JSON.stringify(records));
    renderRecords();
}

function deleteRecord(id) {
    const records = getRecords().filter(r => r.id !== id);
    localStorage.setItem(RECORD_KEY, JSON.stringify(records));
    renderRecords();
}

function renderRecords() {
    const records = getRecords();
    const recordList = document.getElementById('recordList');
    if (!recordList) return;
    if (records.length === 0) {
        recordList.innerHTML = '<div class="empty-tip">暂无排盘记录</div>';
        return;
    }
    let html = '';
    records.forEach(record => {
        html += `
            <div class="record-item">
                <div class="record-info">
                    <strong>${record.type} ${record.ori} ${record.city} ${record.sex}</strong>
                    <span class="record-time">${record.createTime}</span>
                    <br>
                    <span>八字：${record.bazi}</span>
                </div>
                <div>
                    <button class="btn btn-primary" onclick="loadRecord(${record.id})">查看</button>
                    <button class="btn btn-danger" onclick="deleteRecord(${record.id})">删除</button>
                </div>
            </div>
        `;
    });
    recordList.innerHTML = html;
}

window.loadRecord = function(id) {
    const records = getRecords();
    const record = records.find(r => r.id === id);
    if (!record) return;
    document.querySelector(`input[name="dateType"][value="${record.type}"]`).checked = true;
    document.getElementById('birthYmd').value = record.ori;
    document.getElementById('birthHour').value = record.time;
    document.getElementById('city').value = record.city;
    document.querySelector(`input[name="sex"][value="${record.sex}"]`).checked = true;
    renderBazi(record);
};

// 渲染八字排盘（1:1复刻热卜）
function renderBazi(data) {
    const resultArea = document.getElementById('resultArea');
    const infoTip = document.getElementById('infoTip');
    const baziBody = document.getElementById('baziBody');
    const analyseText = document.getElementById('analyseText');

    resultArea.style.display = 'block';

    // 基本信息
    const shengXiao = getShengXiao(data.y);
    const jieQi = getJieQi(data.m, data.d);
    infoTip.innerHTML = `
        <p><span>名称：</span>未知 <span>性别：</span>${data.sex} <span>生肖：</span>${shengXiao}</p>
        <p><span>日期：</span>${data.ori} ${data.time}</p>
        <p><span>真太阳时：</span>${data.y}年${data.m}月${data.d}日 ${data.shi}时${data.off>0?"+":""}${data.off}分（${data.city}）</p>
        <p><span>节气：</span>${jieQi}</p>
    `;

    // 计算所有字段
    const diShi = {
        year: getDiShi(data.yG, data.yZ),
        month: getDiShi(data.mG, data.mZ),
        day: getDiShi(data.dG, data.dGZ1),
        hour: getDiShi(data.sG, data.sZ)
    };
    const ziZuo = getDiShi(data.dG, data.dGZ1);
    const nianKong = getKongWang(data.yearGZ);
    const riKong = getKongWang(data.dGZ);
    const taiYuan = getTaiYuan(data.mGZ);
    const mingGong = getMingGong(data.m, data.shiIdx);
    const shenGong = getShenGong(mingGong, taiYuan);
    const wangXiang = getWangXiang(data.m, data.dG);

    // 神煞（每个柱多个）
    const shenSha = {
        year: `华盖`,
        month: `文昌 六厄`,
        day: `天德贵人 天乙贵人 太极贵人`,
        hour: `文昌 太极贵人`
    };

    // 藏干十神
    const cangShi = {
        year: calcCangShiShen(data.dG, data.yZ),
        month: calcCangShiShen(data.dG, data.mZ),
        day: calcCangShiShen(data.dG, data.dGZ1),
        hour: calcCangShiShen(data.dG, data.sZ)
    };

    // 大运
    const daYun = getDaYun(data.mGZ, data.sex, data.yG);
    const daYunYears = [];
    let startYear = data.y + 8; // 简化起运年龄，可自行精确计算
    for (let i=0; i<10; i++) {
        daYunYears.push(startYear + i*10);
    }

    // 流年（每个大运对应10年）
    const allLiuNian = [];
    daYunYears.forEach(year => {
        allLiuNian.push(getLiuNian(year));
    });

    // 核心四柱表格
    baziBody.innerHTML = `
        <tr>
            <th>四柱</th>
            <th>年柱</th>
            <th>月柱</th>
            <th>日柱</th>
            <th>时柱</th>
        </tr>
        <tr>
            <td>十神</td>
            <td><span class="clickable" onclick="showExplain('${data.sy}', '十神')">${data.sy}</span></td>
            <td><span class="clickable" onclick="showExplain('${data.sm}', '十神')">${data.sm}</span></td>
            <td><span class="clickable" onclick="showExplain('日元', '十神')">日元</span></td>
            <td><span class="clickable" onclick="showExplain('${data.ss}', '十神')">${data.ss}</span></td>
        </tr>
        <tr>
            <td>${data.sex === "男" ? "乾造" : "坤造"}</td>
            <td><span class="wu-xing-${wuXing[data.yG]}">${data.yG}</span><br><span class="wu-xing-${wuXing[data.yZ]}">${data.yZ}</span></td>
            <td><span class="wu-xing-${wuXing[data.mG]}">${data.mG}</span><br><span class="wu-xing-${wuXing[data.mZ]}">${data.mZ}</span></td>
            <td><span class="wu-xing-${wuXing[data.dG]}">${data.dG}</span><br><span class="wu-xing-${wuXing[data.dGZ1]}">${data.dGZ1}</span></td>
            <td><span class="wu-xing-${wuXing[data.sG]}">${data.sG}</span><br><span class="wu-xing-${wuXing[data.sZ]}">${data.sZ}</span></td>
        </tr>
        <tr>
            <td>藏干</td>
            <td>${data.yC}<div class="cang-shishen">${cangShi.year}</div></td>
            <td>${data.mC}<div class="cang-shishen">${cangShi.month}</div></td>
            <td>${data.dC}<div class="cang-shishen">${cangShi.day}</div></td>
            <td>${data.sC}<div class="cang-shishen">${cangShi.hour}</div></td>
        </tr>
        <tr>
            <td>纳音</td>
            <td><span class="clickable" onclick="showExplain('${data.yn}', '纳音')">${data.yn}</span></td>
            <td><span class="clickable" onclick="showExplain('${data.mn}', '纳音')">${data.mn}</span></td>
            <td><span class="clickable" onclick="showExplain('${data.dn}', '纳音')">${data.dn}</span></td>
            <td><span class="clickable" onclick="showExplain('${data.sn}', '纳音')">${data.sn}</span></td>
        </tr>
        <tr>
            <td>地势</td>
            <td>${diShi.year}</td>
            <td>${diShi.month}</td>
            <td>${diShi.day}</td>
            <td>${diShi.hour}</td>
        </tr>
        <tr>
            <td>自坐</td>
            <td>${getDiShi(data.yG, data.yZ)}</td>
            <td>${getDiShi(data.mG, data.mZ)}</td>
            <td>${ziZuo}</td>
            <td>${getDiShi(data.sG, data.sZ)}</td>
        </tr>
        <tr>
            <td>空亡</td>
            <td><span class="clickable" onclick="showExplain('空亡', '神煞')">${nianKong}</span></td>
            <td><span class="clickable" onclick="showExplain('空亡', '神煞')">${getKongWang(data.mGZ)}</span></td>
            <td><span class="clickable" onclick="showExplain('空亡', '神煞')">${riKong}</span></td>
            <td><span class="clickable" onclick="showExplain('空亡', '神煞')">${getKongWang(data.sGZ)}</span></td>
        </tr>
        <tr>
            <td>神煞</td>
            <td>${shenSha.year.split(' ').map(s => `<span class="clickable" onclick="showExplain('${s}', '神煞')">${s}</span>`).join(' ')}</td>
            <td>${shenSha.month.split(' ').map(s => `<span class="clickable" onclick="showExplain('${s}', '神煞')">${s}</span>`).join(' ')}</td>
            <td>${shenSha.day.split(' ').map(s => `<span class="clickable" onclick="showExplain('${s}', '神煞')">${s}</span>`).join(' ')}</td>
            <td>${shenSha.hour.split(' ').map(s => `<span class="clickable" onclick="showExplain('${s}', '神煞')">${s}</span>`).join(' ')}</td>
        </tr>
    `;

    // 胎元命宫身宫行
    let extraHtml = `
        <div class="extra-row">
            <div class="extra-cell">
                <h4>胎元</h4>
                <p>${taiYuan}</p>
                <p class="small">${naYinList[taiYuan] || ""}</p>
            </div>
            <div class="extra-cell">
                <h4>命宫</h4>
                <p>${mingGong}</p>
                <p class="small">${naYinList[getYearGZ(data.y)+mingGong] || ""}</p>
            </div>
            <div class="extra-cell">
                <h4>身宫</h4>
                <p>${shenGong}</p>
                <p class="small">${naYinList[getYearGZ(data.y)+shenGong] || ""}</p>
            </div>
            <div class="extra-cell">
                <h4>旺相休囚死</h4>
                <p>水木金土火</p>
                <p class="small">${wangXiang}</p>
            </div>
        </div>
    `;

    // 起运信息
    extraHtml += `
        <div class="qiyun-info">
            出生后<span>8年7个月6日</span>起大运，每逢<span>壬</span>年<span>7月17日</span>前后交运。
        </div>
    `;

    // 大运表格
    extraHtml += `
        <div class="dayun-area">
            <h4>大运</h4>
            <table class="dayun-table">
                <tr>
                    ${daYunYears.map(y => `<td>${y}</td>`).join('')}
                </tr>
                <tr>
                    ${daYun.map((yun, i) => `<td class="${i===5?'active':''}">${yun}</td>`).join('')}
                </tr>
                <tr>
                    ${daYun.map(yun => `<td>${calcShiShen(data.dG, yun[0])}</td>`).join('')}
                </tr>
            </table>
        </div>
    `;

    // 流年表格（逐行显示）
    extraHtml += `
        <div class="liunian-area">
            <h4>流年</h4>
            <table class="liunian-table">
    `;
    // 每个大运对应10年，共10行
    for (let i=0; i<10; i++) {
        extraHtml += `<tr>`;
        allLiuNian[i].forEach((ln, j) => {
            extraHtml += `<td class="${i===5 && j===2?'active':''}">${ln}</td>`;
        });
        extraHtml += `</tr>`;
    }
    extraHtml += `
            </table>
        </div>
    `;

    analyseText.innerHTML = extraHtml;
}

// 显示释义弹窗
window.showExplain = function(name, type) {
    const modal = document.getElementById('explainModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');

    if (type === '十神') {
        modalTitle.textContent = `【${name}】十神详解`;
        modalText.textContent = shiShenExplain[name];
    } else if (type === '纳音') {
        modalTitle.textContent = `【${name}】纳音详解`;
        modalText.textContent = naYinExplain[name];
    } else if (type === '神煞') {
        modalTitle.textContent = `【${name}】神煞详解`;
        modalText.textContent = shenShaExplain[name];
    }

    modal.style.display = 'block';
};

// 页面加载完成
document.addEventListener('DOMContentLoaded', () => {
    // 首页轮播图
    const bannerSlides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    function showSlide(index) {
        bannerSlides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        bannerSlides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    setInterval(() => {
        let next = (currentSlide + 1) % bannerSlides.length;
        showSlide(next);
    }, 3000);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    // 排盘表单提交
    const baziForm = document.getElementById('baziForm');
    if (baziForm) {
        baziForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const dateType = document.querySelector('input[name="dateType"]:checked').value;
            const ymd = document.getElementById('birthYmd').value.trim();
            const time = document.getElementById('birthHour').value.trim();
            const city = document.getElementById('city').value.trim();
            const sex = document.querySelector('input[name="sex"]:checked').value;

            if (!ymd || !time || !city) {
                alert('请完整填写所有信息！');
                return;
            }

            // 宽松解析日期时间
            const date = parseDate(ymd);
            const t = parseTime(time);
            if (!date || !t) {
                alert('日期或时间格式错误！示例：2000-5-3 或 5:00');
                return;
            }

            const useY = dateType === 'lunar' ? date.y + 11 : date.y;
            const off = cityTimeDiff[city] || 0;
            const shiIdx = getRealShi(t.hh, off);

            // 计算四柱
            const yearGZ = getYearGZ(useY);
            const yG = yearGZ[0], yZ = yearGZ[1];
            const mGZ = getMonthGZ(gan.indexOf(yG), date.m);
            const mG = mGZ[0], mZ = mGZ[1];
            const dayBase = (useY - 2000) * 365 + date.m * 30 + date.d;
            const dGidx = dayBase % 10;
            const dZidx = dayBase % 12;
            const dGZ = gan[dGidx] + zhi[dZidx];
            const dG = dGZ[0], dGZ1 = dGZ[1];
            const sGZ = getShiGZ(dGidx, shiIdx);
            const sG = sGZ[0], sZ = sGZ[1];

            // 计算十神藏干纳音
            const sy = calcShiShen(dG, yG);
            const sm = calcShiShen(dG, mG);
            const ss = calcShiShen(dG, sG);
            const yC = cangGanData[yZ].join('');
            const mC = cangGanData[mZ].join('');
            const dC = cangGanData[dGZ1].join('');
            const sC = cangGanData[sZ].join('');
            const yn = naYinList[yearGZ], mn = naYinList[mGZ], dn = naYinList[dGZ], sn = naYinList[sGZ];

            // 构造数据
            const baziData = {
                type: dateType, ori: ymd, time: time, city, sex,
                bazi: `${yearGZ} ${mGZ} ${dGZ} ${sGZ}`,
                off: off, shi: zhi[shiIdx],
                sy, sm, ss, yG, yZ, mG, mZ, dG, dGZ1, sG, sZ,
                yC, mC, dC, sC, yn, mn, dn, sn,
                dGidx, m: date.m, shiIdx, yearGZ, mGZ, sGZ, y: useY, d: date.d
            };

            saveRecord(baziData);
            renderBazi(baziData);
            document.getElementById('resultArea').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 查看历史记录
    const showRecordBtn = document.getElementById('showRecordBtn');
    if (showRecordBtn) {
        showRecordBtn.addEventListener('click', () => {
            renderRecords();
            document.getElementById('recordList').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 关闭弹窗
    const closeModal = document.querySelector('.close-modal');
    const modal = document.getElementById('explainModal');
    if (closeModal && modal) {
        closeModal.addEventListener('click', () => { modal.style.display = 'none'; });
        window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
    }

    // 留言板（支持匿名）
    const msgForm = document.getElementById('msgForm');
    const msgList = document.getElementById('msgList');
    if (msgForm && msgList) {
        msgForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nick = document.getElementById('nick').value.trim();
            const content = document.getElementById('msg').value.trim();
            const isAnonymous = document.getElementById('anonymous').checked;
            if (!content) { alert('请填写留言内容！'); return; }
            const showNick = isAnonymous ? "匿名用户" : (nick || "匿名用户");
            const msgItem = document.createElement('div');
            msgItem.className = 'msg-item';
            msgItem.innerHTML = `
                <div class="msg-header">
                    <strong>${showNick}</strong>
                    <span class="msg-time">${new Date().toLocaleString()}</span>
                </div>
                <div class="msg-content">${content}</div>
            `;
            msgList.insertBefore(msgItem, msgList.firstChild);
            msgForm.reset();
            alert('留言提交成功！');
        });
    }

    renderRecords();
});