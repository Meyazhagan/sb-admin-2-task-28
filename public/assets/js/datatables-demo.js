// Call the dataTables jQuery plugin
function makeTable(tableId) {
  $(document).ready(function () {
    $(`#${tableId}`).DataTable();
  });
}
