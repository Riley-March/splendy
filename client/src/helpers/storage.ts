export const storage_get_item = (name: string) => {
    const stored_data = localStorage.getItem(name);
    if(stored_data){
        return JSON.parse(stored_data);
    }   
}

export const storage_set_item = (name: string, object: any) => {
    localStorage.setItem(name, JSON.stringify(object));
}

export const storage_delete_item = (name: string) => {
    localStorage.removeItem(name);
}

