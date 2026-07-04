#!/usr/bin/env python3
"""
Sincroniza data/content.json → index.html (JSON inline).

Uso:  python sync.py
"""

import json
import re
from pathlib import Path

ROOT = Path(__file__).parent
DATA_FILE = ROOT / 'data' / 'content.json'
HTML_FILE = ROOT / 'index.html'

with open(DATA_FILE, 'r', encoding='utf-8') as f:
    data = json.load(f)

json_str = json.dumps(data, indent=2, ensure_ascii=False)

with open(HTML_FILE, 'r', encoding='utf-8') as f:
    html = f.read()

pattern = r'(<script type="application/json" id="content-data">).*?(</script>)'
replacement = r'\1' + json_str + r'\2'

if re.search(pattern, html, re.DOTALL):
    html = re.sub(pattern, replacement, html, count=1, flags=re.DOTALL)
    with open(HTML_FILE, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f'✅ Sincronizado: {DATA_FILE} → {HTML_FILE}')
else:
    print('❌ No se encontró <script id="content-data"> en index.html')
