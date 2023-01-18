async function getEmails(postId) {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    const filtered = data.filter((objeto) => objeto.postId === postId);
    filtered.forEach((item) => {
      console.log(`id: ${item.id}, nome: ${item.name}, email: ${item.email},comentario: ${item.body}`);
    });
  } catch (error) {
    console.log(error);
  }
}
getEmails(1);