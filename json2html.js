// json2html.js

export default function json2html(data) {
  // Extract table headers dynamically from keys in the first object
  const headers = Array.from(new Set(data.flatMap(Object.keys)));

  // Generate HTML for the table
  let html = `<table data-user="nayudumounikagoud@gmail.com">
    <thead>
      <tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr>
    </thead>
    <tbody>
      ${data.map(row => `<tr>${
        headers.map(header => `<td>${row[header] || ''}</td>`).join('')
      }</tr>`).join('')}
    </tbody>
  </table>`;

  return html;
}
