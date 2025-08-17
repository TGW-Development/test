// 搜索数据 - 包含完整段落内容
const searchData = [
    {title: "施利芬计划", content: "德国陆军总参谋长施利芬伯爵制定的作战计划。该计划旨在通过快速进攻法国北部，绕过法国主力防线，迅速占领巴黎，迫使法国投降。计划的核心是通过比利时实施大规模包抄，同时在东线对俄罗斯采取防御态势。尽管计划在一战初期实施，但由于后勤问题和英国远征军的干预，最终在马恩河战役中受挫。", url: "encyclopedia.html#schlieffenplan", type: "百科"},
    {title: "一战陆军单位", content: "第一次世界大战中的主要陆军单位和编制包括步兵师、骑兵师和炮兵团。步兵师通常由3个步兵团组成，每个团有3个营，每营有4个连。德国陆军师的标准编制约为15,000人，而英法陆军师则约为12,000人。战争后期，各国开始采用更小规模的突击队和特种部队，以适应堑壕战的特点。游戏中，玩家可以指挥这些不同类型的单位，每种单位都有其独特的战术价值和能力。", url: "encyclopedia.html#army", type: "百科"},
    {title: "德国海军", content: "一战时期德国海军的发展与主要舰艇。德国海军在提尔皮茨大admiral的领导下迅速扩张，建造了包括德雷德诺特级战列舰在内的现代化舰队。主要舰艇包括拜仁级战列舰、沙恩霍斯特级装甲巡洋舰和U型潜艇。尽管在数量上不及英国皇家海军，但德国海军在日德兰海战等重要战役中表现出色。游戏中，德国海军单位擅长潜艇战和突袭战术，可以有效干扰敌方补给线。", url: "encyclopedia.html#germannavy", type: "百科"},
    {title: "盟国", content: "第一次世界大战中的主要参战国家联盟。协约国包括英国、法国、俄罗斯、后来加入的美国、意大利等；同盟国包括德国、奥匈帝国、奥斯曼帝国和保加利亚。每个国家都有其独特的军事特点和历史背景。例如，美国在战争后期提供了大量新鲜兵力，而奥斯曼帝国则在中东战场发挥重要作用。游戏中，玩家可以选择不同的盟国，每个盟国都有特殊的卡牌和能力，如英国的海军优势或德国的陆军效率。", url: "encyclopedia.html#allies", type: "百科"},
    {title: "机制", content: "游戏基本机制，包括补给值、计划值和行动点。补给值代表军队的后勤能力，每回合可用于部署单位或使用特殊能力；计划值反映战略准备程度，高计划值可解锁更强大的战术选项；行动点限制每回合可执行的操作数量。此外，游戏还包括天气系统（影响战斗效率）、士气机制（影响单位性能）和科技研发系统（解锁新能力）。玩家需要平衡这些资源，制定最佳战略。", url: "encyclopedia.html#mechanics", type: "百科"},
    {title: "堑壕层数", content: "步兵单位的堑壕机制，提供额外防御。堑壕分为三个等级：简易堑壕（+1防御）、标准堑壕（+2防御）和加固堑壕（+3防御）。建造和升级堑壕需要消耗行动点和补给值。堑壕可以减少受到的伤害，但也会降低单位的机动性。某些特殊单位如工兵可以更快地建造堑壕，而重型炮兵则可以对堑壕造成额外伤害。在防御战中，合理利用堑壕系统是取胜的关键。", url: "encyclopedia.html#trench", type: "百科"},
    {title: "战线", content: "游戏中的战线系统，包括海战线和陆战线。战线代表前线的实际位置，玩家需要通过推进战线来占领敌方领土。陆战线分为西线、东线和南线，每条战线都有其独特的地形和战略价值。海战线则包括北海、地中海和大西洋，控制这些区域可以影响补给线和增援速度。战线的推进或后退取决于战斗结果，某些关键区域的得失可能会触发特殊事件或胜利条件。", url: "encyclopedia.html#battlelines", type: "百科"},
    {title: "卡组构筑", content: "游戏的卡组构筑规则要求陆军牌40张，海军牌20张，陆军盟国牌最多12张。玩家可以根据自己的战略偏好选择不同类型的卡牌，包括单位卡、战术卡、科技卡和事件卡。每种卡牌都有其独特的费用、效果和使用条件。构建有效的卡组需要考虑资源曲线、协同效应和应对不同战略的灵活性。游戏鼓励玩家尝试不同的卡组组合，发现新的战术可能性。", url: "encyclopedia.html#deckbuilding", type: "百科"},
    {title: "抽牌机制", content: "友方回合开始时，玩家可以选择抽2张陆军牌或抽1张海军牌。这一机制反映了资源分配的战略决策，玩家需要根据当前局势决定优先发展哪个兵种。某些特殊卡牌或能力可以修改这一基本规则，允许额外抽牌或查看牌堆顶部的卡牌。此外，特定事件或战术也可能触发额外的抽牌机会，如成功的侦察行动或控制关键补给点。", url: "encyclopedia.html#drawing", type: "百科"},
    {title: "手牌上限", content: "游戏中的手牌上限为9张，超过此数量的卡牌必须在回合结束时弃置。这一限制模拟了指挥能力的上限，防止玩家无限积累资源。某些特殊能力或科技可以临时或永久增加手牌上限，如'高效参谋部'科技可将上限提高到11张。相反，某些负面事件如'通信中断'可能会暂时降低手牌上限。玩家需要在保留关键卡牌和维持手牌流转之间找到平衡。", url: "encyclopedia.html#handlimit", type: "百科"},
    {title: "稀有度", content: "卡牌稀有度系统，包括黑桃（普通）、红桃（罕见）、梅花（稀有）和方片（传奇）四个等级。稀有度越高的卡牌效果越强大，但获取难度也越大。普通卡牌构成卡组的基础，提供基本功能；罕见卡牌提供特殊能力，增强特定战术；稀有卡牌可以改变战局，提供独特优势；传奇卡牌则代表历史上的关键人物、事件或技术，具有游戏改变性的效果。卡组构建时需要平衡不同稀有度的卡牌。", url: "encyclopedia.html#rarity", type: "百科"},
    {title: "计划值增长机制", content: "每个友方回合开始时，计划值自然增加1点，到达16点时不再自然增加。计划值代表军队的战略准备程度，高计划值可以解锁更强大的单位和战术。除自然增长外，某些卡牌和能力也可以提供额外的计划值，如'战略规划'卡可立即增加2点计划值。玩家可以选择快速积累计划值以部署强力单位，或使用低计划值单位进行早期压制。不同战略路线对计划值的依赖程度各不相同。", url: "encyclopedia.html#planning", type: "百科"},
    {title: "胜负条件", content: "游戏的胜利条件包括多种路径：军事胜利（摧毁敌方指挥部，使其血量降至零）、战略胜利（控制特定数量的关键区域）、资源胜利（敌方牌堆耗尽）和外交胜利（达成特定条件触发和平协议）。不同的胜利条件鼓励多样化的战略路线。同时，游戏也设置了失败条件，如指挥部被摧毁、士气降至零或关键资源枯竭。玩家需要根据局势灵活调整战略，同时防止敌方达成其胜利条件。", url: "encyclopedia.html#victory", type: "百科"},
    {title: "1914工作室澄清公告", content: "关于近期网络上出现的抄袭指控，1914工作室特此声明：TGW游戏的所有概念、机制和美术资源均为原创，或已获得合法授权使用。我们尊重知识产权，任何相似之处纯属巧合。工作室已保留相关设计文档和开发记录，可证明创意来源。我们欢迎玩家提出建设性意见，但坚决反对恶意诽谤。工作室将继续专注于游戏开发，为玩家带来高质量的历史战争模拟体验。", url: "intel.html#clarification", type: "情报"},
    {title: "游戏开发进度", content: "TGW游戏开发的最新进展：核心卡牌系统已完成90%，包括300多张独特卡牌的设计和平衡；战役模式已完成70%，目前正在开发西线战役的关键战役；多人对战系统已完成60%，正在进行网络同步和匹配系统的测试；单人教程已完成85%，包括基础和进阶教程关卡。美术资源方面，卡牌插画已完成75%，界面设计已完成80%，音效系统已完成65%。预计在未来3个月内发布首个可玩的测试版本，欢迎玩家报名参与封闭测试。", url: "intel.html#progress", type: "情报"},
    {title: "卡牌平衡性调整", content: "最新一批卡牌的平衡性调整公告：1. '重型榴弹炮'卡牌成本从5点降至4点，但耐久度从4降至3；2. '潜艇战术'卡牌效果修改，现在可以直接攻击敌方后排单位，但使用后会暴露位置；3. '紧急动员'卡牌现在除了生成2个步兵单位外，还会降低1点计划值；4. '毒气攻击'卡牌伤害从2点提高到3点，但现在会同时影响己方前线单位；5. '补给线'卡牌效果增强，现在每回合额外提供1点补给值。这些调整旨在平衡游戏节奏，增加战术多样性，将在下一版本更新中实装。", url: "intel.html#balance", type: "情报"},
    {title: "1914工作代码部招人公告", content: "TGW制作组正着手游戏的开发，但代码人员紧缺令游戏制作进度缓慢。我们需要能并肩写代码、改bug的伙伴。如果你曾经学习过C# godot，亦或是正在学习的小白，请联系我们，TGW代码部真诚欢迎你的加入。联系方式：QQ群1043661227。只要顺利通过审核，即可立即加入游戏代码部，成为我们未来的同事！", url: "intel.html#job", type: "情报"}
];

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// 高亮关键词
function highlightKeyword(text, keyword) {
    if (!keyword) return text;
    const regex = new RegExp(keyword, 'gi');
    return text.replace(regex, match => `<span style="background-color:#ffeb3b;font-weight:bold;padding:0 2px;border-radius:2px;">${match}</span>`);
}

