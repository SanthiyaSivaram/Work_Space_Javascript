
//order summary
function getorderSunmmary(ordersummary){
    console.log("order Summary")
    for(let i=0; i < ordersummary.length;i++)
    {
        console.log("User Id :" +ordersummary[i].userid + "item :" + ordersummary[i].orderitem + "amount :" + ordersummary[i].amount)
    }
}
//fetching user order details
function getuserOrderDetails(userid, callback) {
    const userorderdetails = [
        { "userid": 1, "orderitem": "tea", "amount": 20 },
        { "userid": 2, "orderitem": "coffee", "amount": 15 }
    ];

    const filteredOrders = userorderdetails.filter(order => order.userid === userid.id);

    console.log("user details info:", typeof filteredOrders);

    if (filteredOrders.length > 0) {
        callback(filteredOrders);
    } else {
        console.log("order details not fetched");
    }
}
//fetching the user details

function getUserDetails (callback) {

    const userdetails = [{"id": 1, "name": "Santhiya"},
                        {"id": 2, "name": "Sandy"},
                        {"id": 3, "name": "Rj"},
    ]
    const user = userdetails.find(u => u.id === 2);
    
    if(user){
        callback(user,getorderSunmmary)
    }
    else{
       console.log("user not found")
    }
}
getUserDetails(getuserOrderDetails);