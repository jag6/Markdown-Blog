import { apiUrl } from "../export/config.js";

export const editArticle = async (article) => {
    try {
        const response = await axios ({
            url: `${apiUrl}/api/blog/edit/${article.id}`,
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            data: article
        });
        if(response.statusText !== 'OK'){
            throw new Error(response.data.message);
        }
        return response.data;
    }catch(err) {
        console.log(err);
        return { error: err.response.data.message || err.message };
    }
};