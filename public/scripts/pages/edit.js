import { editArticle } from "../apis/editApi.js";
import { showMessage } from "../export/utils.js";

document.getElementById('edit-form').addEventListener('submit', async () => {
    const data = await editArticle({
        title: document.getElementById('title').value,
        category: document.getElementById('category').value,
        description: document.getElementById('description').value,
        markdown: document.getElementById('markdown').value,
        author: document.getElementById('author').value
    });
    if(data.error) {
        showMessage(data.error);
    }else {
        showMessage('Article Update Successful');
        location.href = '/dashboard';
    }
});