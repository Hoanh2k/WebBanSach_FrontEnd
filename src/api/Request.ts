
export async function my_request(enpoint: string) {
    //duong dan
    const responses = await fetch(enpoint);
    //loi 
    if (!responses.ok) {
        throw new Error(`Không thể truy cập ${enpoint}`);
    }
    //ok
    return responses.json();
}

