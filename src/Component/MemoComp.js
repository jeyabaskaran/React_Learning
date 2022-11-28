import React from "react";

function MemoComp({name}){
    console.log(name,'n am');
return(
    <div>
        Memo Comp {name}
    </div>
)

}

export default React.memo(MemoComp);