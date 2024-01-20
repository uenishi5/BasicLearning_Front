const onClickAdd = () => {
    //テキストボックスから値を取得して初期化
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    createIncompleteToDo(inputText);
};

//渡された引数を基に未完了のTODOを作成する関数
const createIncompleteToDo = (todo) => {
    //liタグを生成
    const li = document.createElement("li");
    //divタグ生成・クラスを追加
    const div = document.createElement("div");
    div.className = "list-row";
    //pタグ生成・クラス追加・取得した内容を挿入
    const p = document.createElement("div");
    p.className = "todo-item";
    p.innerText = todo;

    //buttonタグを生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click",() => {
        //押された完了ボタンの親にあるliタグ配下を取得(完了・削除ボタンを削除)
        const moveTarget = completeButton.closest("li");
        //削除ボタンを押下(自身の次のタグを取得し削除)
        completeButton.nextElementSibling.remove();
        completeButton.remove();
        //戻すボタンを押下
        const backbutton = document.createElement("button");
        backbutton.innerText = "戻す";
        backbutton.addEventListener("click", () => {
            const todoNext = backbutton.previousElementSibling.innerText;
            createIncompleteToDo(todoNext);
            //押された戻すボタンを削除
            backbutton.closest("li").remove();
        });

        moveTarget.firstElementChild.appendChild(backbutton);

        //完了リストに移動
        document.getElementById("complete-list").appendChild(moveTarget);
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click",() => {
        //押された削除ボタンの親にあるliタグを未完了リストから削除
        const deleteTarget = deleteButton.closest("li");
        document.getElementById("incomlete-list").removeChild(deleteTarget);
    });

    //divタグ配下にpタグを追加
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    //liタグの配下にdivタグを追加
    li.appendChild(div);

    //未完了リストに追加
    document.getElementById("incomlete-list").appendChild(li);
    console.log(li);
};

document.getElementById("add").addEventListener("click", onClickAdd);

