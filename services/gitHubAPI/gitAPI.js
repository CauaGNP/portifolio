export default async function getAPI(){
    try {
        const response = await fetch("https://api.github.com/users/CauaGNP/repos");

        if(!response.ok){
            alert(`erro no servidor`);
        };
        
        const data = await response.json();
        return data;

    } catch (error) {
        throw new Error(error)
    }

}