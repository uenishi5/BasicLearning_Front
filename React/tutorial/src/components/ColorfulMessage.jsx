import React from "react";

//引数を受け取った時点で分割代入：export const ColorfulMessage = ({ color,children} ) => {
export const ColorfulMessage = (props) => {
    //分割
    const { color,children} = props;

    const styles = {
        //color : color,を省略
        color,
        fontSize : "18px",
    };

    //Reactのお決まり「props.children」でタグに囲まれている要素を取得
    return(
        <p style={styles}>{children}</p>
    )
};