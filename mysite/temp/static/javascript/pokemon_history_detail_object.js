var version_1_1 = {
	versionName : '神奇宝贝红绿蓝版',
	introduction : '<p><span class="big">神奇宝贝红版（ポケットモンスター 赤）</span>和<span class="big">神奇宝贝绿版（ポケットモンスター 緑）</span>是第一款神奇宝贝游戏，于1996年2月27日在日本发行，在同年10月15日，通过快乐快乐的抽签活动发售了<span class="big">蓝版（ポケットモンスター青）</span>，在99年开始面向全国销售。蓝版修复了红绿版中的一些漏洞及一些背景音乐。</p><p>在制作海外版时，是根据蓝版的游戏ROM的源代码进行修改，因此只发行了<span class="big">红版（Pokémon Red Version ）</span>和<span class="big">蓝版（Pokémon Blue Version ）</span>。</p><p>在98年，根据动画剧情，修改了原本的游戏剧情发行了第四个版本，皮卡丘版。在2004年，任天堂在GBA平台上发表了这款游戏的复刻版本：神奇宝贝火红叶绿版，新增了七岛的地图，并且根据当时的游戏发展情况追加了设定。</p>',
	gameProcedure : '玩家以一名十岁的训练家的身份从真新镇展开自己的旅程，在出发时可以获得一只初学者神奇宝贝，玩家将在关都地方展开自己的旅程，目标是依次挑战八名道馆训练家，并在石英高原挑战四大天王和冠军。同时，玩家在旅行中会遇到一群利用神奇宝贝做坏事的人，他们自称火箭队。玩家要在旅途中阻止他们的行动。在通关后，玩家可以继续收集神奇宝贝，并与其他人交换、培养出最强的神奇宝贝。',
	special : '<div class="special_div"><h3>道馆</h3><span class="specialWord">主条目︰道馆#关都地方</span><br />在红绿版中，在八个城市里设立了道馆，每个道馆都有自己的关都地方，按照剧情前进就可以依次挑战到每一个道馆</div><div class="special_div"><h3>四天王</h3><span class="specialWord">主条目︰四天王#第一世代和第三世代</span><br />剧情中的最终目标就是挑战四天王和冠军。</div><div class="special_div"><h3>神奇宝贝</h3><p class="special_p">这三个版本中均有151只神奇宝贝，其中梦幻是直到开发结束前2周的时候才被森本茂树临时添加进去的，无法捕获。除此以外，根据不同的版本，也会有少数神奇宝贝无法直接捕获，需要与其他版本通讯交换才可以获得。</p></div>',
	detail : '<li>红绿版的开发始于1990年，使得它的开发周期是历代神奇宝贝游戏中最长的。</li><li>在日本，神奇宝贝被称为Pocket Monster（ポケットモンスター）,而在海外，第一世代的神奇宝贝游戏被一度决定翻译为Monster in my pocket（在我的口袋里的怪物），但是与KONAMI游戏重名，因此GameFreak最终选择了专属缩写Pokémon。</li><li>红绿版中部分神奇宝贝的形象与杉森建的绘图相差甚远，显得十分诡异，如妙蛙花的花茎。这点在蓝版中得到了改善，但是仍然很别扭。直到皮卡丘版，神奇宝贝才接近于绘图和神奇宝贝动画的形象。</li><li>游戏的主角小智、小茂的默认姓名サトシ、シゲル来自于神奇宝贝系列的创始人田尻智和他的好友宫本茂。</li><li>第一世代神奇宝贝游戏是唯一没有女主角的神奇宝贝游戏。<ul><li>第二世代的金银版虽然也没有女主角，但是水晶版则添加了克丽丝。</li><li>虽然在早期宣传画中出现了小智、小茂、某不知名女性训练员对峙的场景，但是游戏真正发售时并没有出现女主角。<ul><li>后来此宣传画中的女性训练员形象在特别篇中成为了小蓝的原型。</li></ul></li><li>初代没有女性训练员的原因，可能是因为卡带容量过满，已经放不下女性训练员的造型（从梦幻就可以看出，卡带容量已近饱和），也可能是宣传画内仅为NPC，而并非是主角。<ul><li>此举也曾被抗议为歧视女性玩家，也促使了神奇宝贝动画使用受女性喜爱的皮卡丘。</li></ul></li></ul></li>',
	//添加版本名与简介
	setVNameVIntro : function() {
						//添加节点h1、hr、div
						var h1 = document.createElement('h1');
						var hr = document.createElement('hr');
						var div = document.createElement('div');
						//设置h1、div的内容
						var h1_text = document.createTextNode(version_1_1.versionName);
						h1.appendChild(h1_text);
						div.innerHTML = version_1_1.introduction;
						//添加h1、hr、div到 '#main_left'
						$('#main_left').append(h1);
						$('#main_left').append(hr);
						$('#main_left').append(div);
					},
	setGProce : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var p = document.createElement('p');

					var h2_text = document.createTextNode('游戏流程');
					var p_text = document.createTextNode(version_1_1.gameProcedure);
					h2.appendChild(h2_text);
					p.appendChild(p_text);

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(p);
				},
	setSpecial : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var div = document.createElement('div');

					var h2_text = document.createTextNode('特性');
					h2.appendChild(h2_text);
					div.innerHTML = version_1_1.special;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(div);
				},
	setDetail : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var ul = document.createElement('ul');

					var h2_text = document.createTextNode('细节');
					h2.appendChild(h2_text);
					ul.innerHTML = version_1_1.detail;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(ul);
				},
	setImage : function() {
					$('#main_right').html('<div class="pic_title"><p>神奇宝贝红版</p><p>ポケットモンスター 赤</p><p>Pokémon Red Version</p></div><img src="/static/images/history/红.jpg" /><div class="pic_title"><p>神奇宝贝绿版</p><p>ポケットモンスター 緑</p><p>Pokémon Green Version</p></div><img src="/static/images/history/绿.jpg" /><div class="pic_title"><p>神奇宝贝蓝版</p><p>ポケットモンスター 青</p><p>Pokémon Blue Version</p></div><img src="/static/images/history/蓝.jpg" /><dl><dt>平台</dt><dd>Game Boy</dd><dt>分类</dt><dd>RPG</dd><dt>玩家人数</dt><dd>1~2人</dd><dt>通讯机能</dt><dd>连接线</dd><dt>开发商</dt><dd>Game Freak</dd><dt>发行商</dt><dd>任天堂</dd></dl>')
				},
	initialize : function() {
					version_1_1.setVNameVIntro();
					version_1_1.setGProce();
					version_1_1.setSpecial();
					version_1_1.setDetail();
					version_1_1.setImage();
				}
}

var version_1_2 = {
	versionName : '神奇宝贝皮卡丘版',
	introduction : '<p><span class="big">神奇宝贝皮卡丘版</span>（日文︰<span class="big">ポケットモンスター ピカチュウ</span>，英文︰<span class="big">Pokémon Yellow: Special Pikachu Edition</span>）是为了纪念动画版所发行的版本，又称黄版。</p><p>游戏内容大致与红、蓝、绿版相同。</p><p>与红、蓝、绿版最大不同处：</p><ol><li>皮卡丘会如动画中一般跟在主角旁边，并且无法进化。可以通过“心情模式”查看皮卡丘当前的状况。</li><li>大部分剧情根据动画版进行了修改，以呼应神奇宝贝动画。</li><li>宿敌之伊布会依游戏中与主角对战之记录进化为不同型态。</li><li>玩家根据剧情推动可以获得妙娃种子、小火龙与杰尼龟。</li><li>部分剧情变动，如多次遇到的火箭队队员变成了武藏、小次郎和喵喵。</li></ol>',
	detail : '<li>因海外版皮卡丘版称为<span class="big">Pokémon Yellow</span>，因此有些玩家将神奇宝贝皮卡丘版称为<span class="big">黄版</span>，而一般在同好交流领域也称之为<span class="big">黄版</span>。</li><li>神奇宝贝皮卡丘版是唯一一款由动画改编为游戏的主系列游戏作品。</li><li>皮卡丘版的神奇宝贝形象参考了杉森建的设定和动画版中的形象，进行了重绘，比神奇宝贝红绿蓝版的形象更贴近设定稿。</li><li>本作中的小智使用的是神奇宝贝红绿蓝版的形象配以无印篇中小智的服装，但是一般认为这个设定是一个特殊设定，不代表第一世代的小智标准形象。<ul><li>同样本作中小茂也是使用无印篇的形象。</li></ul></li><li>第二世代中，小智的外形使用了皮卡丘版的形象，也造成了部分玩家对动画人物和游戏人物的混淆，官方并没有解释原因。</li>',
	//添加版本名与简介
	setVNameVIntro : function() {
						//添加节点h1、hr、div
						var h1 = document.createElement('h1');
						var hr = document.createElement('hr');
						var div = document.createElement('div');
						//设置h1、div的内容
						var h1_text = document.createTextNode(version_1_2.versionName);
						h1.appendChild(h1_text);
						div.innerHTML = version_1_2.introduction;
						//添加h1、hr、div到 '#main_left'
						$('#main_left').append(h1);
						$('#main_left').append(hr);
						$('#main_left').append(div);
					},
	setDetail : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var ul = document.createElement('ul');

					var h2_text = document.createTextNode('细节');
					h2.appendChild(h2_text);
					ul.innerHTML = version_1_2.detail;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(ul);
				},
	setImage : function() {
					$('#main_right').html('<div class="pic_title"><p>神奇宝贝皮卡丘版</p><p>ポケットモンスター ピカチュウ</p><p>Pokémon Yellow: Special Pikachu Edition</p></div><img src="/static/images/history/比卡丘.jpg" /><dl><dt>平台</dt><dd>Game Boy</dd><dt>分类</dt><dd>RPG</dd><dt>玩家人数</dt><dd>2人</dd><dt>通讯机能</dt><dd>连接线</dd><dt>开发商</dt><dd>Game Freak</dd><dt>发行商</dt><dd>任天堂</dd></dl></div>')
				},
	initialize : function() {
					version_1_2.setVNameVIntro();
					version_1_2.setDetail();
					version_1_2.setImage();
				}
}