// 创建搜索结果项样式
function createSearchResultItem(item, keyword) {
    return `
        <div class="search-result-item" style="padding:16px;border-bottom:1px solid #eee;cursor:pointer;transition:background-color 0.2s ease;" 
             onclick="window.location.href='${item.url}'"
             onmouseover="this.style.backgroundColor='#f5f5f5'"
             onmouseout="this.style.backgroundColor='transparent'">
            <div style="font-weight:bold;margin-bottom:8px;font-size:1.1em;">${highlightKeyword(item.title, keyword)}</div>
            <div style="font-size:0.85em;color:#666;margin-bottom:6px;">${item.type} · <a href="${item.url}" style="color:#1a73e8;text-decoration:none;">${item.url.split('#')[0]}</a></div>
            <div style="font-size:0.95em;color:#333;line-height:1.5;max-height:300px;overflow-y:auto;padding:8px;background:#f9f9f9;border-radius:4px;border-left:3px solid #ddd;">${highlightKeyword(item.content, keyword)}</div>
        </div>
    `;
}

// 初始化搜索功能
function initSearch() {
    const searchInput = document.getElementById('globalSearch');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchInput || !searchResults) return;
    
    // 搜索处理函数
    const handleSearch = debounce(function() {
        const keyword = searchInput.value.trim().toLowerCase();
        
        if(keyword.length === 0) {
            searchResults.style.display = 'none';
            return;
        }
        
        // 过滤结果
        const filtered = searchData.filter(item => 
            item.title.toLowerCase().includes(keyword) || 
            item.content.toLowerCase().includes(keyword)
        );
        
        // 显示结果
        if(filtered.length > 0) {
            searchResults.innerHTML = `
                <div style="padding:10px;background:#f0f0f0;border-bottom:1px solid #ddd;font-weight:bold;">
                    找到 ${filtered.length} 条包含 "${keyword}" 的结果
                </div>
                ${filtered.map(item => createSearchResultItem(item, keyword)).join('')}
            `;
            searchResults.style.display = 'block';
        } else {
            searchResults.innerHTML = '<div style="padding:12px;color:#666;text-align:center;">未找到相关结果</div>';
            searchResults.style.display = 'block';
        }
    }, 300);
    
    // 绑定搜索输入事件
    searchInput.addEventListener('input', handleSearch);
    
    // 点击页面其他区域关闭搜索结果
    document.addEventListener('click', function(e) {
        if(!e.target.closest('#globalSearch') && !e.target.closest('#searchResults')) {
            searchResults.style.display = 'none';
        }
    });
    
    // 添加回车键搜索跳转功能
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const keyword = searchInput.value.trim().toLowerCase();
            if (keyword.length > 0) {
                // 查找第一个匹配的结果
                const firstMatch = searchData.find(item => 
                    item.title.toLowerCase().includes(keyword) || 
                    item.content.toLowerCase().includes(keyword)
                );
                
                if (firstMatch) {
                    // 直接跳转到匹配的页面和锚点
                    window.location.href = firstMatch.url;
                }
            }
        }
    });
}

// 页面加载完成后初始化搜索功能
document.addEventListener('DOMContentLoaded', initSearch);
