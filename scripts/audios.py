"""Gera os áudios (mp3) das aulas prontas com a voz neural Kokoro-82M (Apache-2.0), sem internet.
   Saída: app/audio/<id da aula>.json  =  {chave: mp3 em base64}. Só gera o que falta (cache em --cache).

   Precisa (fora do repositório): pip install kokoro-onnx soundfile; ffmpeg;
   o modelo kokoro-q8.onnx (pacote npm kokoro-q8-shards, as 6 partes juntadas) e voices.npz
   (as vozes .bin do pacote npm kokoro-local-runtime). Francês fica com a voz do navegador.

   node scripts/audios-lista.js > /tmp/lista.json
   python scripts/audios.py /tmp/lista.json --model kokoro-q8.onnx --voices voices.npz --cache /tmp/clips
"""
import argparse, base64, json, os, subprocess, tempfile
VOZ = {('EN', 0): ('af_heart', 'en-us'), ('EN', 1): ('am_michael', 'en-us')}
ap = argparse.ArgumentParser(); ap.add_argument('lista'); ap.add_argument('--model'); ap.add_argument('--voices'); ap.add_argument('--cache', default='clips')
ap.add_argument('--out', default=os.path.join(os.path.dirname(__file__), '..', 'app', 'audio')); A = ap.parse_args()
os.makedirs(A.cache, exist_ok=True); os.makedirs(A.out, exist_ok=True)
aulas = json.load(open(A.lista)); tts = None
for d in aulas:
    out = {}
    for k, c in d['clips'].items():
        v = VOZ.get((d['lang'], c['who']))
        if not v: continue
        mp3 = os.path.join(A.cache, k + '.mp3')
        if not os.path.exists(mp3):
            if tts is None:
                from kokoro_onnx import Kokoro; import soundfile as sf
                tts = Kokoro(A.model, A.voices)
            wav, sr = tts.create(c['text'], voice=v[0], speed=0.95, lang=v[1])
            with tempfile.NamedTemporaryFile(suffix='.wav') as w:
                sf.write(w.name, wav, sr)
                subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', w.name, '-ac', '1', '-ar', '24000', '-b:a', '40k', mp3], check=True)
        out[k] = base64.b64encode(open(mp3, 'rb').read()).decode()
    if out:
        json.dump(out, open(os.path.join(A.out, d['id'] + '.json'), 'w'), separators=(',', ':'))
    print(d['id'], d['title'], len(out))
