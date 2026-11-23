// Förbättrar tabeller i artikel-HTML enligt modern-web-guidance:
// - wrappar varje <table> i en tangentbordsvänlig scroll-container (role=region, tabindex=0, aria-labelledby)
// - ger rubrikceller scope (thead → scope="col", första cellen i varje rad → <th scope="row">)
// - märker 2-kolumnstabeller så de staplas på smala skärmar (container query i CSS)
export function enhanceTables(html: string, labelId?: string): string {
  if (!html || !html.includes('<table')) return html;

  return html.replace(/<table[^>]*>[\s\S]*?<\/table>/g, (table) => {
    let t = table;

    // thead-rubriker får scope="col"
    t = t.replace(/<thead>([\s\S]*?)<\/thead>/g, (_m, inner: string) =>
      '<thead>' + inner.replace(/<th(?![^>]*\bscope=)/g, '<th scope="col"') + '</thead>');

    // första cellen i varje rad (som inleds med <td>) blir radrubrik <th scope="row">
    t = t.replace(/<tr>[\s\S]*?<\/tr>/g, (row) => {
      if (!/^\s*<tr>\s*<td>/.test(row)) return row;
      return row.replace(/<td>/, '<th scope="row">').replace(/<\/td>/, '</th>');
    });

    // räkna kolumner i första raden för att avgöra om tabellen ska staplas
    const firstRow = t.match(/<tr>[\s\S]*?<\/tr>/)?.[0] || '';
    const cols = (firstRow.match(/<t[hd][ >]/g) || []).length;
    const extraClass = cols === 2 ? ' table-2col' : '';

    const label = labelId
      ? ` aria-labelledby="${labelId}"`
      : ' aria-label="Tabell"';

    return `<div class="table-wrapper${extraClass}" role="region"${label} tabindex="0">${t}</div>`;
  });
}
