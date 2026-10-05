import csv

with open('bosses.csv', newline='', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    bosses = list(reader)

with open('bosses-data.js', 'w', encoding='utf-8') as f:
    f.write('const BOSSES = [\n')
    for b in bosses:
        f.write(
            f'  {{ name: "{b["name"]}", icon: "{b["F4 Boss"]}", '
            f'version: "{b["season"]}", color: "{b["color"]}", '
            f'hp: {b["F4 total HP"]} }},\n'
        )
    f.write('];\n')