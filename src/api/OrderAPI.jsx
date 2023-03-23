import { SERVER_ADDR } from "../configs/config";


export const createOrder = async (token, order) => {
    
    // setup items
    order['items'] = [];
    order.checkedItems.map((e) => {
        let item = {};
        item['titleID'] = e.title._id;
        item['name'] = e.title.name;
        item['image'] = e.title.image;
        item['price'] = e.title.price;
        item['count'] = e.count;
        console.log(item);
        order.items.push(item);
    })
    delete order.checkedItems
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }, 
        body: JSON.stringify(order)
    };
    const response = await fetch(`${SERVER_ADDR}/order/create`, options);
    
    const data = await response.json();
    console.log(data)

    return {data: data, status: response.status, ok: response.ok};

}