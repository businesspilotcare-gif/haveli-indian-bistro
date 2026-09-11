#!/usr/bin/env python3
"""Generate clean TypeScript menu data from the parsed original site menu."""
import re, json

raw = json.load(open('/home/z/my-project/scripts/menu_raw.json'))

def clean(s):
    s = re.sub(r'&middot;', '·', s)
    s = re.sub(r'&amp;amp;', '&', s)
    s = re.sub(r'&amp;', '&', s)
    s = re.sub(r'&ldquo;|&rdquo;', '"', s)
    s = re.sub(r'&#0?39;|&#x27;', "'", s)
    s = re.sub(r'&quot;', '"', s)
    return s.strip()

sections = []
for sec in raw:
    name = clean(sec['name'])
    note = clean(sec['note'])
    dishes = []
    for d in sec['dishes']:
        dname = clean(d['name'])
        # strip trailing badge text from name (badges were concatenated by the parser)
        for b in d['badges']:
            if dname.endswith(b):
                dname = dname[: -len(b)].strip()
        if dname.lower() == 'test dish':
            continue  # skip the test entry
        dishes.append({
            'name': dname,
            'desc': clean(d['desc']),
            'price': clean(d['price']),
            'badges': [clean(b) for b in d['badges']],
        })
    sections.append({'id': name.lower().replace(' ', '-').replace('—', '-').replace('&', '').replace('--', '-').replace('---', '-').strip('-'), 'name': name, 'note': note, 'bogo': sec['bogo'], 'dishes': dishes})

# fix ids manually for clean slugs
slug_map = {
    'Lunch Special': 'lunch',
    'Appetizers — Veg': 'appetizers-veg',
    'Appetizers — Non-Veg': 'appetizers-non-veg',
    'Tandoori': 'tandoori',
    'Chaat Corner': 'chaat',
    'Indo-Chinese': 'indo-chinese',
    'Mains — Veg': 'mains-veg',
    'Mains — Non-Veg': 'mains-non-veg',
    'Biryani': 'biryani',
    'Breads & Rice': 'breads-rice',
    'Drinks & Desserts': 'drinks-desserts',
}
for s in sections:
    s['id'] = slug_map.get(s['name'], s['id'])

out = "// Auto-generated from the original Haveli menu page\n"
out += "export type MenuDish = { name: string; desc: string; price: string; badges: string[] };\n"
out += "export type MenuSection = { id: string; name: string; note: string; bogo: boolean; dishes: MenuDish[] };\n\n"
out += "export const MENU: MenuSection[] = " + json.dumps(sections, indent=2, ensure_ascii=False) + ";\n"

with open('/home/z/my-project/src/data/menu.ts', 'w') as f:
    f.write(out)
print('written', len(sections), 'sections,', sum(len(s['dishes']) for s in sections), 'dishes')
