# **Permissões**
<br><br/>

>**Navegar até a pasta unix_tests ;**

>**Rodar o comando ls -l e veja quais as permissões dos arquivos;**

>**Mudar a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifiquar se está correto com o comando ls -l ;**
>
>- Resultado esperado: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

>**Tirar a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verificar se está correto com o comando ls -l ;**
>
>- Resultado esperado: -r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

>**Voltar à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt .**
>
>- Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt