import csv
from pathlib import Path

base_dir = Path(__file__).resolve().parent

with open(base_dir / 'bosses.csv', newline='', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    bosses = list(reader)


def clean_number(value):
    value = str(value or '0').replace(',', '').replace(' ', '')
    return int(value) if value else 0


def write_bosses_file(file_name, variable_name, hp_key):
    with open(base_dir / file_name, 'w', encoding='utf-8') as f:
        f.write(f'const {variable_name} = [\n')
        for b in bosses:
            f.write(
                f'  {{ name: "{b["name"]}", icon: "{b["F4 Boss"]}".replace("crownless.webp", "crownless-icon.webp"), '
                f'version: "{b["season"]}", color: "{b["color"]}", '
                f'hp: {clean_number(b[hp_key])} }},\n'
            )
        f.write('];\n')


write_bosses_file('bosses-data.js', 'BOSSES', 'F1 total')
write_bosses_file('bosses-data2.js', 'BOSSES2', 'F2 total')