var version_2_1 = {
	versionName : '神奇宝贝金银版',
	introduction : '<p><span class="big">神奇宝贝金版</span>（日文：<span class="big">ポケットモンスター 金</span> 英文<span class="big">Pokémon Gold Version</span>）和<span class="big">神奇宝贝银版</span>（日文：<span class="big">ポケットモンスター 银</span> <span class="big">Pokémon Silver Version</span>）是神奇宝贝主系列游戏中的第五部和第六部。</p><p>金银版在神奇宝贝世界中加入了更多新要素。与之前版本不同，金银版的舞台在新的地点城都地方展开。在通关之后，玩家可以抵达东边的关都地方进行冒险。',
	special : '<div class="special_div"><h3>道馆</h3><p class="special_p">城都地方有八个道馆，每个道馆训练家都有自己的擅长属性。他们是阿速（飞行）、阿笔（虫）、小茜（一般）、小松（幽灵）、阿四（格斗）、阿蜜（钢）、柳伯（冰）、小椿（龙）。另外，在二周目中能够拜访的关都地方的八个道馆依然可以挑战。道馆训练家分别为马志士（电）、娜姿（超能力）、莉佳（草）、阿杏（毒）、小霞（水）、小刚（岩石）、夏伯（炎）、小茂（多种）。</p></div><div class="special_div"><h3>四天王</h3><p class="special_p">金银版的四天王是新设计的，与原来不同，但仍然位于原来的石英高原。他们分别是一树（超能力）、阿桔（毒）、希巴（格斗）、梨花（恶）。冠军渡则是前作的四天王之一。</p></div><div class="special_div"><h3>神奇宝贝</h3><p class="special_p">这个版本中新增了100只新神奇宝贝。雪拉比是唯一一只无法在游戏中正常捕获的神奇宝贝。</p></div><div class="special_div"><h3>神奇宝贝装置</h3><span class="specialWord">神奇宝贝装置</span><br />神奇宝贝装置在游戏开始时由妈妈赠送。它拥有很多功能，例如查看地图，播放音乐，查看时间，打电话等等。</div><div class="special_div"><h3>宝贝球</h3><span class="specialWord">第二世代引入的宝贝球</span><br />第二世代新增了八种宝贝球，其中七种需要在钢铁先生处提供柑果才能制作。</div><div class="special_div"><h3>属性变更</h3><p class="special_p">两个新属性，钢系和恶系被加入到游戏中。它们是为了平衡第一世代超能力系过强的状况而被加入的。<br />另外，它们都有格斗系弱点，而格斗系在第一世代中又是相当弱势的一个属性。钢系的神奇宝贝大多都有良好的防御能力，而恶系的神奇宝贝则有着强大的特攻。另外，某些属性相性也进行了变更，详情请见属性相性表。</p></div><div class="special_div"><h3>新进化方式</h3><p class="special_p">第二世代引入了时间系统，出现了在特定时间段进化的神奇宝贝，如太阳精灵和月精灵。<br />第二世代完善了亲密度系统，出现了在需要足够亲密度进化的神奇宝贝，如波克基古和叉字蝠。<br />第二世代出现了携带特定道具通信进化的神奇宝贝，如河马王。</p></div>',
	detail : '<li><span class="big">神奇宝贝金银版</span>是第一个以传说中的神奇宝贝作为封面的主系列游戏。</li><li>因为城都地方以日本传统文化最为丰富的近畿地区为原型，所以本作也为日本风格最为浓厚的一作，不仅封面神奇宝贝与日本神话有关，甚至出现了日式古建筑，以及有关神道教和佛教的内容。<ul><li>因此也导致了本作是涉及宗教问题最为严重的一作，关于佛教和神道教内容的地方在海外版做出了多数修改。</li></ul></li><li>与GAME BOY COLOR最初设定为GAME BOY的彩色版改良产品一样。神奇宝贝金银版最终也只是作为神奇宝贝第一世代的彩色版续集而制作的，所以与之后的系列作品不同，游戏的设计更偏向于与前作的剧情相通，剧情发生时间采用了前作三年后的设计。并且采用可以横跨关都地方与城都地方双地图设计，这种设计也是初期Game Freak对于神奇宝贝系列的续作的设计理念。</li><li><span class="big">神奇宝贝金银版</span>是唯一的两个世代的图鉴相连的游戏，第一世代与第二世代的图鉴没有分开（而在神奇宝贝心金魂银版则分为了城都图鉴和全国图鉴），从第三世代开始，则采用了地方图鉴的方式。</li><li><span class="big">神奇宝贝金银版</span>是唯一没有新的反派出现的游戏，与第一世代相同，仍为火箭队。</li><li>神奇宝贝金银版及之后的复刻版神奇宝贝心金魂银版是唯一可以前往两个地区的游戏。</li><li>神奇宝贝金银版及之后的复刻版神奇宝贝心金魂银版是唯一有两个结局的游戏，第一次在神奇宝贝联盟获得冠军后，第二次在白银山与小智战斗胜利后。</li>',
	//添加版本名与简介
	setVNameVIntro : function() {
						//添加节点h1、hr、div
						var h1 = document.createElement('h1');
						var hr = document.createElement('hr');
						var div = document.createElement('div');
						//设置h1、div的内容
						var h1_text = document.createTextNode(version_2_1.versionName);
						h1.appendChild(h1_text);
						div.innerHTML = version_2_1.introduction;
						//添加h1、hr、div到 '#main_left'
						$('#main_left').append(h1);
						$('#main_left').append(hr);
						$('#main_left').append(div);
					},
	setSpecial : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var div = document.createElement('div');

					var h2_text = document.createTextNode('特性');
					h2.appendChild(h2_text);
					div.innerHTML = version_2_1.special;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(div);
				},
	setDetail : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var ul = document.createElement('ul');

					var h2_text = document.createTextNode('细节');
					h2.appendChild(h2_text);
					ul.innerHTML = version_2_1.detail;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(ul);
				},
	setImage : function() {
					$('#main_right').html('<div class="pic_title"><p>神奇宝贝金版</p><p>ポケットモンスター 金</p><p>Pokémon Gold Version</p></div><img src="/static/images/history/金.jpg" /><div class="pic_title"><p>神奇宝贝银版</p><p>ポケットモンスター 銀</p><p>Pokémon Silver Version</p></div><img src="/static/images/history/银.jpg" /><dl><dt>平台</dt><dd>Game Boy Color</dd><dt>分类</dt><dd>RPG</dd><dt>玩家人数</dt><dd>1~2人</dd><dt>通讯机能</dt><dd>Link cable, IR*</dd><dt>开发商</dt><dd>Game Freak</dd><dt>发行商</dt><dd>任天堂</dd></dl>')
				},
	initialize : function() {
					version_2_1.setVNameVIntro();
					version_2_1.setSpecial();
					version_2_1.setDetail();
					version_2_1.setImage();
				}
}

var version_2_2 = {
	versionName : '神奇宝贝水晶版',
	introduction : '<p><span class="big">神奇宝贝水晶版</span>（日文：<span class="big">ポケットモンスター クリスタルバージョン</span>，英文<span class="big">Pokémon Crystal Version</span>）是神奇宝贝系列游戏的第七个作品（美版为第六个，因为美版没有推出蓝版。）它是一年前金银的重制版。它的冒险地区与前作的金银版相同，是城都地方，并且在通关后可以前往关都地方冒险。</p>',
	gameProcedure : '主角在城都地方的若叶镇开始自己的旅行。首先要在空木博士处领取一只初学者神奇宝贝。此时主角有三个选择：炎系的火球鼠，水系的小锯鳄，草系的菊草叶。之后，玩家就可以开始旅行了。在旅行的途中，需要从坐落于各地的道馆收集八个徽章来获得挑战神奇宝贝联盟的资格，还需要与路上各式各样的训练家和野生神奇宝贝对战，并且收服想要的野生神奇宝贝，组成自己的对战队伍。主角也需要与邪恶组织火箭队对抗，阻止他们复活的妄想。主角还可能在游戏中遇见传说中的神奇宝贝，如水君，炎帝与雷公。运气好的话还可以遇见凤王与洛奇亚，这些游戏要素都需要自己去发掘。<br /><br />火箭队以新面貌再度出现，虽然他们的首领坂木已经不在了。他们在本作中的首要活动地区为城都地方。主角将在桧皮镇首次对抗火箭队，阻止他们切下呆呆兽的尾巴拿去出售。随着剧情的发展，火箭队的阴谋一点一点显现出来。主角需要捣毁他们在卡吉镇的地下基地，从他们手中夺回被占领的满金广播电塔……<br /><br />在冒险中，主角还会碰见从烧焦塔苏醒的一只传说中的神奇宝贝，水君。在这个版本中还有一个新人物，米那君，梦想着能收服水君。<br /><br />在称霸神奇宝贝联盟之后，主角可以通过搭乘浅黄市的阿哥号来到关都地方，在这片与城都地方连接在一起的地方再度展开新的冒险。同样，这里也有各式各样的训练家、野生神奇宝贝以及道馆在等待着主角。集齐十六个徽章之后，主角将向着城都与关都的分界线处的白银山前进。在那里，小智正在静静地等待着主角。<br /><br />前去击败他吧，你将创造新的传说。',
	special : '<div class="special_div"><h3>设计变化</h3><p class="special_p"><ul><li>桔梗市西边新增了一片草地，并且在这里可以捕获卡蒂狗。这就使得没有选择炎系初学者神奇宝贝（在这个版本中是火球鼠）的玩家能够比其他版本中更早地收服到炎系神奇宝贝。</li><li>冰雪通路的迷宫变化，并且内部结构改为冰结构。</li><li>烧焦塔全部重新设计。</li><li>神奇宝贝联盟中渡的房间重新设计，现在玩家可以看见迷你龙的雕像。</li><li>雷公、水君和炎帝的战斗拥有特殊的战斗音乐。水晶版也是第一个与传说中的神奇宝贝对战会出现不同的战斗音乐的版本。</li><li>龙穴做了细微的调整：龙圣祠开放，圣祠后院添加了四棵铁头功树。</li><li>首次添加了神奇宝贝的登场动画，这个设计曾一度被废除，直到绿宝石版才再度采用。</li><li>某些神奇宝贝的图像重新设计，譬如黑鲁加和雷公；狃拉、水君等在金银两版中共用同一图像的神奇宝贝的图像做了细微调整。然而大多数神奇宝贝仍旧沿用金银版的图像。</li><li>部份训练家的台词改变。</li></ul></p></div><div class="special_div"><h3>地点变化</h3><p class="special_p"><ul><li>狃拉出现在了冰雪通路。在金银版中，白银山之前是无法遇见它的。</li><li>鸭嘴火龙不再出现在烧焦塔，而是出现在白银山。</li><li>部份训练家站立的位置做了调整。</li><li>关都地方的野生神奇宝贝分布稍许改动。</li></ul></p></div><div class="special_div"><h3>游戏变化</h3><p class="special_p"><ul><li>玩家可以选择女主角，克丽丝作为自己的游戏角色。这是第一个可以选择女主角的版本。</li><li>水晶版出现了米那君，以捕获水君为自己的目标。</li><li>洛奇亚和凤王均以等级60出现在游戏中。凤王不能被捕捉直到玩家捕获了炎帝、水君、雷公。</li><li>阿露福遗迹变更，增加了未知图腾的出现率。</li><li>玩家可以在水晶版中获得更多种类的神奇宝贝。例如，天蝎和盔甲鸟都是只在金银其中一个版本里出现，但在水晶版中它们都可以被捕获。</li><li>在金银版中，几乎所有训练家打电话给玩家时说的台词都一模一样。现在他们被赋予了更多的个性（有些会谈论购物，有些会谈论打扮），并且会为了对战之外的事打电话给玩家，譬如要送给玩家道具或告诉玩家稀有神奇宝贝大量出现的情报。</li><li>水君的戏份加重，玩家会在游戏过程中多次遇到水君。玩家要在铃铃塔使用透明铃铛才有机会与水君对战，并且它不会逃跑。</li><li>新增广播节目小葵的暗语，玩家可以回答问题收集点数兑换奖品。</li><li>获得升龙徽章的剧情做了调整：玩家需要前往龙穴中的龙圣祠接受小桩的爷爷以及龙使者一族的长老们的考验。无论玩家有没有通过考验，小桩都会拒绝颁发徽章，直到她爷爷威胁她要告诉渡她才愿意把徽章颁给玩家。如果玩家通过了考验，小桩的爷爷还会送给玩家会神速的迷你龙。</li><li>重设时钟的功能取消。</li><li>钢铁先生现在可以接受用多个同一颜色的圆柑果实做多个神奇宝贝球的委托。</li><li>在日文水晶版中，如果玩家将在满金市的神奇宝贝中心获得的蛋兑换券交给饲育屋老夫妇，他们会送给玩家不可思议的蛋，这颗蛋有可能孵化出皮丘、皮宝宝、宝宝丁、巴尔郎、迷唇娃、电击怪或小鸭嘴龙，并且有50%的可能性孵化出异色神奇宝贝；在英文水晶版中，饲育屋老夫妇会直接送给玩家不可思议的蛋，这颗蛋有14%的可能性孵化出异色神奇宝贝。</li></ul></p></div>',
	detail : '<li>本作是唯一一个以种族值580的传说中的神奇宝贝作为封面的主系列游戏。</li><li>如果不算上作为红绿版修正版本的蓝版的话，本作是任天堂第一次尝试制作神奇宝贝主系列游戏的资料片。</li><li>因为移动适配器GB的存在，日文水晶版的很多设定与海外版完全不同，并且随着移动系统GB的关闭，很多内容在之后的复刻版心金魂银版中也没有出现。<ul><li>某些在日文版中才能得到的道具实际上在海外版中也存在，但是没有任何方法获得。</li></ul></li>',
	//添加版本名与简介
	setVNameVIntro : function() {
						//添加节点h1、hr、div
						var h1 = document.createElement('h1');
						var hr = document.createElement('hr');
						var div = document.createElement('div');
						//设置h1、div的内容
						var h1_text = document.createTextNode(version_2_2.versionName);
						h1.appendChild(h1_text);
						div.innerHTML = version_2_2.introduction;
						//添加h1、hr、div到 '#main_left'
						$('#main_left').append(h1);
						$('#main_left').append(hr);
						$('#main_left').append(div);
					},
	setGProce : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var p = document.createElement('p');

					var h2_text = document.createTextNode('游戏流程');
					h2.appendChild(h2_text);
					p.innerHTML = version_2_2.gameProcedure;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(p);
				},
	setSpecial : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var div = document.createElement('div');

					var h2_text = document.createTextNode('特性');
					h2.appendChild(h2_text);
					div.innerHTML = version_2_2.special;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(div);
				},
	setDetail : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var ul = document.createElement('ul');

					var h2_text = document.createTextNode('细节');
					h2.appendChild(h2_text);
					ul.innerHTML = version_2_2.detail;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(ul);
				},
	setImage : function() {
					$('#main_right').html('<div class="pic_title"><p>神奇宝贝水晶版</p><p>ポケットモンスター クリスタルバージョン</p><p>Pokémon Crystal Version</p></div><img src="/static/images/history/水晶.png" /><dl><dt>平台</dt><dd>Game Boy Color</dd><dt>分类</dt><dd>RPG</dd><dt>玩家人数</dt><dd>1~2人</dd><dt>通讯机能</dt><dd></dd><dt>开发商</dt><dd>Game Freak</dd><dt>发行商</dt><dd>任天堂</dd></dl>')
				},
	initialize : function() {
					version_2_2.setVNameVIntro();
					version_2_2.setGProce();
					version_2_2.setSpecial();
					version_2_2.setDetail();
					version_2_2.setImage();
				}
}

