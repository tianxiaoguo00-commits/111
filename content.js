(() => {
  'use strict';

  const translations = new Map(Object.entries({
    'Sign in': '登录', 'Sign up': '注册', 'Sign out': '退出登录',
    'Sign in to GitHub': '登录 GitHub', 'Sign in to your account': '登录你的账户',
    'Dashboard': '主页', 'Home': '首页', 'Issues': '议题', 'Pull requests': '拉取请求',
    'Codespaces': '云开发环境', 'Marketplace': '市场', 'Explore': '探索',
    'Notifications': '通知', 'Your profile': '个人资料', 'Your repositories': '你的仓库',
    'Your organizations': '你的组织', 'Your projects': '你的项目', 'Your stars': '你点过星标的项目',
    'Settings': '设置', 'New': '新建', 'Create new…': '新建…', 'Create repository': '创建仓库',
    'New repository': '新建仓库', 'Repository name': '仓库名称', 'Description': '描述',
    'Public': '公开', 'Private': '私有', 'Create repository': '创建仓库',
    'Code': '代码', 'Actions': '自动化', 'Projects': '项目', 'Wiki': 'Wiki',
    'Security': '安全', 'Insights': '洞察', 'Discussions': '讨论',
    'Pull requests': '拉取请求', 'Open': '开启', 'Closed': '已关闭', 'Merged': '已合并',
    'New issue': '新建议题', 'New pull request': '新建拉取请求', 'Write': '编写', 'Preview': '预览',
    'Title': '标题', 'Add a description': '添加描述', 'Comment': '评论', 'Close issue': '关闭议题',
    'Reopen issue': '重新开启议题', 'Add a comment': '添加评论', 'Submit new issue': '提交新议题',
    'Submit comment': '提交评论', 'Edit': '编辑', 'Delete': '删除', 'Cancel': '取消', 'Save': '保存',
    'Save changes': '保存更改', 'Search': '搜索', 'Search or jump to…': '搜索或跳转到…',
    'Search all of GitHub': '搜索整个 GitHub', 'Repositories': '仓库', 'Topics': '主题', 'Users': '用户',
    'Files': '文件', 'Branches': '分支', 'Tags': '标签', 'Commits': '提交记录',
    'Add file': '添加文件', 'Create new file': '新建文件', 'Upload files': '上传文件',
    'Download ZIP': '下载 ZIP', 'Go to file': '跳转到文件', 'Clone': '克隆', 'Fork': '复刻',
    'Star': '星标', 'Unstar': '取消星标', 'Watch': '关注', 'Unwatch': '取消关注',
    'Sponsor': '赞助', 'Share': '分享', 'Copy': '复制', 'Copied!': '已复制！',
    'README': '自述文件', 'MIT license': 'MIT 许可证', 'No description, website, or topics provided.': '暂无描述、网站或主题。',
    'This repository is empty.': '此仓库为空。', 'Quick setup': '快速设置',
    '…or create a new repository on the command line': '…或在命令行中创建新仓库',
    '…or push an existing repository from the command line': '…或从命令行推送现有仓库',
    'Add a README': '添加 README', 'Add .gitignore': '添加 .gitignore', 'Choose a license': '选择许可证',
    'Commit changes': '提交更改', 'Commit directly to the main branch': '直接提交到 main 分支',
    'Create a new branch for this commit and start a pull request': '为此提交创建新分支并发起拉取请求',
    'Branch': '分支', 'main': 'main', 'About': '关于', 'Releases': '发行版',
    'Packages': '软件包', 'Contributors': '贡献者', 'Languages': '语言', 'Activity': '活动',
    'Today': '今天', 'Yesterday': '昨天', 'Show more': '显示更多', 'Show less': '收起',
    'Load more': '加载更多', 'Loading…': '加载中…', 'No results': '没有结果',
    'No results found': '未找到结果', 'Back': '返回', 'Next': '下一步', 'Previous': '上一步',
    'Learn more': '了解更多', 'Help': '帮助', 'Documentation': '文档', 'Terms': '条款',
    'Privacy': '隐私', 'Status': '状态', 'Contact': '联系', 'Feedback': '反馈',
    'Page not found': '页面未找到', 'You are viewing': '你正在查看', 'Forked from': '复刻自',
    'Pinned': '已置顶', 'Public archive': '公开归档', 'Archived': '已归档', 'Template': '模板',
    'Report repository': '举报仓库', 'New discussion': '发起新讨论', 'Start a discussion': '开始讨论',
    'Labels': '标签', 'Milestones': '里程碑', 'Assignees': '负责人', 'Projects': '项目',
    'Filter': '筛选', 'Filters': '筛选条件', 'Sort': '排序', 'Newest': '最新', 'Oldest': '最早',
    'Most reactions': '反应最多', 'Least reactions': '反应最少', 'Most commented': '评论最多',
    'All activity': '全部活动', 'Participating': '参与的', 'Assigned to you': '分配给你的',
    'Mentioned': '提及你的', 'Mark as read': '标记为已读', 'Mark as unread': '标记为未读',
    'Dismiss': '忽略', 'Subscribe': '订阅', 'Unsubscribe': '取消订阅',
    'You don’t have any notifications.': '你没有任何通知。', 'Notifications': '通知',
    'Enable email notifications': '启用邮件通知', 'Appearance': '外观', 'Accessibility': '无障碍',
    'Account': '账户', 'Billing and licensing': '账单与许可', 'Emails': '电子邮件',
    'Password and authentication': '密码与身份验证', 'SSH and GPG keys': 'SSH 和 GPG 密钥',
    'Organizations': '组织', 'Applications': '应用程序', 'Developer settings': '开发者设置',
    'Two-factor authentication': '双重身份验证', 'Profile': '个人资料', 'Public profile': '公开资料',
    'Overview': '概览', 'Repositories': '仓库', 'Stars': '星标', 'Followers': '关注者', 'Following': '正在关注',
    'Follow': '关注', 'Unfollow': '取消关注', 'Block or report': '屏蔽或举报',
    'Compare': '比较', 'Pull request successfully merged and closed': '拉取请求已成功合并并关闭',
    'This branch is up to date with': '此分支与以下分支保持同步：',
    'behind': '落后', 'ahead': '领先', 'checks passed': '项检查已通过',
    'Some checks were not successful': '部分检查未通过', 'All checks have passed': '所有检查均已通过',
    'Review changes': '审查更改', 'Files changed': '已更改文件', 'Conversation': '对话',
    'Re-run all jobs': '重新运行所有任务', 'View workflow file': '查看工作流文件',
    'Set up a workflow yourself': '自行设置工作流', 'Get started with GitHub Actions': '开始使用 GitHub Actions',
    'Create a new project': '创建新项目', 'Add item': '添加项目', 'Todo': '待办', 'In Progress': '进行中', 'Done': '已完成'
  }));

  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  let enabled = true;
  let observer;

  function translateTextNode(node) {
    const current = node.nodeValue;
    if (!originalText.has(node)) originalText.set(node, current);
    const source = originalText.get(node);
    const trimmed = source.trim();
    if (!trimmed) return;
    const translated = enabled ? translations.get(trimmed) : null;
    if (translated) {
      const start = source.indexOf(trimmed);
      node.nodeValue = source.slice(0, start) + translated + source.slice(start + trimmed.length);
    } else if (!enabled) {
      node.nodeValue = source;
    }
  }

  function translateAttributes(element) {
    for (const name of ['aria-label', 'title', 'placeholder', 'data-tooltip-content']) {
      if (!element.hasAttribute(name)) continue;
      let originals = originalAttributes.get(element);
      if (!originals) {
        originals = new Map();
        originalAttributes.set(element, originals);
      }
      if (!originals.has(name)) originals.set(name, element.getAttribute(name));
      const source = originals.get(name);
      const translated = enabled ? translations.get(source.trim()) : null;
      if (translated) element.setAttribute(name, translated);
      else if (!enabled) element.setAttribute(name, source);
    }
  }

  function scan(root = document) {
    if (root.nodeType === Node.ELEMENT_NODE) translateAttributes(root);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest('script, style, noscript, code, pre, textarea, input, [contenteditable="true"], #github-zh-toggle')) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    let node;
    while ((node = walker.nextNode())) translateTextNode(node);
    if (root.querySelectorAll) root.querySelectorAll('*').forEach(translateAttributes);
  }

  function addToggle() {
    if (document.getElementById('github-zh-toggle')) return;
    const button = document.createElement('button');
    button.id = 'github-zh-toggle';
    button.type = 'button';
    button.textContent = '中文';
    button.title = '切换 GitHub 中文界面';
    button.setAttribute('aria-label', '切换 GitHub 中文界面');
    Object.assign(button.style, {
      position: 'fixed', right: '18px', bottom: '18px', zIndex: '2147483647',
      padding: '9px 14px', border: '1px solid #1f883d', borderRadius: '999px',
      background: '#1f883d', color: '#fff', font: '600 14px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      boxShadow: '0 2px 8px #0003', cursor: 'pointer'
    });
    button.addEventListener('click', () => {
      enabled = !enabled;
      button.textContent = enabled ? '中文' : '原文';
      scan();
    });
    document.documentElement.appendChild(button);
  }

  scan();
  addToggle();
  observer = new MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'childList') record.addedNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) scan(node);
      });
      else if (record.type === 'characterData') translateTextNode(record.target);
      else if (record.type === 'attributes') translateAttributes(record.target);
    }
  });
  observer.observe(document.documentElement, {
    subtree: true, childList: true, characterData: true, attributes: true,
    attributeFilter: ['aria-label', 'title', 'placeholder', 'data-tooltip-content']
  });
})();
