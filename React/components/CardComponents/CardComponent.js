import React from 'react';

const cardComponent = (props) => {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            {props.showCards.map((item) => {
                return (
                    <div style={{ width: "30%", height: "30%", border: "1px solid black", textAlign: "center" }}>
                        <div key={item.id}>
                            <p>Student id : {item.id}</p>
                            <p>Name : {item.name}</p>
                            <p>Email Address : {item.email}</p>
                            <p>mobile Number : {item.mobileNo}</p>
                        </div>
                        <div style={{flexDirection:"row",justifyContent:"space-between"}}>
                            <button onClick = {()=>props.createClick(item.id)}>Create</button>
                            <button onClick = {()=>props.deleteClick(item.id)}>Delete</button>
                            <button onClick = {()=>props.updateClick(item.id)}>Update</button>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default cardComponent;