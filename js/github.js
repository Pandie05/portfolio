fetch('https://api.github.com/users/Pandie05/repos')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('repo-list');
        data.forEach(repo => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
            <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
            <p>${repo.description || 'No description available.'}</p>
          `;
            container.appendChild(card);
        });
    });
