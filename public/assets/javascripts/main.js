const url = "../../data/fazenda.json";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Erro ao carregar o arquivo JSON');
    }
    return response.json();
  })
  .then((data) => {
    const tableBody = document.getElementById('table-body');

    data.data.forEach((record, index) => {

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <div class="image-bullet">
            <img src="${record.picture}" class="participant-img" alt="${record.name}">
            <span class="bullet">${index + 1}</span>
          </div>
          <div class="info">
            <p class="participant-name">${record.name}</p>
            <span class="participant-desc">${record.description}</span>
          </div>

          <div class="tooltipContent">
            <div class="like">
              <div class="content">
                <span class="header_tooltip_like">Gostam</span>
                <span class="percent_tooltip_like">${record.positive ? (record.positive / (record.positive + record.negative) * 100).toFixed() : "0"}%</span>
              </div>
            </div>
            <div class="dislike">
              <div class="content">
                <span class="header_tooltip_dislike">Não Gostam</span>
                <span class="percent_tooltip_dislike">${record.negative ? (record.negative / (record.positive + record.negative) * 100).toFixed() : "0"}%</span>
              </div>
            </div>
          </div>
        </td>
      `;
      tableBody.appendChild(tr);
    });
  })
  .catch((error) => {
    console.error('Ocorreu um erro:', error);
  });