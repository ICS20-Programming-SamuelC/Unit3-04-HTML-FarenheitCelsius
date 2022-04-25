// Copyright (c) 2022 Samuel Carlson All rights reserved
//
// Created by: Samuel Carlson
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates the area of a trapazoid.
 */
function calculate () {
  // input
  let fahrenheit = parseInt(document.getElementById('fahrenheit').value)
  // process
  const celsius = (fahrenheit − 32) * 5 / 9

  // output
  document.getElementById('celsius').innerHTML = 'The temperature in degrees celsius is ' + celsius + ' . '
}