const path = require('path');

class BaseExportService {
    constructor(fileExtension) {
        this.fileExtension = fileExtension;
    }

    getOutputFilePath(fileName) {
        return `${fileName}.${this.fileExtension}`;
    }
}

exports.BaseExportService = BaseExportService;

