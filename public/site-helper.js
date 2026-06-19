(function() {
    'use strict';

    var CONFIG = {
        siteUrl: 'https://indexsite-aiyouxi.com.cn',
        keyword: '爱游戏',
        containerId: 'site-helper-root',
        animationDelay: 300
    };

    var KEYWORDS = [
        '动作', '冒险', '策略', '角色扮演', '模拟', '体育', '竞速', '休闲'
    ];

    var TIPS = [
        '欢迎来到爱游戏平台，探索无尽乐趣！',
        '每天都有新游戏上线，敬请关注。',
        '使用关键词快速找到你喜欢的游戏类型。',
        '点击卡片可以查看游戏详情。'
    ];

    function createCard(title, content) {
        var card = document.createElement('div');
        card.className = 'sh-card';
        card.innerHTML = '<div class="sh-card-title">' + title + '</div><div class="sh-card-content">' + content + '</div>';
        card.addEventListener('click', function() {
            showToast('您点击了卡片: ' + title);
        });
        return card;
    }

    function createBadge(text) {
        var badge = document.createElement('span');
        badge.className = 'sh-badge';
        badge.textContent = text;
        badge.addEventListener('click', function() {
            showToast('关键词: ' + text);
        });
        return badge;
    }

    function createKeywordSection() {
        var section = document.createElement('div');
        section.className = 'sh-section';
        var title = document.createElement('h3');
        title.textContent = '热门关键词';
        section.appendChild(title);
        var wrapper = document.createElement('div');
        wrapper.className = 'sh-keyword-wrapper';
        KEYWORDS.forEach(function(kw) {
            wrapper.appendChild(createBadge(kw));
        });
        section.appendChild(wrapper);
        return section;
    }

    function createTipSection() {
        var section = document.createElement('div');
        section.className = 'sh-section';
        var title = document.createElement('h3');
        title.textContent = '使用提示';
        section.appendChild(title);
        var list = document.createElement('ul');
        list.className = 'sh-tip-list';
        TIPS.forEach(function(tip) {
            var li = document.createElement('li');
            li.textContent = tip;
            list.appendChild(li);
        });
        section.appendChild(list);
        return section;
    }

    function createAccessInfo() {
        var info = document.createElement('div');
        info.className = 'sh-access-info';
        info.innerHTML = '<p>访问 <a href="' + CONFIG.siteUrl + '" target="_blank" rel="noopener">' + CONFIG.siteUrl + '</a> 开始你的游戏之旅。</p>';
        return info;
    }

    function showToast(msg) {
        var existing = document.getElementById('sh-toast');
        if (existing) {
            existing.parentNode.removeChild(existing);
        }
        var toast = document.createElement('div');
        toast.id = 'sh-toast';
        toast.className = 'sh-toast';
        toast.textContent = msg;
        document.body.appendChild(toast);
        setTimeout(function() {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 2000);
    }

    function injectStyles() {
        var style = document.createElement('style');
        style.textContent = 
            '.sh-container { font-family: sans-serif; max-width: 600px; margin: 20px auto; padding: 15px; background: #f0f4f8; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }' +
            '.sh-card { background: #ffffff; border: 1px solid #d0d7de; border-radius: 8px; padding: 12px 16px; margin-bottom: 12px; cursor: pointer; transition: box-shadow 0.2s; }' +
            '.sh-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.15); }' +
            '.sh-card-title { font-weight: bold; font-size: 1.1em; margin-bottom: 4px; color: #1f2937; }' +
            '.sh-card-content { color: #4b5563; }' +
            '.sh-section { margin-top: 16px; }' +
            '.sh-section h3 { margin: 0 0 8px 0; color: #111827; }' +
            '.sh-keyword-wrapper { display: flex; flex-wrap: wrap; gap: 8px; }' +
            '.sh-badge { display: inline-block; background: #3b82f6; color: #ffffff; padding: 4px 12px; border-radius: 20px; font-size: 0.9em; cursor: pointer; user-select: none; transition: background 0.2s; }' +
            '.sh-badge:hover { background: #2563eb; }' +
            '.sh-tip-list { list-style: none; padding: 0; margin: 0; }' +
            '.sh-tip-list li { padding: 6px 0; border-bottom: 1px solid #e5e7eb; color: #374151; }' +
            '.sh-tip-list li:last-child { border-bottom: none; }' +
            '.sh-access-info { margin-top: 16px; padding: 10px; background: #dbeafe; border-radius: 6px; text-align: center; }' +
            '.sh-access-info a { color: #1d4ed8; text-decoration: none; font-weight: 500; }' +
            '.sh-access-info a:hover { text-decoration: underline; }' +
            '.sh-toast { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); background: #1f2937; color: #f9fafb; padding: 10px 24px; border-radius: 8px; font-size: 0.95em; z-index: 9999; opacity: 0.9; }';
        document.head.appendChild(style);
    }

    function init() {
        injectStyles();
        var container = document.createElement('div');
        container.className = 'sh-container';
        container.id = CONFIG.containerId;
        container.appendChild(createCard('爱游戏平台', '探索各类精彩游戏，享受极致体验。'));
        container.appendChild(createKeywordSection());
        container.appendChild(createTipSection());
        container.appendChild(createAccessInfo());
        document.body.appendChild(container);
        setTimeout(function() {
            showToast('欢迎使用爱游戏助手！');
        }, CONFIG.animationDelay);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();