var version_3_1 = {
	versionName : '神奇宝贝红蓝宝石版',
	introduction : '<p><span class="big">神奇宝贝红宝石版</span>（日文：<span class="big">ポケットモンスター ルビー</span> Pocket Monsters Ruby，英文：<span class="big">Pokémon Ruby Version</span>）与<span class="big">神奇宝贝蓝宝石版</span>（日文：<span class="big">ポケットモンスター サファイア</span> Pocket Monsters Sapphire，英文：<span class="big">Pokémon Sapphire Version</span>）是任天堂公司发售的第八/九款神奇宝贝主系列游戏。与之前版本相同，冒险地点选在了一个全新的地区，丰缘地方。初学者神奇宝贝也与之前不同。与金银版一样，本作中加入了135种新神奇宝贝，将全国图鉴扩充至386号。但是，这两个版本无法与前作通信来获取前作的神奇宝贝。本作中加入了神奇宝贝华丽大赛，允许玩家用神奇宝贝在外貌上与他人一较高下。并且对战塔从水晶版保留下来。</p>',
	gameProcedure : '从城都地方搬来的主角首先来到了丰缘地方的未白镇，展开了他/她的旅程。主角的父亲是橙华道馆的道馆训练家，千里。刚进入家里，可以看到许多豪力正在帮助搬东西。调好时钟后，主角的母亲会要求主角到电视前面观看父亲的采访。等主角匆匆赶到电视前，采访却结束了。于是主角的母亲建议主角去拜访父亲的朋友：小田卷博士。<br /><br />到达了小田卷博士的家里，他的妻子和孩子（如果玩家选择小遥，则是祐树；如果玩家选择祐树，则是小遥）在家，但小田卷博士却不在家。拜访之后，主角前往101号道路，发现小田卷博士正被一只土狼犬追击。他要求主角从落在一旁的背包里的木守宫，火稚鸡，水跃鱼中选择一只神奇宝贝来打退土狼犬。之后，小田卷为了感谢主角救他，会将主角选择的神奇宝贝赠送给主角。然后他告诉主角前往103号道路来学习如何成为一个训练师。<br /><br />首次来到103号道路时，主角会与劲敌展开对战。之后，回到小田卷博士的研究所，主角会收到神奇宝贝球。离开研究所后，主角的妈妈还会赠送给主角风速鞋。<br /><br />主角首次到达橙华市时，千里很高兴自己的孩子已经成长为一个训练师了。这时，一个叫做小光的孩子来请求千里来教自己捕捉神奇宝贝。千里给了他一只蛇纹熊和一个神奇宝贝球，并让主角陪他前去。在102号道路，他捕获了一只拉鲁拉丝，然后两人返回了道馆。千里要求主角去丰缘地方旅行，收集八个徽章。道馆的馆主分别是杜娟，藤树，铁旋，亚莎，千里，娜琪，枫和南，米可利。<br /><br />主角随后来到104号道路并要穿过橙华森林。在森林出口处，主角遇见了火岩队R或水舰队S队员。在对战后，那个队员说明了一些关于自己组织的事情。<br /><br />在卡那兹道馆，主角与馆主杜娟对战并获得了岩石徽章。之后，主角遇见了得文制造股份有限公司的社长。他说他被火岩队R/水舰队S抢劫，希望主角能帮他拿回自己的东西。主角追着敌对组织来到116号道路，发现一个叫做哈奇老人的人，他的长翅鸥也被敌对组织抢走。气愤的主角冲进了卡绿隧道，与对方展开了对战，获胜并取回了东西和长翅鸥。<br /><br />在将得文制造股份有限公司的社长的物品交换之后，玩家可以收到一个神奇宝贝领航员，并收到兹伏奇社长的一封信，需要转交给大吾。主角回到104号道路，并搭乘哈奇老人的船穿过105号水道与106号水道，来到武斗镇。主角得知兹伏奇大吾在石之洞穴中，于是向洞穴赶去。在入口处，主角收到了一个秘传技学习器05（闪光），但在打败武斗道馆前无法使用。在轻松击败道馆训练家藤树获得拳击徽章后，主角来到了石之洞穴，打开了闪光，在黑暗的洞穴内部轻松地行走，并最终找到了大吾。大吾拿到信后，为了感谢主角，赠送给主角技能学习器47（钢翼）然后告诉主角他们可能在神奇宝贝联盟再见。<br /><br />离开武斗镇后，哈奇老人带着主角越过107号水道，108号水道，109号水道，来到了凯那市。在主角下船之后发现，火岩队R/水舰队S队员封锁了海之科学博物馆的入口。当主角来到凯那造船厂时，发现库斯诺吉馆长在海之博物馆内。在主角找到库斯诺吉馆长时，他正被两个敌对组织的队员围住。在主角打败他们后，赤岩松R或水梧桐S会出现，告诉主角他们的目标并且警告主角不要再影响他们。',
	special : '<div class="special_div"><h3>道馆训练家</h3><p class="special_p">在神奇宝贝红蓝宝石版中有八个道馆。他们分别是杜娟（岩石系），藤树（格斗系），铁旋（ 电系），亚莎（炎系），千里（一般系），娜琪（飞行系），枫与南（超能力系），米可利（水系）。</p></div><div class="special_div"><h3>四天王</h3><p class="special_p">他们分别是花月（ 恶系），芙蓉（幽灵系），波妮（冰系），源治（龙系）。冠军是大吾，他擅长的属性是钢系。</p></div><div class="special_div"><h3>新进化方式</h3><p class="special_p"><li>第三世代出现了性格值不同而进化为不同分支的神奇宝贝，如刺尾虫。</li><li>第三世代出现了一只神奇宝贝进化为两只的神奇宝贝，如土居忍士进化为铁面忍者，而蜕下的壳变成了脱壳忍者。</li></p></div>',
	detail : '<li>这两个版本与绿宝石版是主系列游戏中唯一的主角父亲和母亲都有出现的版本。</li><li>这是第一个FPS达到60的神奇宝贝游戏。</li><li>红蓝绿宝石存在时间系统，时钟电路随着真实时间切换昼夜设定，但是却没有昼夜画面的区别，也没有星期系统。</li><li>红蓝绿宝石是GBA卡带中少有的带有电池的卡带（除早期GBA游戏之外，其余游戏均为芯片存储，无需电池供电），虽然游戏是报告使用芯片存储，但是其中的时钟电路使用电池供电，在电池耗尽之后会停转，而卡带的电池却不是充电电池，更换也十分麻烦，这是红蓝绿宝石游戏的弊端之一。</li><li>从红蓝宝石版开始，神奇宝贝主系列作品再也无法单机获得同期另一个版本的封面神奇宝贝。</li><li>从红蓝宝石开始，同期版本间的同一神奇宝贝画像不再存有差异。</li>',
	//添加版本名与简介
	setVNameVIntro : function() {
						//添加节点h1、hr、div
						var h1 = document.createElement('h1');
						var hr = document.createElement('hr');
						var div = document.createElement('div');
						//设置h1、div的内容
						var h1_text = document.createTextNode(version_3_1.versionName);
						h1.appendChild(h1_text);
						div.innerHTML = version_3_1.introduction;
						//添加h1、hr、div到 '#main_left'
						$('#main_left').append(h1);
						$('#main_left').append(hr);
						$('#main_left').append(div);
					},
	setGProce : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var p = document.createElement('p');

					var h2_text = document.createTextNode('游戏流程');
					h2.appendChild(h2_text);
					p.innerHTML = version_3_1.gameProcedure;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(p);
				},
	setSpecial : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var div = document.createElement('div');

					var h2_text = document.createTextNode('特性');
					h2.appendChild(h2_text);
					div.innerHTML = version_3_1.special;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(div);
				},
	setDetail : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var ul = document.createElement('ul');

					var h2_text = document.createTextNode('细节');
					h2.appendChild(h2_text);
					ul.innerHTML = version_3_1.detail;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(ul);
				},
	setImage : function() {
					$('#main_right').html('<div class="pic_title"><p>神奇宝贝红宝石版</p><p>ポケットモンスター ルビー</p><p>Pokémon Ruby Version</p></div><img src="/static/images/history/红宝石.png" /><div class="pic_title"><p>神奇宝贝蓝宝石版</p><p>ポケットモンスター サファイア</p><p>Pokémon Sapphire Version</p></div><img src="/static/images/history/蓝宝石.png" /><dl><dt>平台</dt><dd>Game Boy Advance</dd><dt>分类</dt><dd>RPG</dd><dt>玩家人数</dt><dd>最多4人</dd><dt>通讯机能</dt><dd>通信链接，カードｅリーダー</dd><dt>开发商</dt><dd>Game Freak</dd><dt>发行商</dt><dd>任天堂</dd></dl>')
				},
	initialize : function() {
					version_3_1.setVNameVIntro();
					version_3_1.setGProce();
					version_3_1.setSpecial();
					version_3_1.setDetail();
					version_3_1.setImage();
				}
}

var version_3_2 = {
	versionName : '神奇宝贝绿宝石版',
	introduction : '<p><span class="big">神奇宝贝绿宝石版</span>（日文：<span class="big">ポケットモンスター エメラルド</span>，英文：<span class="big">Pokémon Emerald Version</span>）是第三世代中的第五部，也是最后一部主系列游戏。</p><p>在2005年，它是北美销量第二高的电子游戏。它也是Game Boy Advance上销量第三的游戏，仅仅输给红蓝宝石版与火红叶绿版。绿宝石是Game Boy系列掌机上的最后一款主系列游戏。</p>',
	special : '<div class="special_div"><p class="special_p"><li>原作中由豪力帮助玩家搬家的情节修改为过动猿帮助玩家搬家。</li><li>道馆迷宫重新设计。</li><li>冠军的房间的颜色将紫色变更为了蓝色。</li></p></div><div class="special_div"><h3>主线变更</h3><p class="special_p"><li>火岩队与水舰队都变为了敌对组织。</li></p></div><div class="special_div"><h3>游戏变更</h3><p class="special_p"><li>固拉多与盖欧卡的捕获地点变更，等级提升。</li><li>火岩队与水舰队本部的入口在击败四天王后才开启。</li><li>将前作的对战塔扩大为新的对战开拓区。</li></p></div><div class="special_div"><h3>人物变更</h3><p class="special_p"><li>改变了小遥和祐树的衣着。</li><li>将神奇宝贝联盟冠军由大吾替换为前水系道馆训练家米可利，水系道馆训练家则替换为米可利的老师亚当。</li><li>前神奇宝贝联盟冠军大吾在主角成为新一届冠军后出现在流星瀑布深处，主角可以挑战一次。</li></p></div>',
	detail : '<li>神奇宝贝绿宝石版是第一个可以与道馆训练家再战的版本。</li><li>绿宝石版也是第一个可以单机获得其他世代初学者神奇宝贝的版本。</li><li>绿宝石虽然是红蓝宝石的资料片，但是游戏系统部分采用了火叶修改后的系统。</li><li>红蓝绿宝石存在时间系统，时钟电路随着真实时间切换昼夜设定，但是却没有昼夜画面的区别，也没有星期系统。</li><li>红蓝绿宝石是GBA卡带中少有的带有电池的卡带（除早期GBA游戏之外，其余游戏均为芯片存储，无需电池供电），虽然游戏是报告使用芯片存储，但是其中的时钟电路使用电池供电，在电池耗尽之后会停转，而卡带的电池却不是充电电池，更换也十分麻烦，这是红蓝绿宝石游戏的弊端之一。</li>',
	//添加版本名与简介
	setVNameVIntro : function() {
						//添加节点h1、hr、div
						var h1 = document.createElement('h1');
						var hr = document.createElement('hr');
						var div = document.createElement('div');
						//设置h1、div的内容
						var h1_text = document.createTextNode(version_3_2.versionName);
						h1.appendChild(h1_text);
						div.innerHTML = version_3_2.introduction;
						//添加h1、hr、div到 '#main_left'
						$('#main_left').append(h1);
						$('#main_left').append(hr);
						$('#main_left').append(div);
					},
	setSpecial : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var div = document.createElement('div');

					var h2_text = document.createTextNode('特性');
					h2.appendChild(h2_text);
					div.innerHTML = version_3_2.special;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(div);
				},
	setDetail : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var ul = document.createElement('ul');

					var h2_text = document.createTextNode('细节');
					h2.appendChild(h2_text);
					ul.innerHTML = version_3_2.detail;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(ul);
				},
	setImage : function() {
					$('#main_right').html('<div class="pic_title"><p>神奇宝贝绿宝石版</p><p>ポケットモンスター エメラルド</p><p>Pokémon Emerald Version</p></div><img src="/static/images/history/绿宝石.png" /><dl><dt>平台</dt><dd>Game Boy Advance</dd><dt>分类</dt><dd>RPG</dd><dt>玩家人数</dt><dd>最多5人</dd><dt>通讯机能</dt><dd>通信链接、Wireless Adapter</dd><dt>开发商</dt><dd>Game Freak</dd><dt>发行商</dt><dd>任天堂</dd></dl>')
				},
	initialize : function() {
					version_3_2.setVNameVIntro();
					version_3_2.setSpecial();
					version_3_2.setDetail();
					version_3_2.setImage();
				}
}

