const flag1 = true;
const flag2 = false;

if(flag1 || flag2) {
    console.log("どっちかはtrue");
}
if(flag1 && flag2) {
    console.log("両方true")
}

//左側がtrueだった場合、その時点で値を返却
const num = undefined;
const fee = num || "金額未設定です";
console.log(fee);

//左側がfalseだった場合、その時点で値を返す
//両方trueだった場合は、右側の値を返す
const num2 = "ABC";
const fee2 = num2 && "何か設定しました";
console.log(fee2);