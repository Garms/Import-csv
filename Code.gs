function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Creates a tab in Sheet to run function
  ui.createMenu('Import csv')
      .addItem('Get Data', 'importCSVFromGoogleDrive')
      .addToUi();
}

function importCSVFromGoogleDrive() {
  // save csv
  
  var sheet = SpreadsheetApp.getActiveSheet();
  var fileName = sheet.getRange(1,14).getValue();
  var file = DriveApp.getFilesByName(fileName).next();
  var csvData = Utilities.parseCsv(file.getBlob().getDataAsString());
  var row = sheet.getActiveCell().getRow();
  var column = sheet.getActiveCell().getColumn();
  sheet.getRange(row, column, csvData.length, csvData[0].length).setValues(csvData);
}