var version_3_3 = {
	versionName : '神奇宝贝火红叶绿版',
	introduction : '<p><span class="big">神奇宝贝火红版</span>（日文：<span class="big">ポケットモンスターファイアレッド</span>，英文：<span class="big">Pokémon FireRed Version</span>）与<span class="big">神奇宝贝叶绿版</span>（日文：<span class="big">ポケットモンスターリーフグリーン</span>，英文：<span class="big">Pokémon LeafGreen Version</span>）是神奇宝贝第三世代主系列游戏。这是红绿版的重制版本。</p>',
	special : '<div class="special_div"><h3>新增</h3><p class="special_p"><li>新增战斗探测器——可以和户外训练家重对战。</li><li>新增语音探测仪——记录主要角色的资料。</li><li>新地点：七岛，主角可以在这里捕捉同世代的红蓝宝石及绿宝石版很难获得的第二世代的神奇宝贝。<ul><li>火箭队的剧情延伸到七岛。</li><li>在二之岛可以让初学者神奇宝贝学习必杀技。</li><li>二之岛有一间游戏中心。</li><li>神奇宝贝培育可以在四之岛上进行。</li><li>七岛的剧情结束后，四天王的队伍会增加第二世代的神奇宝贝。</li></ul></li><li>可以在捕获城都地方的传说神奇宝贝雷公、炎帝或水君，但只能根据选择的初学者神奇宝贝而捕捉到对应的一只，分别为妙蛙种子——炎帝，小火龙——水君，杰尼龟——雷公。</li></p></div><div class="special_div"><h3>变更</h3><p class="special_p"><li>玩家可以选择男或女主角。</li><li>继承了第二世代、第三世代新增的的特性、属性、携带道具、技能等系统。</li><li>在进入某些地点如常磐森林、地鼠洞时，会有一个全屏的地点绘图显示。</li><li>小磁怪与三合一磁怪增加第二属性：钢系。</li><li>某些第一世代神奇宝贝可以进化为第二世代或第三世代新增的神奇宝贝，例如吉利蛋可以进化为幸福蛋，但必须在满足获得全国图鉴的条件下才能进行。</li><li>与野生传说神奇宝贝闪电鸟、急冻鸟、火焰鸟、超梦战斗时，增加了专属的背景音乐。</li><li>在七之岛的变化洞窟可以利用E卡刷卡器配合带有E卡磁条的神奇宝贝卡片，捕捉到部分金银版的神奇宝贝，这也是在第三世代唯一能够捕捉到部分野生第二世代神奇宝贝的方法。</li><li>非日语版，与男性NPC对话文字是蓝色；女NPC是粉红色。</li><li>所有四天王对战时都使用道馆训练家的背景音乐。</li></p></div>',
	detail : '<li>火红叶绿版是第一款重制主系列游戏。</li>li>火红叶绿版与第一世代游戏的剧情没有牵涉传说中的神奇宝贝。</li><li>火红叶绿版与第一世代游戏并没有使用传说中的神奇宝贝作为游戏封面。</li><li>火红叶绿版的日版名称没有像原赤绿版一样使用日文汉字，而是直接使用英语音译的片假名，但是为了表示是复刻游戏，标上了赤、绿字样。</li><li>谣传藏着装着梦幻的神奇宝贝球的货车，还在圣安奴号附近。隐藏的道具是釜炎仙贝。</li><li>火红叶绿版与第一世代游戏一样，没有时间系统，没有昼夜设定。<ul><li>这样导致所有需要昼夜作为进化条件的神奇宝贝（例如伊布进化为月精灵），这些神奇宝贝需要传输至红蓝绿宝石内进化，而且时钟必须能够行走。</li></ul></li>',
	//添加版本名与简介
	setVNameVIntro : function() {
						//添加节点h1、hr、div
						var h1 = document.createElement('h1');
						var hr = document.createElement('hr');
						var div = document.createElement('div');
						//设置h1、div的内容
						var h1_text = document.createTextNode(version_3_3.versionName);
						h1.appendChild(h1_text);
						div.innerHTML = version_3_3.introduction;
						//添加h1、hr、div到 '#main_left'
						$('#main_left').append(h1);
						$('#main_left').append(hr);
						$('#main_left').append(div);
					},
	setSpecial : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var div = document.createElement('div');

					var h2_text = document.createTextNode('特性');
					h2.appendChild(h2_text);
					div.innerHTML = version_3_3.special;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(div);
				},
	setDetail : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var ul = document.createElement('ul');

					var h2_text = document.createTextNode('细节');
					h2.appendChild(h2_text);
					ul.innerHTML = version_3_3.detail;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(ul);
				},
	setImage : function() {
					$('#main_right').html('<div class="pic_title"><p>神奇宝贝火红版</p><p>ポケットモンスター ファイアレッド</p><p>Pokémon FireRed Version</p></div><img src="/static/images/history/火红.png" /><div class="pic_title"><p>神奇宝贝叶绿版</p><p>ポケットモンスター リーフグリーン</p><p>Pokémon LeafGreen Version</p></div><img src="/static/images/history/叶绿.png" /><dl><dt>平台</dt><dd>GBA</dd><dt>分类</dt><dd>RPG</dd><dt>玩家人数</dt><dd>最多5人</dd><dt>通讯机能</dt><dd></dd><dt>开发商</dt><dd>Game Freak</dd><dt>发行商</dt><dd>任天堂</dd></dl>')
				},
	initialize : function() {
					version_3_3.setVNameVIntro();
					version_3_3.setSpecial();
					version_3_3.setDetail();
					version_3_3.setImage();
				}
}

var version_4_1 = {
	versionName : '神奇宝贝钻石珍珠版',
	introduction : '<p><span class="big">神奇宝贝钻石版</span>（日文︰<span class="big">ポケットモンスターダイヤモンド</span>，英文︰<span class="big">Pokémon Diamond Version</span>）与<span class="big">神奇宝贝珍珠版</span>（日文︰<span class="big">ポケットモンスターパール</span>，英文︰<span class="big">Pokémon Pearl Version</span>）是第四世代最初的两个版本，也是任天堂在任天堂DS上推出的最早的两部神奇宝贝游戏。玩家的冒险将在神奥地方的双叶镇展开</p>',
	gameProcedure : '游戏开始时主角会在一档新闻节目中看到红色暴鲤龙。主角随后将前往他或她最好的朋友的房子，并和他一同前去心齐湖，看看湖中是否有生活类似的神奇宝贝。',
	special : '<div class="special_div"><h3>新要素</h3><p class="special_p">钻石珍珠中改进了时间系统。游戏内画面的明暗度会随着游戏的时间变化，出现的神奇宝贝也会依据时间的不同而不同。时间分为三个大段，分别为清晨，白天与夜晚，画面的明暗度与出现的神奇宝贝都是依据这三个时间段来区分的。</p><p class="special_p">钻石珍珠版还有一个特色，就是神奇宝贝表。</p><p class="special_p">从这个版本开始，使用了一个新的对战区分系统。在这个新的系统中，物理技能和特殊技能之分不再依据属性而定，而是每个技能都有各自的区分。例如，在第三世代之前，炎系、电系与水系的技能全部都为特殊攻击，格斗系的技能全部为物理攻击，但是从这个版本开始，炎系与水系都出现了自己的物理攻击技能，格斗系出现了自己的特殊攻击技能，如爆炎电击，喷射水柱，伏特攻击与波导弹，还有一些旧版技能的属性被更改了。</p><p class="special_p">这个版本中，三只初学者神奇宝贝的最终进化型态都拥有两个属性，并且都能通过升级习得反克制原来克制自己的神奇宝贝的技能。如土台龟可以习得克制烈焰猴的地震，烈焰猴可以习得克制帝王拿波的近身打，帝王拿波可以习得克制土台龟的冲钻。</p></div><div class="special_div"><h3>华丽大赛</h3><span class="specialWord">主条目︰超级华丽大赛</span><br />在钻石珍珠版中，华丽大赛的系统进行了升级，变更为超级华丽大赛。</div><div class="special_div"><h3>道馆</h3><p class="special_p">神奥地方有八位与以前完全不同的道馆训练家，他们分别是钢铁道馆的瓢太（擅长岩石系），百代道馆的菜种（擅长草系），帷幕道馆的阿李（擅长格斗系），湿原道馆的吉宪（擅长水系），缘之道馆的梅丽莎（擅长幽灵），水脉道馆的东钢（擅长钢系），切锋道馆的小菘（擅长冰系），滨海道馆的电磁（擅长电系）。</p></div><div class="special_div"><h3>四天王</h3><p class="special_p">神奥联盟也有四位新的四天王，他们分别是阿柳（擅长虫系），菊野（擅长地上系），大叶（擅长炎系），悟松（擅长超能力）。神奥地方的冠军则为竹兰，她没有一个特别突出的擅长属性。</p></div><div class="special_div"><h3>新神奇宝贝</h3><p class="special_p">神奇宝贝钻石珍珠新增的神奇宝贝一共有107种，总数达到了493只。其中非传说中的神奇宝贝仅有6种没有进化型，伊布有了2种新的进化型，3D龙II、朝北鼻等神奇宝贝都出现了新的进化型。</p><p class="special_p">在钻石珍珠版中，神奥图鉴的总数为150只。部分第四世代神奇宝贝并没有加入神奥图鉴。</p><p class="special_p">新神奇宝贝在2004年的剧场版裂空的访问者 代欧奇希斯中最早开始出现，这只神奇宝贝是小卡比兽。</p><p class="special_p">2005年继续有新的神奇宝贝在梦幻与波导的勇者 路卡利欧中出现，为路卡利欧，爱哭树，魔尼尼和玛狃拉。</p><p class="special_p">2006年，在沧海的王子 玛纳霏中出现了许多神奥地方新增的神奇宝贝，如玛纳霏，小球飞鱼，泳气鼬和聒噪鸟。很快，剩余的新神奇宝贝全部在钻石珍珠版游戏中登场。</p></div><div class="special_div"><h3>新进化方式</h3><p class="special_p">第四世代出现了在特定地点等级提升进化的神奇宝贝，如叶精灵和冰精灵。</p><p class="special_p">第四世代出现了在习得特定技能进化的神奇宝贝，如梅卡阳玛和巨蔓藤。</p><p class="special_p">第四世代出现了需要队伍里存在特定神奇宝贝进化的神奇宝贝，如巨翅飞鱼。</p><p class="special_p">第四世代出现了需要特定性别进化的神奇宝贝，如蜂后和绅士蛾。</p></div>',
	detail : '<li>神奇宝贝钻石珍珠版是主系列游戏中：<ul><li>第一次主角与劲敌对战时，劲敌的神奇宝贝不是Lv 5。</li><li>神奇宝贝博士的研究所不在主角的家乡。</li><li>三只初学者神奇宝贝进化后都获得第二属性。</li></ul></li><li>神奇宝贝钻石珍珠版的时钟系统是第一次使用主机自带时钟而非卡带自带时钟电路，这种设计可以避免因电池耗尽导致的时钟停摆。<ul><li>但是游戏的时间完全依赖于主机时钟，因此可以通过调整主机的时钟可以任意控制游戏的时间。</li></ul></li><li>神奇宝贝钻石珍珠版是第一款对应WIFI功能的神奇宝贝主系列的游戏，也是第一款接入互联网的神奇宝贝主系列游戏。<ul><li>神奇宝贝钻石珍珠版也是第一款可以通过互联网而不是只能通过人工配信活动神奇宝贝的游戏。</li></ul></li><li>神奥联盟的四天王不全是用擅长属性的神奇宝贝，这个问题在白金版因图鉴扩充而改善。</li><li>从钻石珍珠版开始，玩家需要删除先前的游戏记录才可以开始新记录。</li><li>有些需要通讯交换才可以进化的神奇宝贝成了野生神奇宝贝。</li><li>神奇宝贝钻石珍珠版是联动性最强的游戏，可与十七款游戏联动。</li>',
	//添加版本名与简介
	setVNameVIntro : function() {
						//添加节点h1、hr、div
						var h1 = document.createElement('h1');
						var hr = document.createElement('hr');
						var div = document.createElement('div');
						//设置h1、div的内容
						var h1_text = document.createTextNode(version_4_1.versionName);
						h1.appendChild(h1_text);
						div.innerHTML = version_4_1.introduction;
						//添加h1、hr、div到 '#main_left'
						$('#main_left').append(h1);
						$('#main_left').append(hr);
						$('#main_left').append(div);
					},
	setGProce : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var p = document.createElement('p');

					var h2_text = document.createTextNode('游戏流程');
					h2.appendChild(h2_text);
					p.innerHTML = version_4_1.gameProcedure;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(p);
				},
	setSpecial : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var div = document.createElement('div');

					var h2_text = document.createTextNode('特性');
					h2.appendChild(h2_text);
					div.innerHTML = version_4_1.special;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(div);
				},
	setDetail : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var ul = document.createElement('ul');

					var h2_text = document.createTextNode('细节');
					h2.appendChild(h2_text);
					ul.innerHTML = version_4_1.detail;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(ul);
				},
	setImage : function() {
					$('#main_right').html('<div class="pic_title"><p>神奇宝贝钻石版</p><p>ポケットモンスター ダイヤモンド</p><p>Pokémon Diamond Version</p></div><img src="/static/images/history/钻石.jpg" /><div class="pic_title"><p>神奇宝贝珍珠版</p><p>ポケットモンスター パール</p><p>Pokémon Pearl Version</p></div><img src="/static/images/history/珍珠.jpg" /><dl><dt>平台</dt><dd>任天堂DS</dd><dt>分类</dt><dd>RPG</dd><dt>玩家人数</dt><dd>1~4人</dd><dt>通讯机能</dt><dd>任天堂Wi-Fi连接</dd><dt>开发商</dt><dd>Game Freak</dd><dt>发行商</dt><dd>任天堂</dd></dl>')
				},
	initialize : function() {
					version_4_1.setVNameVIntro();
					version_4_1.setGProce();
					version_4_1.setSpecial();
					version_4_1.setDetail();
					version_4_1.setImage();
				}
}

