# QR Code Generator

Clone o projeto.

Entre na pasta `back-end`.

Crie o ambiente virtual com:
python -m venv venv

Ative o ambiente virtual:
No Windows:
.\venv\Scripts\activate
No Linux/macOS:
source venv/bin/activate

Instale as dependências:
pip install -r requirements.txt

Inicie o servidor:
uvicorn main:app --reload --host 0.0.0.0 --port 5000

Para o front-end, entre na pasta `front-end/qrcode`.

Instale as dependências:
npm install

Rode o front-end:
ng serve -o

A pasta `qr_codes` será criada automaticamente ao rodar o back-end.
