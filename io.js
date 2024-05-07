/*
 * solar
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2012, André König (andre.koenig -[at]- gmail [*dot*] com)
 *
 */

"use strict";

const fs = require('fs');

module.exports = function () {
    const DEFAULT_ENCODING = 'utf-8';
    const DEFAULT_LD = '\n';
    const SPLITTER = '$';

    return {
        exists: function (pathToDatabase, callback) {
            fs.exists(pathToDatabase, callback); //