var version_4_2 = {
	versionName : '神奇宝贝白金版',
	introduction : '<p><span class="big">神奇宝贝白金版</span>（日文：<span class="big">ポケットモンスター プラチナ</span>，英文：<span class="big">Pokémon Platinum Version</span>）是神奇宝贝主系列的第三款DS游戏，封面形象为骑拉帝纳的起源型态。玩家将与神奇宝贝一起，从双叶镇出发，再度展开贯穿整个神奥地方，甚至是破格的世界的冒险。</p>',
	special : '<div class="special_div"><h3>新的故事</h3><p class="special_p"><li>在天冠山顶出现了时间与空间概念与现实世界完全不同的“破格的世界”，其中将会出现骑拉帝纳的起源型态。</li><li>主角与劲敌将会在201号道路遇到山梨博士及他的助手，并得到初学者神奇宝贝及神奇宝贝图鉴。</li><li>主角和劲敌会在心齐湖见到银河队首领赤日。</li><li>男女主角及劲敌将新装登场，并配备最新款式的神奇宝贝表。</li><li>邪恶组织银河队将会有更大的野心支配世界，在百代市和帷幕市的银河队建筑物和钻石珍珠版有很大不同，而且还有一名博士为银河队工作。</li><li>在天冠山顶，帝牙卢卡与帕路奇犽将同时被唤醒，骑拉帝纳也会出现在这个世界。</li><li>代号大帅的国际警察将最初在祝庆市与主角相遇，他还会出现在山谷间的发电场，并化装潜入银河队基地。</li><li>在剧情发展中，博士会送给主角技能学习器27报恩，在帷幕市可以得到3D龙。</li></p></div><div class="special_div"><h3>神奇宝贝</h3><p class="special_p"><li>在破格的世界出现的骑拉帝纳起源型态特性漂浮，体重650.0kg，身高6.9m。而在破格的世界之外，骑拉帝纳将一般以另类型态出现。原始型态的骑拉帝纳可以学到泥汤、痛恨、龙鳞之怒等技能。</li><li>洁咪在传入白金版后，可以通过在苑之镇得到的葛拉西蒂亚花转换为天空型态，天空型态特性为天恩，特攻与速度将会提高，身高0.4m，体重5.2kg。可以学到的绝招包括空气砍、叶暴风、电光一闪等。在夜晚或冰冻状态下，洁咪将不能变成天空型态。</li><li>把在骑拉帝纳与冰空的花束 洁咪预售期间得到的等级100雷吉奇卡斯传入白金版后，可以激活新的地点并可在其中遇到雷吉洛克、雷吉斯奇鲁、雷吉艾斯。</li><li>洛托姆新增五种新的型态，相关道具在9月28日至11月4日通过Wi-Fi配信。</li><li>催眠术的命中率由70变为60。</li><li>睡眠状态的持续时间由2～5回合变更为1～4回合（在美版中则是在钻石珍珠版变更）。</li><li>阿尔宙斯正式登场。</li><li>部分神奇宝贝技能习得等级提高。</li><li>增加技能教学。</li><li>道馆训练家小菘的恰雷姆、电磁的双尾怪手和章鱼桶被更换，这使得玩家不会再遇见馆主使用的神奇宝贝不是专长属性的情况。</li><li>切锋神殿的雷吉奇卡斯等级由70变更为1。</li><li>严酷山的席多蓝恩等级由70变更为50。</li><li>重力不再影响光学合成、晨光、月光的HP恢复量。</li><li>急速转变的错误修正。</li></p></div><div class="special_div"><h3>新要素</h3><p class="special_p"><li>神奥图鉴将增加至210种，其中冰鬼护编号为207，雪妖女编号为208，骑拉帝纳编号为210。</li><li>百代市、水脉图书馆、单车路都将会有全新的面貌，神奥地方从最南端的双叶镇到最北端的切锋市都可见到积雪。在苑之镇南端会有漂亮的入口。</li><li>各地道馆都会有不同的姿态和谜题（钢铁道馆除外），其中在百代道馆玩家需要破解花时计才可以挑战道馆训练家菜种，在帷幕道馆则需要移开拳击袋，而在缘之道馆，玩家需要借助探照灯才能前进。另外，道馆挑战顺序变更，缘之道馆的挑战顺序变更在帷幕道馆与湿原道馆之前，成为第三个道馆。相应的，遗迹徽章变更为第三个徽章。</li><li>主角和劲敌将会在战斗区遭遇一场与滨海道馆训练家电磁和四天王大叶的双打对战。</li><li>沟通广场将可以允许包括波加曼、小火焰猴及它们的进化型在内的神奇宝贝进入。</li><li>新增对决场，允许玩家再战道馆训练家与之前组队的训练家。</li></p></div><div class="special_div"><h3>对战开拓区</h3><p class="special_p"><li>在战斗区出现了神奇宝贝对战的最高峰对战开拓区，拥有包含对战塔及对战工厂在内的5个对战设施。</li><li>对战工厂和绿宝石版中一样是神奇宝贝知识的试炼，其中玩家可以租借神奇宝贝参加对战，并允许在一场对战结束后交换神奇宝贝。</li><li>在对战开拓区的商店中，玩家可以购买更多有用的物品，还可以购买刮刮卡，刮开后可以获得各种道具和树果。</li></p></div><div class="special_div"><h3>通信新机能</h3><p class="special_p"><li>GTS全面升级为全球终端，在交换完成后，玩家可以收到电子邮件的通知。</li><li>新的重要道具对战记录器将可以将整个对战过程录像，并通过Wi-Fi发给朋友。在全球终端中还可以下载并评价一场对战。</li><li>玩家可以将神奇宝贝箱子拍照并发给朋友欣赏。</li><li>全新的Wi-Fi广场可以允许20人同时在线，其中有吞吞吞食兽、滚滚魔尼尼、蹦蹦果然翁等迷你游戏，其中最多支持4人同时语音聊天。</li><li>玩家每天可以在Wi-Fi广场游玩的时间会有所限制，在迷你游戏中获得好成绩后可以得到各种小玩具。</li><li>在短距离无线连接中，无线通讯中，玩家可以和朋友一起把神奇宝贝蛋放在一起，之后每个玩家可以随机得到其中一颗蛋。</li></p></div>',
	detail : '<li>白金版修复了钻石珍珠版中四天王房间内的冲浪漏洞。</li>',
	//添加版本名与简介
	setVNameVIntro : function() {
						//添加节点h1、hr、div
						var h1 = document.createElement('h1');
						var hr = document.createElement('hr');
						var div = document.createElement('div');
						//设置h1、div的内容
						var h1_text = document.createTextNode(version_4_2.versionName);
						h1.appendChild(h1_text);
						div.innerHTML = version_4_2.introduction;
						//添加h1、hr、div到 '#main_left'
						$('#main_left').append(h1);
						$('#main_left').append(hr);
						$('#main_left').append(div);
					},
	setSpecial : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var div = document.createElement('div');

					var h2_text = document.createTextNode('特性');
					h2.appendChild(h2_text);
					div.innerHTML = version_4_2.special;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(div);
				},
	setDetail : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var ul = document.createElement('ul');

					var h2_text = document.createTextNode('细节');
					h2.appendChild(h2_text);
					ul.innerHTML = version_4_2.detail;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(ul);
				},
	setImage : function() {
					$('#main_right').html('<div class="pic_title"><p>神奇宝贝白金版</p><p>ポケットモンスター プラチナ</p><p>Pokémon Platinum Version</p></div><img src="/static/images/history/白金.png" /><dl><dt>平台</dt><dd>任天堂DS</dd><dt>分类</dt><dd>RPG</dd><dt>玩家人数</dt><dd>1~5人</dd><dt>通讯机能</dt><dd>任天堂Wi-Fi连接</dd><dt>开发商</dt><dd>Game Freak</dd><dt>发行商</dt><dd>任天堂/神奇宝贝股份公司</dd></dl>')
				},
	initialize : function() {
					version_4_2.setVNameVIntro();
					version_4_2.setSpecial();
					version_4_2.setDetail();
					version_4_2.setImage();
				}
}

