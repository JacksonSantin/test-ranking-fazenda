const url="../../data/fazenda.json";fetch(url).then((n=>{if(!n.ok)throw new Error("Erro ao carregar o arquivo JSON");return n.json()})).then((n=>{const e=document.getElementById("table-body");n.data.forEach(((n,t)=>{const a=document.createElement("tr");a.innerHTML=`\n        <td>\n          <div class="image-bullet">\n            <img src="${n.picture}" class="participant-img" alt="${n.name}">\n            <span class="bullet">${t+1}</span>\n          </div>\n          <div class="info">\n            <p class="participant-name">${n.name}</p>\n            <span class="participant-desc">${n.description}</span>\n          </div>\n\n          <div class="tooltipContent">\n            <div class="like">\n              <div class="content">\n                <span class="header_tooltip_like">Gostam</span>\n                <span class="percent_tooltip_like">${n.positive?(n.positive/(n.positive+n.negative)*100).toFixed():"0"}%</span>\n              </div>\n            </div>\n            <div class="dislike">\n              <div class="content">\n                <span class="header_tooltip_dislike">Não Gostam</span>\n                <span class="percent_tooltip_dislike">${n.negative?(n.negative/(n.positive+n.negative)*100).toFixed():"0"}%</span>\n              </div>\n            </div>\n          </div>\n        </td>\n      `,e.appendChild(a)}))})).catch((n=>{console.error("Ocorreu um erro:",n)}));
//# sourceMappingURL=all.js.map
