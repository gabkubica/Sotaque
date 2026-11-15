"""Marca os arquivos do Sotaque com a versão do momento (?v=...), para o navegador buscar a versão nova
logo depois de cada publicação. Rodar antes de cada commit: python3 scripts/versao.py"""
import re, time, pathlib
v = time.strftime('%Y%m%d%H%M')
raiz = pathlib.Path(__file__).resolve().parent.parent
for p in ['app/index.html', 'aulas/index.html']:
    f = raiz / p; s = f.read_text()
    s = re.sub(r'((?:src|href)="(?!https?:)[^"]+\.(?:js|css))(?:\?v=\d+)?"', lambda m: f'{m.group(1)}?v={v}"', s)
    f.write_text(s)
print('versão', v)