var version_4_3 = {
	versionName : '神奇宝贝心金魂银版',
	introduction : '<p><span class="big">神奇宝贝心金版</span>（日文：<span class="big">ポケットモンスター ハートゴールド</span>，英文：<span class="big">Pokémon HeartGold Version</span>）与<span class="big">神奇宝贝魂银版</span>（日文：<span class="big">ポケットモンスター ソウルシルバー</span>，英文：<span class="big">Pokémon SoulSilver Version</span>）是金银版在任天堂DS上的重制游戏。</p><p>和神奇宝贝火红叶绿版发生在关都地方对应，心金魂银版的故事发生在城都地方，主角从若叶镇开始冒险。虽然游戏有了很多的新特性，但主线剧情依然与金银版类似，一些原来水晶版独有的要素也加入到了心金魂银中。就像火红叶绿版可以与红、蓝、绿宝石版通讯交换，心金魂银版也可以和钻石、珍珠、白金版通讯交换，来获得城都、关都地方不存在的神奇宝贝，比如草苗龟、小火焰猴与波加曼。</p><p>虽然水晶版已经加入了女主角，但心金魂银版中女主角更换为琴音。无论玩家选择男主角还是女主角，另一性别的主角都会作为游戏中的登场人物，就像红蓝绿宝石版、珍钻白金版一样。</p><p>神奇宝贝心金魂银版于2009年9月12日在日本发售，2010年2月4日在韩国，3月14日在北美，3月25日在大洋洲，3月26日在欧洲发售（比利时、荷兰、卢森堡因报告故障推迟到2010年4月2日发售）。</p>',
	special : '<div class="special_div"><h3>图像和音乐变化</h3><p class="special_p"><li>男女主角有了新的设计，分别为小响和琴音。</li><li>游戏音乐进行了重新编曲，以适应DS平台。在游戏中可以得到GB音乐盒以切换回金银版的音乐风格。</li><li>游戏中大量使用音效，例如水流声，风吹声，和主角走到草丛中的声效。</li><li>神奇宝贝装置有了全新的设计，并可根据玩家的选择更换界面样式。</li><li>城都图鉴有了略微的变化，加入了一些第四世代出现的神奇宝贝进化型。</li><li>和火红叶绿版一样，进入特定的地点会显示出过场画面，一些地方的过场画面会随着时间的不同而有所不同，一些地方还会显示在这个地点中出现的某种神奇宝贝。</li><li>火箭队队员有了新的设计，并有了新的4名火箭队干部，分别为阿波罗、雅典娜、拉姆达和兰斯。就像银河队干部的名字和行星相关，火箭队干部的名字和现实世界的火箭相关。</li><li>洛奇亚和凤王有了各自的对战音乐，雷公、炎帝、水君则使用在水晶版中的对战音乐的重制版本。</li><li>之前的树果树全部变为圆柑果实树。</li><li>像白金版一样，道馆训练家、四天王、劲敌和小智都有了动态的对战图像和引入画面。许多道馆也有了新的设计和新的谜题。</li><li>岩石粉碎从技能学习器成为了秘传技学习器，清除浓雾不再是秘传技学习器，相应的秘传技学习器05成为了潮旋。</li><li>攀登岩石和钻石、珍珠、白金版一样为秘传技学习器08，并且需要常磐道馆的绿色徽章才可以在对战外使用。同样一些洞窟和悬崖可以通过攀登到达。</li><li>磁悬浮列车的轨道可以在32号道路以及满金市看到。</li><li>朋友公园位于原先浅红市的野生原野区所在地。</li><li>玩家可以看到自己所拥有的关都徽章，在金银版之中只能看到城都的徽章。</li><li>圆朱市和湛蓝市，原先有相同的主题音乐，现在使用了这个主题音乐的不同重制版本。</li><li>关都的一些音乐有改变，月见山和双子岛分别变为了与互连洞和冰雪通路相同的音乐。华蓝市、浅红市、红莲岛及24号道路，不再使用与尼比市、彩虹市、金黄市、3号道路相同的音乐，转而回到红绿蓝黄版和火红叶绿版中所使用的音乐。然而2号道路的音乐与任何前作均不相同；在金银水晶中使用的的常磐森林音乐的重制版，在红绿蓝黄版和火红叶绿中则是1号道路的音乐，在心金魂银版中则使用了3号道路的音乐。</li><li>可以通过电梯登上满金收讯塔的观景台，替换掉了第二录音室。</li><li>在若叶镇和14号道路出现了风力发电机。</li><li>在对战外观察神奇宝贝的能力值时，会有蓝色标记因性格影响降低的能力值，红色标记增加的能力值。</li></p></div><div class="special_div"><h3>地点变化</h3><p class="special_p"><li>空木研究所有了第二层，其中住着空木博士一家，原先的房子则住着琴音/小响一家。</li><li>水晶版中浅黄市西部的对战塔，成为了和白金版相同的对战开拓区。</li><li>在湛蓝市西部，有了两条新的道路，分别为47号道路和48号道路，通往野生原野区和埋藏之塔及断崖洞窟。</li><li>白银山变得比从前更大，常磐森林恢复了原貌。</li><li>华蓝洞和双子岛保持了和火红叶绿版一样的存在（尽管夏伯依然需要在双子岛挑战），并且可以与其中的传说中的神奇宝贝对战。之前在冠军之路和灯火山出现的火焰鸟，心金魂银版中出现在了白银山。</li><li>金黄市的格斗道场与神奥地方的对决场类似，可以和道馆训练家再度交战。</li></p></div><div class="special_div"><h3>游戏流程变化</h3><p class="special_p"><li>和皮卡丘版中的皮卡丘一样，全部493种神奇宝贝都可以跟随在主角身后，闪光也会得到保留，玩家可以按A键与神奇宝贝交流并查看心情，在对战时神奇宝贝会从身旁而非宝贝球内登场。除非一些特定的情况，例如骑着自行车，或者较大体积的神奇宝贝进入较小的空间内。</li><li>在两个版本中都可以遇到凤王与洛奇亚，并且只有在心金版与凤王，在魂银版与洛奇亚对战才可以参加神奇宝贝联盟，这点和红、蓝、绿宝石版，钻石、珍珠、白金版类似。在原作中，并不需要和凤王或洛奇亚对战。</li><li>圆朱舞场的5名舞姬在游戏中多次登场，并会寻求主角的帮助。在从空木博士那里得到掌门球之后，每位舞姬会和主角对战，在通过对战之后，她们会前往铃铃塔HG或漩涡列岛SS，通过跳舞来分别召唤出凤王或洛奇亚。</li><li>另外，在原作中，主角需要在圆朱舞场和5名舞姬对战并获得秘传技学习器03（冲浪）。在心金魂银版中，则是和一位闯进圆朱舞场的火箭队队员交战。</li><li>钢铁和圆柑果实以及相应的神奇宝贝球都会在心金魂银版出现，圆柑果实可以放到圆柑盒里。在水晶版中可以请求钢铁同时制作多种宝贝球的设定并未加入心金魂银版中。</li><li>彩虹羽毛和银色羽毛只能使主角分别进入铃铃塔和漩涡列岛，只有在获得透明铃铛或海鸣铃铛之后才能分别使舞姬召唤出凤王与洛奇亚。但由于心金版中无法获得海鸣铃铛，魂银版中无法获得透明铃铛。在进入殿堂后分别与洛奇亚HG或凤王SS对战并不需要铃铛道具。</li><li>与原作不同的是，在完成某些特定任务之后才可以继续游戏，比如获得神奇齿轮的收讯卡之后才可以挑战小茜。</li><li>愤怒馒头成为了重要道具。</li><li>将官方配送的异色皮丘带到桐树林神社可以发生事件，出现刺刺耳皮丘。</li><li>神奇宝贝储存系统、背包、队伍的界面，以及游戏菜单的操作，可以完全使用DS的触摸屏。</li><li>其它地区的传说中的神奇宝贝，包括丰缘地方的盖欧卡和固拉多可以在心金魂银版中获得。在将固拉多和盖欧卡传入同一个游戏中带给大木博士后，还可以获得烈空坐。在和大吾交谈后，拉帝亚斯HG或拉帝欧斯SS就会在关都地方漫游。火焰鸟、急冻鸟、闪电鸟可以在关都的特定地点遇到，超梦则会出现在华蓝洞。</li><li>在和阿尔宙斯有关的事件中会有竹兰登场。把阿尔宙斯带到阿露福遗迹，接着可以进入神都遗迹，并获得等级为1的帝牙卢卡、帕路奇犽或骑拉帝纳。由于白金玉魂不能带到神奇宝贝上通讯交换，所以这是在心金魂银版中获得白金玉魂及起源型态骑拉帝纳的唯一方式。</li><li>迷之水晶是和无限船票类似的道具，可以获得另一只无限神奇宝贝（心金版为拉帝欧斯，魂银版为拉帝亚斯）。</li><li>使用铁头功撞击特定的树木，依然可以遇到野生神奇宝贝，不过在心金魂银版中，获得全国图鉴后还可遇到丰缘和神奥地方的神奇宝贝。</li><li>将命运的相遇的洁咪带到满金市的花店，可以获得葛拉西蒂亚花。</li><li>在水晶版中登场的米那君同样在心金魂银版中出现，并追逐水君。</li><li>在满金市西北方有了新的竞技项目神奇宝贝全能竞技赛，和其它游戏中华丽大赛有所类似。</li><li>和火红叶绿版附送GBA无线通讯器类似，心金魂银版会附送神奇宝贝球形状的神奇计步器，可以和游戏连接，并在其中存放一只神奇宝贝。带着神奇计步在走路的途中可以给神奇宝贝增加经验值和亲密度。一些神奇宝贝可以在神奇计步中收服并传入游戏中。</li><li>心金魂银版中的树果，可以用碎片和桔梗市和浅红市的魔术师交换得到，在神奇计步器中得到，隐藏在地面，或者妈妈帮忙购买之后送到友好商店。由于一些树果并不能直接得到，所以需要像火红叶绿版中一样从其它版本交换。虽然树果不能像在丰缘和神奥地方一样在地面生长，但可以通过树果种植器使树果生长，并用杰尼龟的喷水器来浇水。</li><li>风速鞋可以在吉花市获得，并可在菜单中选中，然后无需按住B键即可使用。登记的重要道具（原先按Y或SELECT键使用的道具），也可在触摸屏直接选择。心金魂银版中可以登记2个重要道具。</li><li>由于没有战斗探测器，神奇齿轮的电话功能可以无限多次地请求训练家对战，不过可以再度对战的训练家以时间和星期而定。</li><li>打败小智后，关都和丰缘的初学者神奇宝贝可以分别从大木博士和大吾获得。</li><li>在城都和关都出现的摄影师可以为训练家和队伍，以及道馆训练家和一些名人合影。</li><li>活动事件限定的雪拉比可以使原火箭队首领和原常磐道馆训练家坂木出现。</li><li>许多神奇宝贝可以学到新的技能，比如波克比可以通过遗传习得神通力。<li>在获得16枚徽章之后，可以获得GB音乐盒，以切换背景音乐的风格，新的音乐例如47号道路和48号道路的音乐，也有了GB风格的版本。一些GB风格的音乐，比如Game Freak的标题画面曲，可以通过神奇齿轮的广播功能收听。</li><li>在对战外使用潮旋，漩涡并不会像金银版一样消失，而是直接通过漩涡。</li><li>携带特定的基础得点增强道具生蛋可能会遗传神奇宝贝的个体值。</li><li>常磐市的训练家之屋出现的会是通过两个神奇计步通信的训练家。</li><li>首次和劲敌对战时，它的名字显示为过路的少年，而不再是原作中的???。在回到若叶镇后，仍然需要为他起名字。</li><li>在桐树林提供铁头功技能学习器的男子，成为了技能教学人，可以无限多次地教神奇宝贝习得铁头功。</li><li>和水晶版类似，雷公、炎帝、水君依然会从烧焦塔离开，并且之后雷公和炎帝会在城都地方漫游，水君则会在城都和关都多个地点出现，最终在25号道路，而非铃铃塔相遇。</li><li>和神奇宝贝表的标记地图功能类似，神奇齿轮的地图可以追踪游走神奇宝贝位置，并且不需要首先和雷公、炎帝（以及拉帝亚斯、拉帝欧斯）相遇就可以追踪。</li><li>在原作中，真正的阿杏在道馆的左下角，而非中央；在心金魂银版中，阿杏位于道馆的中央。</li><li>在心金魂银版中可以通过飞翔到达神奇宝贝联盟接待处，并且从接待处或石英高原飞向关都或城都的任何一处。有趣的是，在26号道路可以飞向城都地方，而在更西边的27号道路却只能飞向关都地方。另外，在火红叶绿版中可以飞向的4号道路与10号道路的神奇宝贝中心，在心金魂银版中并不能通过飞翔到达。</li></p></div>',
	detail : '<li>预约心金版或魂银版的玩家可以获得对应凤王、洛奇亚的特典，而同时预约两个版本还可获得阿尔宙斯的特典。</li><li>心金魂银版是作为神奇宝贝金银版发售10周年而发布的重制版本。<ul><li>心金魂银版在白金版发布之后一周年发布，也是第一个可以让神奇宝贝跟随的皮卡丘版发售11周年。</li></ul></li><li>心金魂银版的日版名称没有像原金银版一样使用日文汉字，而是直接使用英语音译的片假名，但是也和火红叶绿版一样，标上了金、银字样。</li><li>和火红叶绿版使用完全不同的训练家形象不同，许多训练家类型，例如登山客和超能力者的形象和钻石、珍珠、白金版是相同的。</li><li>心金魂银版是首个在日文版发售之前，就在海外公布的神奇宝贝游戏。</li><li>由于秘传技学习器05从清除浓雾改为潮旋，所以心金魂银版所有的秘传技学习器都是可以造成伤害的技能。</li><li>心金魂银版是首个主要登场人物会与主角交换神奇宝贝的版本，包括道馆训练家小刚、马志士、阿蜜和丰缘地方前冠军大吾。<ul><li>心金魂银版也是首个游戏内交换允许使用任何神奇宝贝的版本，阿蜜会用她的大钢蛇与任何神奇宝贝交换。</li></ul></li><li>和火红叶绿版的开始音乐和红绿版相似不同，心金魂银版制作了全新的开始音乐，与金银版不同，不过音乐中也包含了原作音乐的一些片段元素。</li><li>心金魂银版包含了除米可利以外的前四世代的游戏冠军，红绿版的小茂，金银版的渡，红蓝宝石版的大吾，和钻石珍珠版的竹兰。</li><li>心金魂银版是首个片尾包含道馆训练家、四天王和敌对组织成员的游戏。</li><li>心金魂银版分别使用了金银版中存在的神奇宝贝图鉴文本，同样火红叶绿版也使用了红绿版的神奇宝贝图鉴文本。</li><li>心金魂银版是首个在加拿大同时以英语和法语发售的神奇宝贝游戏。</li><li>在日文版的金银版中，小小象和顿甲限定于金版，熊宝宝和圈圈熊限定于银版；在海外版本中恰恰相反，熊宝宝和圈圈熊限定于金版，小小象和顿甲限定于银版。不过在心金魂银版的各语言版本中，均为小小象和顿甲限定于金版，熊宝宝和圈圈熊限定于银版。</li><li>心金魂银版和金银版的道馆训练家与四天王有除地上系以外的全部属性。</li>',
	//添加版本名与简介
	setVNameVIntro : function() {
						//添加节点h1、hr、div
						var h1 = document.createElement('h1');
						var hr = document.createElement('hr');
						var div = document.createElement('div');
						//设置h1、div的内容
						var h1_text = document.createTextNode(version_4_3.versionName);
						h1.appendChild(h1_text);
						div.innerHTML = version_4_3.introduction;
						//添加h1、hr、div到 '#main_left'
						$('#main_left').append(h1);
						$('#main_left').append(hr);
						$('#main_left').append(div);
					},
	setSpecial : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var div = document.createElement('div');

					var h2_text = document.createTextNode('特性');
					h2.appendChild(h2_text);
					div.innerHTML = version_4_3.special;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(div);
				},
	setDetail : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var ul = document.createElement('ul');

					var h2_text = document.createTextNode('细节');
					h2.appendChild(h2_text);
					ul.innerHTML = version_4_3.detail;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(ul);
				},
	setImage : function() {
					$('#main_right').html('<div class="pic_title"><p>神奇宝贝心金版</p><p>ポケットモンスター ハートゴールド</p><p>Pokémon HeartGold Version</p></div><img src="/static/images/history/心金.jpg" /><div class="pic_title"><p>神奇宝贝魂银版</p><p>ポケットモンスター ソウルシルバー</p><p>Pokémon SoulSilver Version</p></div><img src="/static/images/history/银魂.jpg" /><dl><dt>平台</dt><dd>任天堂DS</dd><dt>分类</dt><dd>RPG</dd><dt>玩家人数</dt><dd>1~5人</dd><dt>通讯机能</dt><dd>Wi-Fi，红外线（神奇计步用）</dd><dt>开发商</dt><dd>Game Freak</dd><dt>发行商</dt><dd>任天堂</dd></dl>')
				},
	initialize : function() {
					version_4_3.setVNameVIntro();
					version_4_3.setSpecial();
					version_4_3.setDetail();
					version_4_3.setImage();
				}
}

