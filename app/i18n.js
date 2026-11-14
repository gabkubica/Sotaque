/* =========================================================
   Sotaque · idioma do sistema (português ou inglês)
   A professora escolhe em "Horários e pagamento"; vale para ela e para os alunos dela.
   O app é escrito em português; em inglês, cada texto que aparece na tela passa por este
   dicionário (frases inteiras e modelos com números, datas e nomes). Conteúdo das atividades
   (enunciados, textos da professora) não é traduzido.
   ========================================================= */
const UI_KEY='sotaque:ui';
function uiLang(){
  try { const me=S.me&&DB&&DB.users.find(u=>u.id===S.me); if (!me) return localStorage.getItem(UI_KEY)||'pt';
    const tid= me.role==='teacher'? me.id : me.teacherId, v=DB.settings?.[tid]?.ui||'pt'; localStorage.setItem(UI_KEY,v); return v; } catch { return 'pt'; }
}
const LOC=()=>uiLang()==='en'? 'en-US' : 'pt-BR';
const WD_EN={'domingo':'Sunday','segunda-feira':'Monday','terça-feira':'Tuesday','quarta-feira':'Wednesday','quinta-feira':'Thursday','sexta-feira':'Friday','sábado':'Saturday'};
const LANG_EN={'inglês':'English','Inglês':'English','francês':'French','Francês':'French','Português':'Portuguese'};
const pl=(n,one,many)=>`${n} ${+n===1? one : many}`;
const I18N_EXACT={
  /* navegação e conta */
  'Hoje':'Today','Alunos':'Students','Aula':'Class','Homework':'Homework','Biblioteca':'Library','Flashcards':'Flashcards','Trilha':'Path','Agenda':'Schedule',
  'Editar meu nome':'Edit my name','Meu estudo':'My study','Agenda da semana':'This week','Configurações':'Settings','Horários em que você pode dar aula':'Hours when you can teach','Sua chave PIX':'Your PIX key','Sair':'Log out','Seguir o tema do sistema':'Follow system theme',
  'Sua conta':'Your account','Mudar para o modo escuro':'Switch to dark mode','Mudar para o modo claro':'Switch to light mode','Principal':'Main',
  /* entrar */
  'Suas aulas particulares, num lugar só.':'Your private lessons, all in one place.','Agenda, histórico das aulas e pacote. Para quem ensina e para quem aprende.':'Schedule, lesson history and packages. For teachers and learners.',
  'Entrar':'Log in','E-mail':'Email','Senha':'Password','Ainda não tem acesso? Seu professor ou professora cria a sua conta e te envia o login.':'No access yet? Your teacher creates your account and sends you the login.',
  'Contas de teste':'Test accounts','A senha de todas é':'The password for all of them is','Professora de inglês':'English teacher','Professor de francês':'French teacher','Aluno Theo':'Student Theo',
  'Modo demonstração: tudo fica salvo só neste navegador.':'Demo mode: everything is saved in this browser only.','E-mail ou senha incorretos.':'Wrong email or password.',
  /* caderno do aluno */
  'Não posso ir':'I can’t make it','Suas aulas':'Your lessons','Sua trilha':'Your path','Ver minha trilha':'See my path','Ver todas':'See all','Seu pacote':'Your package','Sua professora':'Your teacher','Seu professor':'Your teacher',
  'Próxima aula':'Next lesson','Entrar na aula':'Join the lesson','Acontecendo agora':'Happening now','Histórico':'History','As aulas aparecem aqui depois que acontecem.':'Lessons show up here after they happen.',
  'Depois da próxima':'After the next one','Mostrar menos':'Show less','Nenhuma aula marcada':'No lessons scheduled','Desistir do pedido':'Cancel my request','Pago':'Paid','Pendente':'Pending','Hora de renovar.':'Time to renew.',
  'O pacote terminou.':'The package is over.','Esta é a última aula do pacote.':'This is the last lesson of the package.','Nenhum pacote ainda.':'No package yet.','Copiar':'Copy','Tarefas':'Homework',
  'Nenhuma tarefa para fazer agora.':'No homework to do right now.','Remarcar ou cancelar':'Reschedule or cancel','Realizada':'Done','Agendada':'Scheduled','Cancelada':'Cancelled','Falta':'Missed','Remarcada':'Rescheduled',
  'Anotações da aula':'Lesson notes','Resumo da aula':'Lesson summary',
  /* homework */
  'Para fazer':'To do','Esperando correção':'Waiting for correction','Corrigidas':'Corrected','Tudo feito por aqui.':'All done here.','Entregue':'Submitted','Corrigida':'Corrected','Atrasada':'Late','Nova':'New',
  'Começar':'Start','Continuar':'Continue','Tarefa corrigida':'Corrected homework','Tarefa entregue':'Submitted homework','Entregar tarefa':'Submit homework','Entregar prova':'Submit test','Entregar provinha':'Submit quiz','Entregar teste':'Submit test',
  'Suas respostas ficam salvas enquanto você faz.':'Your answers are saved as you go.','Escreva sua resposta…':'Write your answer…','Sua resposta':'Your answer','sua resposta':'your answer','Comentário da professora:':'Teacher’s comment:','Comentário do professor:':'Teacher’s comment:',
  'Complete a frase.':'Complete the sentence.','Ligue as colunas.':'Match the columns.','Ponha as palavras na ordem certa.':'Put the words in the right order.','Toque nas palavras abaixo, na ordem certa.':'Tap the words below, in the right order.',
  'Recomeçar':'Start over','Escolha…':'Choose…','Verdadeiro':'True','Falso':'False','Múltipla':'Multiple choice','V ou F':'True/False','Lacuna':'Gap','Ligar':'Match','Ordenar':'Order','Escrita':'Writing','Escuta':'Listening','Leitura':'Reading','Fala':'Speaking',
  '✓ Certa':'✓ Right','✗ Errada':'✗ Wrong','Meio certa':'Partly right','Sem resposta':'No answer','Aguardando correção':'Waiting for correction','certa':'right','resposta certa':'right answer','esta era a certa':'this was the right one',
  'Todas certas!':'All right!','Também vale':'Also accepted','Resposta certa':'Right answer','Ouça e responda.':'Listen and answer.','Ver transcrição':'See transcript','Escrita curta':'Short writing',
  'Entregar assim mesmo':'Submit anyway','Entregar':'Submit','Voltar':'Back','Cancelar':'Cancel','Questões sem resposta contam como erradas. Depois de entregar, não dá para mudar.':'Unanswered questions count as wrong. After submitting, you can’t change them.',
  'Depois de entregar, não dá para mudar as respostas.':'After submitting, you can’t change your answers.','Entregar a tarefa?':'Submit the homework?','Entregar o teste?':'Submit the test?','Tarefa entregue. Veja seu resultado!':'Homework submitted. See your result!',
  'Provinha da trilha':'Path quiz','Prova de nível':'Level test','Teste de nivelamento':'Placement test','Nivelamento rápido':'Quick placement test','Teste entregue':'Test submitted','Teste concluído':'Test completed',
  'Seu nível de partida':'Your starting level','É daqui que as aulas partem. O nível não é um rótulo: ele muda conforme você avança.':'This is where your lessons start. Your level isn’t a label: it changes as you progress.',
  'Ainda não desta vez':'Not this time','Ver certificado':'See certificate','Marco conquistado ✦':'Milestone achieved ✦','Vale revisar e tentar de novo':'Worth reviewing and trying again',
  'Gramática e vocabulário':'Grammar and vocabulary','Não sei':'I don’t know',
  /* áudio */
  'Ouvir':'Listen','Parar':'Stop','pode ouvir quantas vezes quiser':'you can listen as many times as you want','Mais devagar':'Slower','Mais rápido':'Faster','Velocidade normal':'Normal speed','Velocidade do áudio':'Audio speed',
  'o ideal é ouvir até 2 vezes':'ideally, listen up to 2 times','Ouvir o exemplo':'Listen to the example','Ouvir a pergunta':'Listen to the question',
  'Este navegador não lê em voz alta. Abra no Chrome, no Edge ou no Safari.':'This browser can’t read aloud. Open it in Chrome, Edge or Safari.',
  /* flashcards */
  'Virar o cartão':'Flip the card','toque para virar':'tap to flip','Errei':'Wrong','Quase':'Almost','Acertei':'Got it','Fim da rodada':'End of round','Mandou muito bem!':'Great job!','Bom treino!':'Good practice!',
  'Estudar de novo':'Study again','Voltar aos baralhos':'Back to decks','Revisar':'Review','Estudar':'Study','Tudo em dia ✦':'All caught up ✦','Português':'Portuguese','Inglês':'English','Francês':'French',
  'Nenhum cartão para revisar agora. Volte amanhã: o que você acertou aparece de novo no tempo certo.':'No cards to review now. Come back tomorrow: what you got right will come back at the right time.',
  'O que você errou volta logo; o que acertou, só daqui a alguns dias.':'What you got wrong comes back soon; what you got right, only in a few days.','Modo de visualização: nada foi salvo.':'Preview mode: nothing was saved.',
  'Tudo revisado por hoje ✦':'All reviewed for today ✦','Nenhum baralho ainda.':'No decks yet.','Acertei ':'Got it','Cartão virado':'Card flipped',
  /* trilha (títulos; as frases "Eu consigo" ficam em português) */
  'Seu próximo passo':'Your next step','você está aqui':'you are here','Você está aqui':'You are here','você':'you','O que você vai conseguir fazer':'What you’ll be able to do','Seu progresso':'Your progress',
  'Marque o que você sente que já consegue. A professora confirma nas aulas.':'Tick what you feel you can already do. Your teacher confirms it in class.','você acha que consegue':'you think you can','Entregue!':'Submitted!','Provinha entregue':'Quiz submitted',
  'Conquistado':'Achieved','A caminho':'Coming up','Provinha liberada':'Quiz available','Ler':'Reading','Ouvir:':'Listening:','Escrever':'Writing','Falar':'Speaking','começando':'starting',
  'Ver detalhes':'See details','por habilidade':'by skill','Nível':'Level','de aula no Sotaque':'of lessons on Sotaque','Linha do tempo':'Timeline','confirmado na aula':'confirmed in class','Ver tudo':'See all','Mapa do A1 ao C1':'Map from A1 to C1',
  'Progresso por habilidade':'Progress by skill','Em andamento':'In progress','aulas restantes':'lessons left','aula restante':'lesson left','Histórico de pacotes':'Package history','← Tarefas':'← Homework','Sua frase':'Your sentence',
  'Quando a professora achar que é a hora, ela aparece aqui: leitura, escuta, escrita e uma conversa na aula ao vivo.':'When your teacher thinks it’s time, it shows up here: reading, listening, writing and a conversation in the live lesson.',
  'Quando o professor achar que é a hora, ela aparece aqui: leitura, escuta, escrita e uma conversa na aula ao vivo.':'When your teacher thinks it’s time, it shows up here: reading, listening, writing and a conversation in the live lesson.',
  'A professora vai avaliar a sua provinha.':'Your teacher will assess your quiz.','O professor vai avaliar a sua provinha.':'Your teacher will assess your quiz.',
  'Revise com a professora e tente de novo quando vocês acharem que é a hora.':'Review with your teacher and try again when you both think it’s time.','Revise com o professor e tente de novo quando vocês acharem que é a hora.':'Review with your teacher and try again when you both think it’s time.',
  'Configurações salvas':'Settings saved','Nenhuma tarefa ainda.':'No homework yet.',
  'professora@sotaque.app · agenda, alunos e pedidos de remarcação':'professora@sotaque.app · schedule, students and reschedule requests','professor@sotaque.app · três alunos de francês':'professor@sotaque.app · three French students',
  'marina@sotaque.app · inglês, toda terça às 19h':'marina@sotaque.app · English, every Tuesday at 7 pm','beatriz@sotaque.app · francês, toda segunda às 19h':'beatriz@sotaque.app · French, every Monday at 7 pm','theo@sotaque.app · pediu para remarcar a próxima aula':'theo@sotaque.app · asked to reschedule the next lesson',
  'Ainda não tem acesso? Seu professor ou professora cria a sua conta e te envia o login.':'No access yet? Your teacher creates your account and sends you the login.',
  /* professora: telas principais */
  'Aulas':'Lessons','Aulas para registrar':'Lessons to log','Buscar no banco':'Search activities','Conte como foi. O aluno vê o resumo no caderno dele.':'Tell how it went. The student sees the summary in their notebook.','Dados do aluno':'Student details','Do banco':'From the library',
  'Expressões':'Expressions','Gramática':'Grammar','Vocabulário':'Vocabulary','Pronúncia':'Pronunciation','Cultura':'Culture','Trabalho':'Work','Conjugação':'Conjugation','Horário fixo':'Fixed time','Lançar teste':'Send test','Lançar um teste':'Send a test',
  'Manter o horário original':'Keep the original time','Mostra a nota e o gabarito, como o aluno vê.':'Shows the score and answer key, as the student sees it.','Múltipla escolha':'Multiple choice','Verdadeiro ou falso':'True or false','Completar a lacuna':'Fill the gap','Ligar colunas':'Match columns','Ordenar a frase':'Order the sentence','Resposta escrita':'Written answer',
  'Novo aluno':'New student','Onde cada aluno está':'Where each student is','Para avaliar':'To assess','Para quem':'For whom','Pediu remarcação':'Asked to reschedule','Precisa da sua atenção':'Needs your attention','Propor outro horário':'Suggest another time','Próxima semana':'Next week',
  'Rápido':'Quick','Completo':'Full','Sem aulas':'No lessons','Testes lançados':'Tests sent','Tipo de questão':'Question type','Ver as questões e o gabarito →':'See questions and answer key →','Versão':'Version','Seção':'Section','ainda não lançada':'not sent yet','trilha do A1 ao C1':'A1 to C1 path',
  'Você está vendo a tarefa como o aluno vê. Pode responder e corrigir à vontade: nada é salvo nem enviado.':'You’re seeing the task as the student sees it. Answer and check freely: nothing is saved or sent.',
  'Última aula do pacote':'Last lesson of the package','← Alunos':'← Students','← Voltar para a tarefa':'← Back to the task','♪ Áudio':'♪ Audio','Dados do aluno ':'Student details',
  'Para ter uma ideia rápida do nível antes da primeira aula.':'For a quick idea of the level before the first lesson.','Para quem vai fazer um curso longo ou precisa de um diagnóstico detalhado, habilidade por habilidade.':'For long courses or a detailed diagnosis, skill by skill.',
  'Teste de nivelamento do A1 ao C1, com áudio, para quem chega sem você saber o nível.':'A1 to C1 placement test, with audio, for students whose level you don’t know yet.',
  'As tarefas que você mandou para os alunos. As objetivas se corrigem sozinhas; as escritas você corrige aqui.':'The homework you sent to your students. Objective questions are corrected automatically; you correct the written ones here.',
  'Atividades prontas de inglês. Abra, veja como o aluno vê ou mande como homework.':'Ready-made English activities. Open one, view it as a student or send it as homework.','Atividades prontas de francês. Abra, veja como o aluno vê ou mande como homework.':'Ready-made French activities. Open one, view it as a student or send it as homework.',
  'Baralhos de palavras e frases, com áudio. O aluno estuda em casa e o que ele erra volta mais vezes.':'Decks of words and phrases, with audio. Students study at home, and what they get wrong comes back more often.',
  'Seus PDFs, para mostrar na aula com a tela compartilhada e riscar por cima. Ficam guardados neste aparelho.':'Your PDFs, to show in class while sharing your screen and draw on top. They’re stored on this device.',
  'Importe um PDF para mostrar na aula: apostila, exercício, texto. Você passa as páginas, risca e marca por cima com a tela compartilhada.':'Import a PDF to show in class: coursebook, exercise, text. Turn the pages and draw on top while sharing your screen.',
  'Os PDFs ficam guardados neste aparelho. Use material que você pode usar nas aulas e evite mandar o arquivo de livros comprados para os alunos.':'PDFs are stored on this device. Use material you’re allowed to use in class, and avoid sending files of purchased books to students.',
  'Monte a sequência da aula e passe bloco a bloco com a tela compartilhada. Se preferir, abra qualquer atividade da Biblioteca em “Ver como aluno”.':'Build the class sequence and go block by block while sharing your screen. Or just open any Library activity in “View as student”.',
  'O teste vai para as tarefas do aluno. Quando ele entregar, as objetivas já chegam corrigidas, nível por nível; você classifica a escrita e a fala e define o nível dele.':'The test goes to the student’s homework. When they submit it, objective questions arrive corrected, level by level; you rate the writing and speaking and set their level.',
  'Gramática (15) · escuta (3 áudios) · 1 escrita · fala opcional':'Grammar (15) · listening (3 audios) · 1 writing · optional speaking','Gramática (30) · leitura (5 textos) · escuta (5 áudios) · 3 escritas · fala':'Grammar (30) · reading (5 texts) · listening (5 audios) · 3 writings · speaking',
  'Nenhuma aula montada ainda.':'No classes built yet.','Montar a primeira aula':'Build your first class','Começar':'Start','Estudar como aluno':'Study as a student','Editar e mandar':'Edit and send','Mandar para':'Send to','Nome do baralho':'Deck name','Cartões':'Cards','Nome da aula':'Class name','Aluno':'Student','Adicionar bloco':'Add block','Tirar':'Remove','Salvar e começar':'Save and start','Excluir aula':'Delete class','Excluir baralho':'Delete deck',
  'Bom dia':'Good morning','Boa tarde':'Good afternoon','Boa noite':'Good evening','Aulas de hoje':'Today’s lessons','Ver agenda':'See schedule','Próximos dias':'Next days','Dia livre. Aproveite!':'Free day. Enjoy!','Nenhuma aula hoje.':'No lessons today.',
  'Para corrigir':'To correct','Com os alunos':'With students','Todas':'All','+ Nova tarefa':'+ New homework','Lançadas':'Sent','Atividades':'Activities','Provas e nivelamento':'Tests and placement','PDFs':'PDFs',
  '+ Criar atividade':'+ Create activity','+ Novo baralho':'+ New deck','+ Importar PDF':'+ Import PDF','+ Nova aula':'+ New class','Editar':'Edit','Excluir':'Delete','Abrir':'Open','Salvar':'Save','Ver como aluno':'View as student',
  'Modo aluno.':'Student view.','Voltar para a tarefa':'Back to the task','Corrigir':'Check','Fazer de novo':'Do it again','Próximo ›':'Next ›','Terminar ›':'Finish ›','Tela cheia':'Full screen','Sair da tela cheia':'Exit full screen','← Sair':'← Exit',
  'Fim da aula':'End of class','Mandar e encerrar':'Send and finish','Encerrar sem mandar nada':'Finish without sending','Encerrar':'Finish','Texto ou pergunta':'Text or question','Atividade':'Activity','PDF':'PDF',
  'Ver':'View','Caneta':'Pen','Marca-texto':'Highlighter','Apagar marcas':'Clear marks','Virar atividade':'Turn into activity','Abrindo o PDF…':'Opening the PDF…',
  'Idioma do Sotaque':'Sotaque language','Vale para você e para os seus alunos.':'Applies to you and your students.','Todos os níveis':'All levels','Todos os temas':'All themes','Todos os tipos':'All types','♪ Com áudio':'♪ With audio',
};
const I18N_RX=[
  [/^(.+) às (.+) · (.+)$/,'$1 to $2 · $3'],
  [/^Remarcada · o horário original era (.+)$/,'Rescheduled · originally $1'],
  [/^Ver todas as (\d+) aulas$/,'See all $1 lessons'],
  [/^(\d+) de (\d+) marcos conquistados · agora:$/,'$1 of $2 milestones achieved · now:'],
  [/^(\d+) de (\d+) marcos$/,'$1 of $2 milestones'],
  [/^(\d+) de (\d+) aulas usadas$/,'$1 of $2 lessons used'],
  [/^Pacote de (\d+) aulas · (\d+) usadas · (.+)$/,'Package of $1 lessons · $2 used · $3'],
  [/^(\d+) aulas? · (R\$.+)$/,(m,n,v)=>`${pl(n,'lesson','lessons')} · ${v}`],
  [/^Comprado em (.+) · (\d+\/\d+) usadas$/,'Bought on $1 · $2 used'],
  [/^Prova de nível (.+)$/,'Level test $1'],
  [/^prova de nível (.+)$/,'level test $1'],
  [/^Provinha · (.+)$/,'Quiz · $1'],
  [/^Marco (A1|A2\+?|B1\+?|B2\+?|C1) · (.+)$/,'Milestone $1 · $2'],
  [/^(A1|A2\+?|B1\+?|B2\+?|C1), concluído$/,'$1, completed'],
  [/^(Ler|Ouvir|Escrever|Falar): (.+)$/,(m,k,v)=>`${{Ler:'Reading',Ouvir:'Listening',Escrever:'Writing',Falar:'Speaking'}[k]}: ${v}`],
  [/^referência Cambridge para chegar ao (.+), desde o zero, contando todo o estudo$/,'Cambridge reference to reach $1 from zero, counting all study'],
  [/^Parte (\d+) de (\d+)$/,'Part $1 of $2'],
  [/^Lacuna da questão (\d+)$/,'Gap in question $1'],
  [/^Par de (.+)$/,'Match for $1'],
  [/^A fala acontece na aula ao vivo: uma conversa de (\d+) a (\d+) minutos com (a professora|o professor), com perguntas, uma fala mais longa e uma situação para resolver juntos\.$/,'Speaking happens in the live lesson: a $1–$2 minute conversation with your teacher, with questions, a longer talk and a situation to solve together.'],
  [/^(\d+) (questões|questão)$/,(m,n)=>pl(n,'question','questions')],
  [/^(\d+) (questões|questão) · sem prazo$/,(m,n)=>pl(n,'question','questions')+' · no due date'],
  [/^(\d+) (questões|questão) · prazo (.+)$/,(m,n,_,d)=>pl(n,'question','questions')+' · due '+d],
  [/^(\d+) de (\d+) respondidas$/,'$1 of $2 answered'],
  [/^(\d+) de (\d+) certas$/,'$1 of $2 right'],
  [/^(\d+) de (\d+)$/,'$1 of $2'],
  [/^Você tem (\d+) (tarefa|tarefas) para fazer\.$/,(m,n)=>`You have ${pl(n,'task','tasks')} to do.`],
  [/^Você tem (\d+) (cartão|cartões) para revisar hoje\. Uns minutinhos por dia fazem diferença!$/,(m,n)=>`You have ${pl(n,'card','cards')} to review today. A few minutes a day make a difference!`],
  [/^(\d+) (cartão|cartões) · (\d+) aprendidos$/,(m,n,_,k)=>`${pl(n,'card','cards')} · ${k} learned`],
  [/^Estudar (\d+)$/,'Study $1'],
  [/^Ver todos os cartões \((\d+)\)$/,'See all cards ($1)'],
  [/^Seu caderno de (inglês|francês) · Toda (.+?) · (.+)$/,(m,l,d,h)=>`Your ${LANG_EN[l]} notebook · Every ${WD_EN[d]||d} · ${h}`],
  [/^Sua trilha no (inglês|francês)$/,(m,l)=>`Your ${LANG_EN[l]} path`],
  [/^Você está no (.+) · (\d+) de (\d+) marcos$/,'You are at $1 · $2 of $3 milestones'],
  [/^Fazer a provinha do marco (\d+)$/,'Take the quiz for milestone $1'],
  [/^Marco (\d+) · (.+) · você está aqui$/,'Milestone $1 · $2 · you are here'],
  [/^Marco (\d+)$/,'Milestone $1'],
  [/^Nível (.+)$/,'Level $1'],
  [/^(.+): (\d+) de (\d+) confirmadas(, (\d+) marcadas pelo aluno)?$/,(m,a,b,c,_,d)=>`${a}: ${b} of ${c} confirmed${d? `, ${d} ticked by the student` : ''}`],
  [/^Questão (\d+)$/,'Question $1'],
  [/^Tarefa d[ao] (professora|professor)$/,'Homework from your teacher'],
  [/^Entregue (.+)\. A (professora|professor) vai corrigir e o resultado aparece aqui\.$/,'Submitted $1. Your teacher will correct it and the result will show up here.'],
  [/^Entregue (.+)\. Obrigado! A (professora|professor) vai ler a sua escrita e conversar com você na próxima aula\. Depois, o seu nível aparece aqui\.$/,'Submitted $1. Thank you! Your teacher will read your writing and talk to you in the next lesson. Then your level will show up here.'],
  [/^entregue (.+)$/,'submitted $1'],
  [/^(\d+) (aula restante|aulas restantes)$/,(m,n)=>pl(n,'lesson left','lessons left')],
  [/^Você pediu para remarcar\. A (professora|professor) vai escolher um destes horários:$/,'You asked to reschedule. Your teacher will pick one of these times:'],
  [/^Ilustração: .+$/,'Illustration'],
  [/^(Prova de nível|Teste de nivelamento|Nivelamento rápido) · (Inglês|Francês)$/,(m,a,l)=>`${I18N_EXACT[a]} · ${LANG_EN[l]}`],
  [/^(.+) · (Inglês|Francês)$/,(m,a,l)=>`${a} · ${LANG_EN[l]}`],
  [/^(.+), (.+)\.$/,(m,g,n)=>I18N_EXACT[g]? `${I18N_EXACT[g]}, ${n}.` : null],
  [/^(Inglês|Francês) → Português$/,(m,l)=>`${LANG_EN[l]} → Portuguese`],
  [/^Português → (Inglês|Francês)$/,(m,l)=>`Portuguese → ${LANG_EN[l]}`],
  [/^(\d+) de (\d+) · (.+)$/,(m,a,b,c)=>`${a} of ${b} · ${I18N_EXACT[c]||c}`],
  [/^Muito bem, (.+)!$/,'Well done, $1!'],
  [/^Hoje você tem (\d+) (aula|aulas)\.(.*)$/,(m,n,_,r)=>`You have ${pl(n,'lesson','lessons')} today.${r.replace(/ E (\d+) (coisa precisa|coisas precisam) da sua atenção\./,(x,k)=>` And ${pl(k,'thing needs','things need')} your attention.`)}`],
  [/^Nenhuma aula hoje\.(.*)$/,(m,r)=>`No lessons today.${r.replace(/ E (\d+) (coisa precisa|coisas precisam) da sua atenção\./,(x,k)=>` And ${pl(k,'thing needs','things need')} your attention.`)}`],
  [/^(\d+) cartões · ainda com nenhum aluno$/,'$1 cards · no students yet'],
  [/^(\d+) cartões · com (\d+) (aluno|alunos)$/,(m,a,b)=>`${a} cards · with ${pl(b,'student','students')}`],
  [/^(\d+) de (\d+) aprendidos · (\d+) para revisar$/,'$1 of $2 learned · $3 to review'],
  [/^(\d+) tarefas no banco · mostrando (\d+)$/,'$1 activities · showing $2'],
  [/^(\d+) de (\d+) tarefas · mostrando (\d+)$/,'$1 of $2 activities · showing $3'],
  [/^(\d+) alunos de (inglês|francês) · cada um com o seu caderno\.$/,(m,n,l)=>`${n} ${LANG_EN[l]} students · each with their own notebook.`],
  [/^(\d+) (tarefa|tarefas) para corrigir$/,(m,n)=>`${pl(n,'task','tasks')} to correct`],
  [/^(Inglês|Francês) · (.+)$/,(m,l,r)=>`${LANG_EN[l]} · ${r}`],
  [/^Próxima: (.+)$/,'Next: $1'],
  [/^(.+) · (\d+) questões · entregue (.+)$/,'$1 · $2 questions · submitted $3'],
  [/^(Completo|Rápido) · (entregue|lançado|nível definido) (.+)$/,(m,v,k,r)=>`${I18N_EXACT[v]} · ${{entregue:'submitted',lançado:'sent','nível definido':'level set'}[k]} ${r}`],
  [/^lançada (\d+) vez(es)?$/,(m,n)=>`sent ${pl(n,'time','times')}`],
  [/^Mostrar mais (\d+)$/,'Show $1 more'],
  [/^Sem trilha ativa: (.+)\.$/,'No active path: $1.'],
  [/^Horários que (.+) sugeriu\. Clique para confirmar:$/,'Times $1 suggested. Click to confirm:'],
  [/^(.+) – (.+) · as aulas fixas de cada aluno aparecem sozinhas\. Clique numa aula para registrar, remarcar ou cancelar\.$/,'$1 – $2 · each student’s fixed lessons appear automatically. Click a lesson to log, reschedule or cancel it.'],
  [/^Toda (.+) · (.+)$/,(m,d,h)=>`Every ${WD_EN[d]||d} · ${h}`],
  [/^(.+) · (Gramática|Vocabulário|Escuta|Leitura|Escrita|Expressões|Pronúncia|Cultura|Trabalho|Kids|Phrasal verbs|Au Pair|Conjugação)$/,(m,a,t)=>`${a} · ${I18N_EXACT[t]||t}`],
  [/^(Gramática|Vocabulário|Escuta|Leitura|Escrita|Expressões|Pronúncia|Cultura|Trabalho|Kids|Phrasal verbs|Au Pair|Conjugação) · (\d+) questões$/,(m,t,n)=>`${I18N_EXACT[t]||t} · ${n} questions`],
  [/^(\d+) (questões|questão) · (.+)$/,(m,n,_,r)=>`${pl(n,'question','questions')} · ${r}`],
  [/^(\d+) (blocos|bloco)(.*)$/,(m,n,_,r)=>`${pl(n,'block','blocks')}${r.replace(' · dada ',' · taught ')}`],
];
/* datas relativas */
function relEn(ts){
  const d=ts-now(), a=Math.abs(d);
  if (a<HOUR){ const n=Math.max(1,Math.round(a/MIN)); return d>0? `in ${n} min` : `${n} min ago`; }
  if (a<DAY){ const n=Math.round(a/HOUR); return d>0? `in ${n} h` : `${n} h ago`; }
  const n=Math.round((dayStart(ts)-dayStart(now()))/DAY);
  if (n===1) return 'tomorrow'; if (n===-1) return 'yesterday';
  return n>0? `in ${n} days` : `${-n} days ago`;
}
function tr(s){
  const t=s.trim(); if (!t||!/[A-Za-zÀ-ú]/.test(t)) return s;
  let r=I18N_EXACT[t];
  if (r==null) for (const [rx,rep] of I18N_RX){ if (rx.test(t)){ const x=t.replace(rx,rep); if (x!=null&&!x.includes('null')){ r=x; break; } } }
  if (r==null){ const m=t.match(/^(.*?)\(([^()]*)\)$/); if (m&&I18N_EXACT[m[1].trim()]) r=`${I18N_EXACT[m[1].trim()]} (${m[2]})`; }
  return r==null? s : s.replace(t,r);
}
const I18N_SKIP='script,style,svg,textarea,.prose,.mine,.txt,.fl-face,.fl-list,.no-i18n,.aula-body';
function translateTree(root){
  if (uiLang()!=='en'||!root) return;
  if (root.nodeType===3){ if (!root.parentElement?.closest(I18N_SKIP)) { const v=tr(root.data); if (v!==root.data) root.data=v; } return; }
  if (root.nodeType!==1) return;
  const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT); let n; const list=[];
  while ((n=w.nextNode())) list.push(n);
  for (const x of list){ if (x.parentElement?.closest(I18N_SKIP)) continue; const v=tr(x.data); if (v!==x.data) x.data=v; }
  const els=root.querySelectorAll? [root,...root.querySelectorAll('[placeholder],[aria-label],[title]')] : [];
  for (const e of els) for (const a of ['placeholder','aria-label','title']){ const v=e.getAttribute?.(a); if (v){ const t=tr(v); if (t!==v) e.setAttribute(a,t); } }
}
new MutationObserver(ms=>{ if (uiLang()!=='en') return; for (const m of ms) m.addedNodes.forEach(translateTree); })
  .observe(document.documentElement,{childList:true,subtree:true});
