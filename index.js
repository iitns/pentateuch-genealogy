    /* ---------- Helpers ---------- */
    const BGW = (ref) => `https://www.biblegateway.com/passage/?search=${encodeURIComponent(ref)}&version=NIV`;
    const bookKo = (book) => ({
      Genesis:'창세기', Exodus:'출애굽기', Leviticus:'레위기', Numbers:'민수기', Deuteronomy:'신명기'
    }[book] || book);
    const displayChapter = (ch) => {
      const m = ch.match(/^([A-Za-z]+)\s+(\d+(?:-\d+)?)$/);
      if (!m) return ch;
      const [, book, num] = m;
      return `${bookKo(book)} ${num}장`;
    };

    /* ---------- Data (Korean names) ---------- */
    const data = {
      id: 'adam-eve', name: '아담과 하와', chapters: ['Genesis 2', 'Genesis 3', 'Genesis 4'], url: BGW('Genesis 2-4'), children: [
        { id: 'cain', name: '가인', chapters: ['Genesis 4'], url: BGW('Genesis 4'), children: [] },
        { id: 'abel', name: '아벨', chapters: ['Genesis 4'], url: BGW('Genesis 4'), children: [] },
        { id: 'seth', name: '셋', chapters: ['Genesis 4', 'Genesis 5'], url: BGW('Genesis 4; Genesis 5'), children: [
          { id: 'enosh', name: '에노스', chapters: ['Genesis 4', 'Genesis 5'], url: BGW('Genesis 4:26; Genesis 5'), children: [
            { id: 'kenan', name: '게난', chapters: ['Genesis 5'], url: BGW('Genesis 5'), children: [
              { id: 'mahalalel', name: '마할랄렐', chapters: ['Genesis 5'], url: BGW('Genesis 5'), children: [
                { id: 'jared', name: '야렛', chapters: ['Genesis 5'], url: BGW('Genesis 5'), children: [
                  { id: 'enoch', name: '에녹', chapters: ['Genesis 5'], url: BGW('Genesis 5'), children: [
                    { id: 'methuselah', name: '므두셀라', chapters: ['Genesis 5'], url: BGW('Genesis 5'), children: [
                      { id: 'lamech', name: '라멕', chapters: ['Genesis 5'], url: BGW('Genesis 5'), children: [
                        { id: 'noah', name: '노아', chapters: ['Genesis 5', 'Genesis 6', 'Genesis 7', 'Genesis 8', 'Genesis 9'], url: BGW('Genesis 5-9'), children: [
                          { id: 'shem', name: '셈', chapters: ['Genesis 5', 'Genesis 10', 'Genesis 11'], url: BGW('Genesis 10-11'), children: [
                            { id: 'arphaxad', name: '아르박삿', chapters: ['Genesis 10', 'Genesis 11'], url: BGW('Genesis 10-11'), children: [
                              { id: 'shelah', name: '셀라', chapters: ['Genesis 10', 'Genesis 11'], url: BGW('Genesis 10-11'), children: [
                                { id: 'eber', name: '에벨', chapters: ['Genesis 10', 'Genesis 11'], url: BGW('Genesis 10-11'), children: [
                                  { id: 'peleg', name: '벨렉', chapters: ['Genesis 10', 'Genesis 11'], url: BGW('Genesis 10-11'), children: [
                                    { id: 'reu', name: '르우', chapters: ['Genesis 11'], url: BGW('Genesis 11'), children: [
                                      { id: 'serug', name: '스룩', chapters: ['Genesis 11'], url: BGW('Genesis 11'), children: [
                                        { id: 'nahor', name: '나홀', chapters: ['Genesis 11'], url: BGW('Genesis 11'), children: [
                                          { id: 'terah', name: '데라', chapters: ['Genesis 11'], url: BGW('Genesis 11'), children: [
                                            { id: 'abraham', name: '아브람 / 아브라함', chapters: ['Genesis 11', 'Genesis 12', 'Genesis 15', 'Genesis 17', 'Genesis 22'], url: BGW('Genesis 11-22'), children: [
                                              { id: 'ishmael', name: '이스마엘', chapters: ['Genesis 16', 'Genesis 17', 'Genesis 25'], url: BGW('Genesis 16-17; Genesis 25'), children: [] },
                                              { id: 'isaac', name: '이삭', chapters: ['Genesis 17', 'Genesis 21', 'Genesis 22', 'Genesis 24', 'Genesis 26'], url: BGW('Genesis 17; 21-26'), children: [
                                                { id: 'esau', name: '에서', chapters: ['Genesis 25', 'Genesis 27', 'Genesis 36'], url: BGW('Genesis 25; 27; 36'), children: [] },
                                                { id: 'jacob', name: '야곱 / 이스라엘', chapters: ['Genesis 25', 'Genesis 27-35', 'Genesis 46-49'], url: BGW('Genesis 25; 27-35; 46-49'), children: [
                                                  { id: 'reuben', name: '르우벤', chapters: ['Genesis 29', 'Genesis 35', 'Genesis 49'], url: BGW('Genesis 29; 35; 49'), children: [] },
                                                  { id: 'simeon', name: '시므온', chapters: ['Genesis 29', 'Genesis 35', 'Genesis 49'], url: BGW('Genesis 29; 35; 49'), children: [] },
                                                  { id: 'levi', name: '레위', chapters: ['Genesis 29', 'Genesis 35', 'Genesis 49', 'Exodus 6'], url: BGW('Genesis 29; 35; 49; Exodus 6'), children: [
                                                    { id: 'kohath', name: '고핫', chapters: ['Exodus 6'], url: BGW('Exodus 6'), children: [
                                                      { id: 'amram', name: '암람', chapters: ['Exodus 6'], url: BGW('Exodus 6'), children: [
                                                        { id: 'aaron', name: '아론', chapters: ['Exodus 6', 'Leviticus 10', 'Numbers 20'], url: BGW('Exodus 6; Leviticus 10; Numbers 20'), children: [
                                                          { id: 'nadab', name: '나답', chapters: ['Exodus 6', 'Leviticus 10'], url: BGW('Exodus 6; Leviticus 10'), children: [] },
                                                          { id: 'abihu', name: '아비후', chapters: ['Exodus 6', 'Leviticus 10'], url: BGW('Exodus 6; Leviticus 10'), children: [] },
                                                          { id: 'eleazar', name: '엘르아살', chapters: ['Exodus 6', 'Numbers 20'], url: BGW('Exodus 6; Numbers 20'), children: [] },
                                                          { id: 'ithamar', name: '이트마르', chapters: ['Exodus 6'], url: BGW('Exodus 6'), children: [] }
                                                        ] },
                                                        { id: 'moses', name: '모세', chapters: ['Exodus 2', 'Exodus 6', 'Exodus 18', 'Numbers 12', 'Deuteronomy 34'], url: BGW('Exodus 2; 6; 18; Numbers 12; Deuteronomy 34'), children: [
                                                          { id: 'gershom', name: '게르솜', chapters: ['Exodus 2', 'Exodus 18'], url: BGW('Exodus 2; Exodus 18'), children: [] },
                                                          { id: 'eliezer', name: '엘리에셀(모세의 아들)', chapters: ['Exodus 18'], url: BGW('Exodus 18'), children: [] }
                                                        ] },
                                                        { id: 'miriam', name: '미리암', chapters: ['Exodus 2', 'Numbers 12', 'Numbers 20'], url: BGW('Exodus 2; Numbers 12; Numbers 20'), children: [] }
                                                      ] }
                                                    ] }
                                                  ] },
                                                  { id: 'judah', name: '유다', chapters: ['Genesis 29', 'Genesis 38', 'Genesis 49'], url: BGW('Genesis 29; 38; 49'), children: [] },
                                                  { id: 'dan', name: '단', chapters: ['Genesis 30', 'Genesis 49'], url: BGW('Genesis 30; 49'), children: [] },
                                                  { id: 'naphtali', name: '납달리', chapters: ['Genesis 30', 'Genesis 49'], url: BGW('Genesis 30; 49'), children: [] },
                                                  { id: 'gad', name: '갓', chapters: ['Genesis 30', 'Genesis 49'], url: BGW('Genesis 30; 49'), children: [] },
                                                  { id: 'asher', name: '아셀', chapters: ['Genesis 30', 'Genesis 49'], url: BGW('Genesis 30; 49'), children: [] },
                                                  { id: 'issachar', name: '잇사갈', chapters: ['Genesis 30', 'Genesis 49'], url: BGW('Genesis 30; 49'), children: [] },
                                                  { id: 'zebulun', name: '스불론', chapters: ['Genesis 30', 'Genesis 49'], url: BGW('Genesis 30; 49'), children: [] },
                                                  { id: 'joseph', name: '요셉', chapters: ['Genesis 30', 'Genesis 37-50'], url: BGW('Genesis 30; 37-50'), children: [
                                                    { id: 'manasseh', name: '므낫세', chapters: ['Genesis 41', 'Genesis 48'], url: BGW('Genesis 41; 48'), children: [] },
                                                    { id: 'ephraim', name: '에브라임', chapters: ['Genesis 41', 'Genesis 48'], url: BGW('Genesis 41; 48'), children: [] }
                                                  ] },
                                                  { id: 'benjamin', name: '베냐민', chapters: ['Genesis 35', 'Genesis 49'], url: BGW('Genesis 35; 49'), children: [] }
                                                ] }
                                              ] }
                                            ] }
                                          ] }
                                        ] }
                                      ] }
                                    ] }
                                  ] }
                                ] }
                              ] }
                            ] },
                          { id: 'ham', name: '함', chapters: ['Genesis 5', 'Genesis 9', 'Genesis 10'], url: BGW('Genesis 9-10'), children: [] },
                          { id: 'japheth', name: '야벳', chapters: ['Genesis 5', 'Genesis 10'], url: BGW('Genesis 10'), children: [] }
                        ] }
                      ] }
                    ] }
                  ] }
                ] }
              ] }
            ] }
          ] }
        ] }
      ]
    }]};

    /* ---------- Chapter list is by ID, not node refs ---------- */
    function collectChapters(rootObj) {
      const set = new Set();
      d3.hierarchy(rootObj).each(d => (d.data.chapters || []).forEach(c => set.add(c)));
      const parts = [...set].map(s => {
        const [book] = s.split(/\s+(?=\d+)/);
        return { raw: s, book: book, n: parseInt(s.replace(/[^0-9]/g,'') || '0', 10) };
      });
      return parts.sort((a,b) => (a.book.localeCompare(b.book) || a.n - b.n)).map(o => o.raw);
    }
    function mapChapterToIds(rootObj) {
      const map = new Map();
      d3.hierarchy(rootObj).each(d => {
        (d.data.chapters || []).forEach(ch => {
          if (!map.has(ch)) map.set(ch, []);
          map.get(ch).push(d.data.id);
        });
      });
      return map;
    }

    /* ---------- D3 scaffolding ---------- */
    const svg = d3.select('#tree');
    const g = svg.append('g');
    const linkGroup = g.append('g').attr('class', 'links');
    const nodeGroup = g.append('g').attr('class', 'nodes');

    const zoom = d3.zoom().scaleExtent([0.2, 2]).on('zoom', (event) => {
      g.attr('transform', event.transform);
    });
    svg.call(zoom);

    // Live hierarchy root
    let root = d3.hierarchy(data);
    root.x0 = 0; root.y0 = 0;

    // Build live id->node index (rebuild after each update)
    let idToNode = new Map();
    function rebuildIdIndex() {
      idToNode.clear();
      root.each(d => idToNode.set(d.data.id, d));
    }

    // Collapse deep subtrees by default
    root.children && root.children.forEach(collapseDeepButKeepMajor);
    function collapse(d) {
      if (d.children) { d._children = d.children; d._children.forEach(collapse); d.children = null; }
    }
    function expand(d) {
      if (d._children) { d.children = d._children; d._children = null; }
    }
    function collapseDeepButKeepMajor(d) {
      const keepIds = new Set(['adam-eve','seth','noah','shem','abraham','isaac','jacob','levi','joseph']);
      if (!keepIds.has(d.data.id)) collapse(d);
      else d.children && d.children.forEach(collapseDeepButKeepMajor);
    }

    const treeLayout = d3.tree().nodeSize([42, 140]); // [vertical, horizontal]

    function update(source) {
      const duration = 350;
      const treeData = treeLayout(root);
      const nodes = treeData.descendants();
      const links = treeData.links();

      nodes.forEach(d => d.y = d.depth * 140);

      // LINKS
      const link = linkGroup.selectAll('path.link').data(links, d => d.target.data.id);
      link.enter().append('path')
        .attr('class', 'link')
        .attr('d', () => diagonal({ source: {x: source.x0 ?? 0, y: source.y0 ?? 0}, target: {x: source.x0 ?? 0, y: source.y0 ?? 0} }))
        .transition().duration(duration)
        .attr('d', d => diagonal(d));
      link.transition().duration(duration).attr('d', d => diagonal(d));
      link.exit().transition().duration(duration)
        .attr('d', () => diagonal({ source: {x: source.x ?? source.x0 ?? 0, y: source.y ?? source.y0 ?? 0}, target: {x: source.x ?? source.x0 ?? 0, y: source.y ?? source.y0 ?? 0} }))
        .remove();

      // NODES
      const node = nodeGroup.selectAll('g.node').data(nodes, d => d.data.id);

      const nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr('transform', () => `translate(${source.y0 ?? 0},${source.x0 ?? 0})`)
        .on('click', (event, d) => { toggle(d); update(d); })
        .on('mouseenter', (event, d) => showTooltip(event, d))
        .on('mouseleave', hideTooltip);

      nodeEnter.append('circle')
        .attr('r', 1e-6)
        .attr('fill', d => d._children ? '#93c5fd' : '#e2e8f0')
        .attr('stroke', '#64748b');

      nodeEnter.append('text')
        .attr('dy', 3).attr('x', 10)
        .text(d => d.data.name)
        .attr('fill', '#0f172a');

      const nodeUpdate = nodeEnter.merge(node);
      nodeUpdate.transition().duration(duration)
        .attr('transform', d => `translate(${d.y},${d.x})`);
      nodeUpdate.select('circle').transition().duration(duration)
        .attr('r', 8)
        .attr('fill', d => d._children ? '#93c5fd' : '#e2e8f0');

      node.exit().transition().duration(duration)
        .attr('transform', () => `translate(${source.y ?? source.y0 ?? 0},${source.x ?? source.x0 ?? 0})`)
        .remove();

      nodes.forEach(d => { d.x0 = d.x; d.y0 = d.y; });

      // keep SVG fitted and index fresh
      fitToContent(nodes);
      rebuildIdIndex();
    }

    function diagonal(d) {
      return `M${d.source.y},${d.source.x}C${(d.source.y + d.target.y) / 2},${d.source.x} ${(d.source.y + d.target.y) / 2},${d.target.x} ${d.target.y},${d.target.x}`;
    }
    function toggle(d) {
      if (d.children) { d._children = d.children; d.children = null; }
      else if (d._children) { d.children = d._children; d._children = null; }
    }
    function fitToContent(nodes) {
      const minX = d3.min(nodes, d => d.x) - 40;
      const maxX = d3.max(nodes, d => d.x) + 40;
      const minY = d3.min(nodes, d => d.y) - 60;
      const maxY = d3.max(nodes, d => d.y) + 120;
      d3.select('#tree').attr('viewBox', `${minY} ${minX} ${maxY - minY} ${maxX - minX}`);
    }

    // Tooltip
    const tooltip = document.getElementById('tooltip');
    function showTooltip(event, d) {
      const chapters = (d.data.chapters || []).map(ch => `<a class="underline" href="${BGW(ch)}" target="_blank" rel="noopener">${displayChapter(ch)}</a>`).join(', ');
      tooltip.innerHTML = `<div class="font-medium mb-1">${d.data.name}</div>` +
                          (chapters ? `<div class="text-slate-600">${chapters}</div>` : '<div class="text-slate-400">장 정보 없음</div>');
      tooltip.style.left = (event.clientX + 12) + 'px';
      tooltip.style.top = (event.clientY + 12) + 'px';
      tooltip.classList.remove('hidden');
    }
    function hideTooltip() { tooltip.classList.add('hidden'); }

    // Right-panel chapters (store IDs, then resolve to live nodes)
    const allChapters = collectChapters(data);
    const chapterToIds = mapChapterToIds(data);
    const chaptersHost = document.getElementById('chapters');

    for (const ch of allChapters) {
      const ids = chapterToIds.get(ch) || [];
      const link = document.createElement('a');
      link.href = BGW(ch);
      link.target = '_blank';
      link.rel = 'noopener';
      link.className = 'chapter-chip pill bg-white';
      link.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5V6.5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v13l-7-3-7 3Z"/></svg>
                        <span>${displayChapter(ch)}</span>
                        <span class="text-slate-500">(${ids.length})</span>`;
      link.addEventListener('click', (event) => {
        if (event.metaKey || event.ctrlKey) return; // allow open in new tab
        event.preventDefault();
        highlightByChapterIds(ids);
      });
      chaptersHost.appendChild(link);
    }

    // Highlight helpers
    function clearHighlights() {
      nodeGroup.selectAll('g.node').classed('highlight', false);
      linkGroup.selectAll('path.link').classed('highlight', false);
    }
    function highlightByChapterIds(idList) {
      clearHighlights();
      // resolve to live nodes
      const nodes = idList.map(id => idToNode.get(id)).filter(Boolean);
      if (!nodes.length) return;
      // ensure visible
      nodes.forEach(n => { let p = n.parent; while (p) { expand(p); p = p.parent; } });
      update(nodes[0]);
      nodeGroup.selectAll('g.node').filter(d => nodes.includes(d)).classed('highlight', true);
      nodes.forEach(n => linkGroup.selectAll('path.link').filter(l => l.target === n).classed('highlight', true));
      centerOnNode(nodes[0]);
    }
    function centerOnNode(d) {
      const svgEl = d3.select('#tree').node();
      const {width, height} = svgEl.getBoundingClientRect();
      const scale = 0.9;
      const transform = d3.zoomIdentity
        .translate(width/2 - (d.y*scale), height/2 - (d.x*scale))
        .scale(scale);
      d3.select('#tree').transition().duration(400).call(zoom.transform, transform);
    }

    // Search (works on live tree)
    const searchInput = document.getElementById('searchInput');
    window.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault(); searchInput.focus(); searchInput.select();
      }
    });
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase();
      clearHighlights();
      if (!q) return;
      const matches = [];
      root.each(d => { if ((d.data.name || '').toLowerCase().includes(q)) matches.push(d); });
      if (!matches.length) return;
      matches.forEach(n => { let p = n.parent; while (p) { expand(p); p = p.parent; } });
      update(matches[0]);
      nodeGroup.selectAll('g.node').filter(d => matches.includes(d)).classed('highlight', true);
      centerOnNode(matches[0]);
    });

    // Buttons
    document.getElementById('resetBtn').addEventListener('click', () => {
      clearHighlights();
      d3.select('#tree').transition().duration(400).call(zoom.transform, d3.zoomIdentity);
    });
    document.getElementById('expandAllBtn').addEventListener('click', () => {
      root.each(d => expand(d));
      update(root);
    });
    document.getElementById('collapseAllBtn').addEventListener('click', () => {
      root.children && root.children.forEach(collapse);
      update(root);
    });

    // Initial render
    update(root);

