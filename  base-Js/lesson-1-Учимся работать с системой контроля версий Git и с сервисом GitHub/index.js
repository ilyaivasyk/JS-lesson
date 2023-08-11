//git init встановити git в папку з проектом
// echo >> README.md
// git config --global(local) user.name 'name'
// git config --global(local) user.name 'email'
// 1 стан файлів - git не баче їх, вони просто стоять

// 2 ми добавляємо файли в git заставляєм git слідити за ними і добавляєм файли в так названий index 
//git add -A all files add to repository
//git add fileName add chouse file
//git status перевіряєм що є в нашому репозиторії

// 3 коли всі зміни зберігаються ми можемо бачити їх і повертати минулі версії
// git commit -a -m "First commit"

//git log відслідковування змін (git log --all --decorate --oneline --graph - гарний вивід)

//4 - створити репозиторій на  github

//5 - git remote add origin(other name) link git repository 

//git branch view branch 

//git checkout -b (name branch)  - create branch

//git push origin --delete (name branch) -delete remote branch

//git branch -d (name branch)  - delete local

//git remote -v  -view all remote repostitory

//git remote rm (name remote repository) - delete remote repository

//Надіслати всі гілки у віддалений репозиторій:	git push --all origin
//Надіслати гілку у віддалений репозиторій, щоб інші розробники могли з нею працювати:	git push origin 