var version_5_1 = {
	versionName : '神奇宝贝黑白版',
	introduction : '<p><span class="big">神奇宝贝黑版</span>（日文︰<span class="big">ポケットモンスター ブラック</span>，英文︰<span class="big">Pokémon Black Version</span>）与<span class="big">神奇宝贝白版</span>（日文︰<span class="big">ポケットモンスター ホワイト</span>，英文︰<span class="big">Pokémon White Version</span>）是神奇宝贝RPG系列第五代作品。</p>',
	gameProcedure : '这次的冒险舞台是合众地方，首先红豆杉博士送给主角一个装有三只初学者神奇宝贝的礼物，主角和青梅竹马黑连、白露各选择一只神奇宝贝，并在这个地区展开各自的冒险。旅途中，玩家会遇见电浆团，并与他们多次发生冲突。最后在神奇宝贝联盟，主角将会迎来与电浆团的对决。',
	special : '<div class="special_div"><h3>三打对战</h3><span class="specialWord">主条目︰三打对战</span><br />在三打对战中，双方需要各出三只神奇宝贝进行对战。这个模式与双打对战有相似之处，但也有不同的地方。</div><div class="special_div"><h3>轮盘对战</h3><span class="specialWord">主条目︰轮盘对战</span><br />轮盘对战与三打对战相似，都是使用三只不同的神奇宝贝。但它们的对战方法有很大的区别。</div><div class="special_div"><h3>劲敌</h3><p class="special_p">在黑白版中，主角将会拥有三位劲敌，其中两位是黑连与白露，主角的青梅竹马。第三位则是电浆团的王N。</p></div><div class="special_div"><h3>新音乐</h3><p class="special_p">在原来的游戏中，对战中的音乐是一成不变的。在第五世代中，音乐起了变化。例如，在道馆训练家放出最后一只神奇宝贝时，背景音乐会更换为混音版。在玩家的神奇宝贝HP小于四分之一时，背景音乐将会改变为警告音乐。在草丛中与野生神奇宝贝的双打对战和单打对战的背景音乐也会有略微的不同。</p></div><div class="special_div"><h3>道馆</h3><p class="special_p">在神奇宝贝黑白版中虽然只有八个道馆，但是却拥有十一位道馆训练家。他们分别是天桐，伯特，寇恩（三曜市），芦荟（七宝市），亚堤（飞云市），小菊儿（雷文市），菊老大（帆巴市），风露（吹寄市），哈奇库（雪花市），夏卡，艾莉丝（双龙市）</p></div><div class="special_div"><h3>四天王</h3><p class="special_p">与之前的版本不同，本作中的四天王的挑战顺序可以由玩家自主决定。</p></div>',
	detail : '<li>本版没有办法自己种植树果，只能通过别人赠送。</li><li>本作是第一次出现人物细节描写的剧情，不像之前的版本围绕“挑战道馆、消灭敌对组织、挑战神奇宝贝联盟”的简单线性剧情，而是赋予人物更多的情感，这在以后的主系列游戏中得到了继承。</li><li>本作日版是主系列游戏中第一个限制区域的游戏，由于游戏编号为TWL-IRBJ-JPN，TWL为DSi游戏的开发代号，所以在DSi上运行实行了限制区域。<ul><li>本作国际版取消了限制区域，可能是因为日版早于国际版发售，为了限制跨区域流通。</li><li>由于黑白版向下兼容DS与DSL，而此两款主机都没有实施区域锁定，在此两款主机上运行将不会实施限制区域。</li></ul></li><li>本作虽然与第一世代游戏一样是以颜色命名，但是日文名称却没有像第一世代一样使用日文汉字，而是直接音译自英语，并且没有像第一世代一样标示赤、绿、青等字样。</li>',
	//添加版本名与简介
	setVNameVIntro : function() {
						//添加节点h1、hr、div
						var h1 = document.createElement('h1');
						var hr = document.createElement('hr');
						var div = document.createElement('div');
						//设置h1、div的内容
						var h1_text = document.createTextNode(version_5_1.versionName);
						h1.appendChild(h1_text);
						div.innerHTML = version_5_1.introduction;
						//添加h1、hr、div到 '#main_left'
						$('#main_left').append(h1);
						$('#main_left').append(hr);
						$('#main_left').append(div);
					},
	setGProce : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var p = document.createElement('p');

					var h2_text = document.createTextNode('游戏流程');
					h2.appendChild(h2_text);
					p.innerHTML = version_5_1.gameProcedure;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(p);
				},
	setSpecial : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var div = document.createElement('div');

					var h2_text = document.createTextNode('特性');
					h2.appendChild(h2_text);
					div.innerHTML = version_5_1.special;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(div);
				},
	setDetail : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var ul = document.createElement('ul');

					var h2_text = document.createTextNode('细节');
					h2.appendChild(h2_text);
					ul.innerHTML = version_5_1.detail;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(ul);
				},
	setImage : function() {
					$('#main_right').html('<div class="pic_title"><p>神奇宝贝黑版</p><p>ポケットモンスター ブラック</p><p>Pokémon Black Version</p></div><img src="/static/images/history/黑.png" /><div class="pic_title"><p>神奇宝贝白版</p><p>ポケットモンスター ホワイト</p><p>Pokémon White Version</p></div><img src="/static/images/history/白.png" /><dl><dt>平台</dt><dd>任天堂DS</dd><dt>分类</dt><dd>RPG</dd><dt>玩家人数</dt><dd>1~4人</dd><dt>通讯机能</dt><dd>任天堂Wi-Fi连接，IR</dd><dt>开发商</dt><dd>Game Freak</dd><dt>发行商</dt><dd>任天堂，神奇宝贝股份公司</dd></dl>')
				},
	initialize : function() {
					version_5_1.setVNameVIntro();
					version_5_1.setGProce();
					version_5_1.setSpecial();
					version_5_1.setDetail();
					version_5_1.setImage();
				}
}

var version_5_2 = {
	versionName : '神奇宝贝黑白版2',
	introduction : '<p><span class="big">神奇宝贝黑版2</span>（日文︰<span class="big">ポケットモンスター ブラック ２</span>，英文︰<span class="big">Pokémon Black Version 2</span>）与<span class="big">神奇宝贝白版2</span>（日文︰<span class="big">ポケットモンスター ホワイト ２</span>，英文︰<span class="big">Pokémon White Version 2</span>）是第五世代的第二配对版本，并且都是神奇宝贝黑白版的续作。</p><p>增田顺一在神奇宝贝大轰动！节目中登场并宣布两款游戏，同天在神奇宝贝国际官方纲站公布，日本发售日期为2012年6月23日。北美和欧洲分别在2012年10月7日和10月12日推出。</p><p>两款新作封面形象为酋雷姆的两种新型态，正式名字为暗黑酋雷姆与焰白酋雷姆。</p><p>拥有任天堂3DS的玩家将能用神奇宝贝AR搜寻器来收服神奇宝贝。</p>',
	gameProcedure : '游戏发生在神奇宝贝黑白版的事件结束两年后，合众地方发生了显著的变化。合众地方西北部和东北部出现了六座新城镇和五条以上的新道路，这和电浆团有关。在该地区的西南部出现了新的可以造访的城镇，主角新的故乡桧扇市就是其中之一，而一些原有的地点如修行岩屋再也无法抵达了。新的游戏也出现了新的道馆和道馆训练家，冠军变成了艾莉丝，并且合众图鉴将扩大到包括该地区之外的神奇宝贝，就像神奇宝贝白金版一样。<br /><br />主角可以选择饰演男孩共平或女孩小鸣，他们在该地区旅行的劲敌是阿相。',
	special : '<div class="special_div"><h3>奖章</h3><span class="specialWord">主条目︰奖章</span><br />黑白版2中新引入了奖章系统，在游戏中作出一定的动作就可以获得奖章。</div><div class="special_div"><h3>季节</h3><span class="specialWord">主条目︰季节</span><br />季节在这部游戏再次登场。除了在游戏开始时覆盖整个屏幕，每当主角进入了新的区域时，屏幕底部也会出现一个文本框介绍当前的季节。</div><div class="special_div"><h3>形象动画</h3><p class="special_p">神奇宝贝的形象沿袭神奇宝贝黑白版，仍然都是动画并在整场对战中移动。但是训练家的形象动画不再沿袭黑白版，每一个训练家在游戏中都有对战动画，以及使用更多的帧数以允许动画更流畅。</p></div><div class="special_div"><h3>隐藏洞穴</h3><span class="specialWord">主条目︰隐藏洞穴</span><br />隐藏洞穴是黑白版2的新要素之一，玩家能在其中收服拥有特殊特性的神奇宝贝或者捡到进化石等道具。</div><div class="special_div"><h3>难易度选择</h3><p class="special_p">黑白2中首次引入了难易度选择，共有三种难易度：挑战模式（难）、普通模式（中等）、助手模式（简单）。游戏默认为“普通模式”，黑版2通关后解锁“挑战模式”，白版2通关后解锁“助手模式”，模式可以在标题画面更改。挑战模式下所有训练家的神奇宝贝等级提升，道馆训练家和四天王的队伍强化，所获得的奖金也可能随之增加；助手模式下所有训练家的神奇宝贝等级降低，所获得的奖金也可能随之减少。如果想要获得版本内无法解锁的模式，或是想使用不同的模式通关，或是提前使用模式，玩家必须使用合众连接与已经开启所需模式的玩家通信。</p></div><div class="special_div"><h3>神奇宝贝好莱坞</h3><span class="specialWord">主条目︰神奇宝贝好莱坞</span><br />神奇宝贝好莱坞游戏中的一个新要素，主角可以在神奇宝贝好莱坞参与拍有关于神奇宝贝的电影。主角可以选择各种方案表演。表演以对战方式进行。依照选择的台词不同，会有不同的评价。</div><div class="special_div"><h3>神奇宝贝世界锦标赛</h3><span class="specialWord">主条目︰神奇宝贝世界锦标赛</span><br />神奇宝贝世界锦标赛，简称PWT，是黑白版2中的一个新的特色设施​​，主角可以在那里与前几世代不同擅长属性的每个道馆训练家与冠军（除了阿桔和艾莉丝）战斗。</div><div class="special_div"><h3>道馆</h3><p class="special_p">两年内，黑白版2中完成了道馆训练家的轮替，一些过去的道馆训练家已经把他们的位置让给了他人。现在的八位合众道馆训练家，在没有特定的顺序：黑连（一般系）、霍米加（毒系）、亚堤（虫系）、小菊儿（电系）、菊老大（地上系）、风露（飞行系）、夏卡（龙系）和西子伊（水系）。</p></div><div class="special_div"><h3>四天王和冠军</h3><p class="special_p">依然与黑白版相同，可以以任何顺序与四天王对战；当击败全部天王后，通往冠军的路径就会被解锁。四天王的成员是樒樒（幽灵系）、莲雾（格斗系）、越桔（恶系）和嘉德丽雅（超能力系）。新的冠军是艾莉丝。</p></div>',
	detail : '<li>这将是既2004年9月发布神奇宝贝火红叶绿版以来，北美首次在秋季数月发布主系列游戏，而不是去春季数月。<li>本作是第一个双版本的前作资料篇作品。</li><li>本作是第一个资料篇的剧情时间位于前作之后的作品。<ul><li>虽然神奇宝贝红绿蓝版与神奇宝贝金银版的关系与此相似，但是二者并非一个世代。</li></ul></li><li>本作是第一个完全更换主角的资料篇作品。</li><li>本作为神奇宝贝主系列游戏最后一个出于NDS的版本。</li>',
	//添加版本名与简介
	setVNameVIntro : function() {
						//添加节点h1、hr、div
						var h1 = document.createElement('h1');
						var hr = document.createElement('hr');
						var div = document.createElement('div');
						//设置h1、div的内容
						var h1_text = document.createTextNode(version_5_2.versionName);
						h1.appendChild(h1_text);
						div.innerHTML = version_5_2.introduction;
						//添加h1、hr、div到 '#main_left'
						$('#main_left').append(h1);
						$('#main_left').append(hr);
						$('#main_left').append(div);
					},
	setGProce : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var p = document.createElement('p');

					var h2_text = document.createTextNode('游戏流程');
					h2.appendChild(h2_text);
					p.innerHTML = version_5_2.gameProcedure;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(p);
				},
	setSpecial : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var div = document.createElement('div');

					var h2_text = document.createTextNode('特性');
					h2.appendChild(h2_text);
					div.innerHTML = version_5_2.special;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(div);
				},
	setDetail : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var ul = document.createElement('ul');

					var h2_text = document.createTextNode('细节');
					h2.appendChild(h2_text);
					ul.innerHTML = version_5_2.detail;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(ul);
				},
	setImage : function() {
					$('#main_right').html('<div class="pic_title"><p>神奇宝贝黑版2</p><p>ポケットモンスター ブラック２</p><p>Pokémon Black Version 2</p></div><img src="/static/images/history/黑2.png" /><div class="pic_title"><p>神奇宝贝白版2</p><p>ポケットモンスター ホワイト２</p><p>Pokémon White Version 2</p></div><img src="/static/images/history/白2.png" /><dl><dt>平台</dt><dd>任天堂DS</dd><dt>分类</dt><dd>RPG</dd><dt>玩家人数</dt><dd>1-4位玩家同时</dd><dt>通讯机能</dt><dd>DS无线、Wi-Fi、IR</dd><dt>开发商</dt><dd>Game Freak</dd><dt>发行商</dt><dd>任天堂，神奇宝贝股份有限公司</dd></dl>')
				},
	initialize : function() {
					version_5_2.setVNameVIntro();
					version_5_2.setGProce();
					version_5_2.setSpecial();
					version_5_2.setDetail();
					version_5_2.setImage();
				}
}

var version_6_1 = {
	versionName : '神奇宝贝X‧Y',
	introduction : '<p><span class="big">神奇宝贝X</span>（日文︰<span class="big">ポケットモンスターＸ</span>，英文︰<span class="big">Pokémon X</span>）和<span class="big">神奇宝贝Y</span>（日文︰<span class="big">ポケットモンスターＹ</span>，英文︰<span class="big">Pokémon Y</span>）是第六世代最初的两款游戏。</p><p>在游戏的首次发表会（Pokémon Direct）中显示是首款只能在任天堂3DS上运行的神奇宝贝主系列游戏。神奇宝贝XY已于2013年10月12日全球发售，包括日本、欧洲、北美、澳大利亚、港台以及韩国，玩家能以零售和下载方式来获得游戏。</p><p>舞台卡洛斯地方是以法国为原型，地图类似于法国，并且在预告中也出现了艾菲尔铁塔般的建筑物。</p>',
	special : '<div class="special_div"><h3>新进化方式</h3><p class="special_p">第六世代引入了3DS的陀螺仪系统，出现了陀螺仪进化的神奇宝贝，如マーイーカ在3DS倒置的时候会进化为カラマネロ。</p></div><div class="special_div"><h3>游戏操作变化</h3><p class="special_p"><li>主角能在某些情况下轮滑以及骑乘铁甲犀牛、指路羊、メェークル和象牙猪。</li><li>能够斜向行走。</li></p></div><div class="special_div"><h3>道馆</h3><p class="special_p">当前八位已知的道馆训练家：虫系的专家小堇（白檀市）、岩石系的专家石榴（逍遥市）、格斗系的专家小黄瓜（娑罗市）、草系的专家福寿（比翼市）、电系的专家柠檬（米亚雷市）、妖精系的专家仙缬（薰衣市）、超能力系的专家午时花（百刻市）和冰系的专家得抚（映雪市）。</p></div><div class="special_div"><h3>四天王与冠军</h3><p class="special_p">四天王的成员是海堂（水系）、珑趐（龙系）、钢皮（钢系）和瓜栗（炎系）。冠军是康乃。</p></div>',
	detail : '<li>增田表示本作名字X与Y分别代表X轴（横轴）和Y轴（纵轴），借以表达人们有着多种不同的思想与思考方式，又有着非常多的共同点。</li><li>在本作的日版中，名称的长度限制从5个字符变为6个字符。</li><li>本作是首款发售下载版的正统神奇宝贝游戏。</li><li>因平台为3DS，本作也是首个支持3D视觉的神奇宝贝主系列游戏。<ul><li>本作发售前的宣传曾一度宣称使用全3D视觉，而后又改为了主要场景2D视觉，部分场景3D视觉，可能是因为机能问题。</li><li>目前支持3D视觉的地方有部分室内或洞窟内部场景及例如闪耀洞窟外洞窟，以及单打战斗画面。二对二对战及以上则为2D视觉。</li></ul></li><li>本作是首个使用全3D建模和非二头身战斗外形象的神奇宝贝主系列游戏。<ul><li>也因为此，本作也是第一个因3D建模出现帧率不稳定现象的神奇宝贝主系列游戏。</li></ul></li><li>本作是主线作品中首个开场动画在标题界面之后出现的版本。</li><li>本作是金银之后首个没有大量出现的版本。</li><li>与之前的主系列游戏不同，本作的战斗场景比较类似于家用机的竞技场系列，而神奇宝贝濒死时会做出晕眩动作，以及在与训练家对战时，濒死的神奇宝贝会被收回神奇宝贝球的设计也来自于竞技场系列。</li><li>因3DS支持在线推送升级补丁，所以本作是首款支持在线修复游戏漏洞的神奇宝贝游戏。</li><li>本作是首款全版本对应7国语言的游戏，包括日语、英语、法语、德语、西班牙语、意大利语、韩语。<ul><li>第一次进入游戏后，可以选择游戏使用的语言，选择后无法再更改，如需更改则需要擦除报告重新开始。</li></ul></li><li>本作是首款全球同步发售的神奇宝贝游戏。<ul><li>因为全球发售的缘故，不同地区发售的神奇宝贝X·Y除了日版主机上标题为ポケットモンスター，国际版为Pokémon，之外，内容没有任何区别，甚至连游戏漏洞也完全相同。可能是同时制作的ROM。<ul><li>因为游戏内容完全相同也导致不同地区发售的神奇宝贝X·Y可以跨主机区域识别，如在日版3DS内插入美版的卡带，可出现ポケットモンスターX/Y的LOGO，这与其他非当前区域3DS游戏完全不识别卡带的情况不同，但是由于锁区机制仍然存在，所以进入游戏时会提示“无法使用此游戏卡”。原因可能是同时制作的ROM各个区域的主机可以读取头数据，但是锁区机制限制读取游戏主要内容。但是神游3DSXL仅能识别美版与港台版，无法进行游戏。</li></ul></li></ul></li>',
	//添加版本名与简介
	setVNameVIntro : function() {
						//添加节点h1、hr、div
						var h1 = document.createElement('h1');
						var hr = document.createElement('hr');
						var div = document.createElement('div');
						//设置h1、div的内容
						var h1_text = document.createTextNode(version_6_1.versionName);
						h1.appendChild(h1_text);
						div.innerHTML = version_6_1.introduction;
						//添加h1、hr、div到 '#main_left'
						$('#main_left').append(h1);
						$('#main_left').append(hr);
						$('#main_left').append(div);
					},
	setSpecial : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var div = document.createElement('div');

					var h2_text = document.createTextNode('特性');
					h2.appendChild(h2_text);
					div.innerHTML = version_6_1.special;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(div);
				},
	setDetail : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var ul = document.createElement('ul');

					var h2_text = document.createTextNode('细节');
					h2.appendChild(h2_text);
					ul.innerHTML = version_6_1.detail;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(ul);
				},
	setImage : function() {
					$('#main_right').html('<div class="pic_title"><p>神奇宝贝X</p><p>ポケットモンスターＸ</p><p>Pokémon X</p></div><img src="/static/images/history/X.png" /><div class="pic_title"><p>神奇宝贝Y</p><p>ポケットモンスターＹ</p><p>Pokémon Y</p></div><img src="/static/images/history/Y.png" /><dl><dt>平台</dt><dd>任天堂3DS</dd><dt>分类</dt><dd>RPG</dd><dt>玩家人数</dt><dd>1-4位玩家同时</dd><dt>通讯机能</dt><dd>DS无线、Wi-Fi、IR</dd><dt>开发商</dt><dd>Game Freak</dd><dt>发行商</dt><dd>任天堂，神奇宝贝股份有限公司</dd></dl>')
				},
	initialize : function() {
					version_6_1.setVNameVIntro();
					version_6_1.setSpecial();
					version_6_1.setDetail();
					version_6_1.setImage();
				}
}

var version_6_2 = {
	versionName : '神奇宝贝终极红宝石·始源蓝宝石',
	introduction : '<p><span class="big">神奇宝贝终极红宝石版</span>（日文︰<span class="big">ポケットモンスター　オメガルビー</span>，英文︰<span class="big">Pokémon Omega Ruby</span>）和<span class="big">神奇宝贝始源蓝宝石版</span>（日文︰<span class="big">ポケットモンスター　アルファサファイア</span>，英文︰<span class="big">Pokémon Alpha Sapphire</span>）是第六世代的复刻版本游戏，这两款游戏是红蓝宝石版的复刻版本。 2014年5月7日，神奇宝贝官网火速速报即将于2014年11月全球发售神奇宝贝终极红宝石和始源蓝宝石版，包括日本、欧洲、北美、澳大利亚、港台以及韩国，玩家能以零售和下载方式来获得游戏</p>',
	special : '<div class="special_div"><h3>平台</h3><p class="special_p"><li>红蓝宝石版在GBA上运行。</li><li>终极红宝石和始源蓝宝石在3DS上运行，支持七国语言。</li></p></div>',
	detail : '<li>与以往复刻版本相同，版本名都由一个前缀和旧版本名拼凑成，这次首次使用了希腊字母。</li>',
	//添加版本名与简介
	setVNameVIntro : function() {
						//添加节点h1、hr、div
						var h1 = document.createElement('h1');
						var hr = document.createElement('hr');
						var div = document.createElement('div');
						//设置h1、div的内容
						var h1_text = document.createTextNode(version_6_2.versionName);
						h1.appendChild(h1_text);
						div.innerHTML = version_6_2.introduction;
						//添加h1、hr、div到 '#main_left'
						$('#main_left').append(h1);
						$('#main_left').append(hr);
						$('#main_left').append(div);
					},
	setSpecial : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var div = document.createElement('div');

					var h2_text = document.createTextNode('特性');
					h2.appendChild(h2_text);
					div.innerHTML = version_6_2.special;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(div);
				},
	setDetail : function() {
					var h2 = document.createElement('h2');
					var hr = document.createElement('hr');
					var ul = document.createElement('ul');

					var h2_text = document.createTextNode('细节');
					h2.appendChild(h2_text);
					ul.innerHTML = version_6_2.detail;

					$('#main_left').append(h2);
					$('#main_left').append(hr);
					$('#main_left').append(ul);
				},
	setImage : function() {
					$('#main_right').html('<div class="pic_title"><p>神奇宝贝终极红宝石版</p><p>ポケットモンスター　オメガルビー</p><p>Pokémon Omega Ruby</p></div><img src="/static/images/history/终极红宝石.png" /><div class="pic_title"><p>神奇宝贝始源蓝宝石版</p><p>ポケットモンスター　アルファサファイア</p><p>Pokémon Alpha Sapphire</p></div><img src="/static/images/history/始源蓝宝石.png" /><dl><dt>平台</dt><dd>任天堂3DS</dd><dt>分类</dt><dd>RPG</dd><dt>玩家人数</dt><dd>1-4位玩家同时</dd><dt>通讯机能</dt><dd>DS无线、Wi-Fi、IR</dd><dt>开发商</dt><dd>Game Freak</dd><dt>发行商</dt><dd>任天堂，神奇宝贝股份有限公司</dd></dl>')
				},
	initialize : function() {
					version_6_2.setVNameVIntro();
					version_6_2.setSpecial();
					version_6_2.setDetail();
					version_6_2.setImage();
				}
}